const orm = require('../common/orm');
const logger = require("../common/logger");
const redisToken = require('../common/redisToken')
const socketManager = require("../common/socketManager");
const userService = require('../services/users-service');
const notificationManager = require('../common/notificationManager');

const messageModel = orm.getSequelize().import("../models/MESSAGE.js");

exports.init = (io) => {
  socketManager.init(io);
}

function testClientConnection(client) {
  var user = socketManager.getClientId(client);
  if (user == undefined) {
    client.disconnect('unauthorized');
    return undefined;
  }
  return user;
}

exports.connect = (client) => {
  var user = testClientConnection(client);
  if (user == undefined)
    return ;

  redisToken.isTokenOnRedis(socketManager.getToken(client), user, function (err, repplies) {
    if (repplies == user.userId) {
      socketManager.addClient(user.userId, user.pseudo, client);
      userService.setConnectStatus(true,  user.userId);
      notificationManager.notifyConnection(client, user.userId);
    } else {
      logger.warn('Socket connection with unauthorized token');
      client.disconnect('unauthorized');
    }
  });
}

exports.disconnect = (client) => {
  var user = testClientConnection(client);
  if (user == undefined)
    return ;

  userService.setConnectStatus(false, user.userId);
  socketManager.removeClient(client, user.userId);
  notificationManager.notifyDisconnection(client, user.userId);
  client.disconnect('connection closed');
}

exports.message = (io, client, message) => {
  var user = testClientConnection(client);
  if (user == undefined)
    return ;

  message.ID_RECEIVER = message.USER_ID;
  message.ID_SENDER = user.userId;
  delete message.USER_ID;
  logger.error('ERROR MESSAGE', message);
  socketManager.notifyClient(message.ID_RECEIVER, 'message', message)
  orm.create(messageModel, undefined, message);
}
