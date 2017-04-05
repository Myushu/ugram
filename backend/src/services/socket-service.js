const orm = require('../common/orm');
const logger = require("../common/logger");
const jwtDecode = require('jwt-decode');
const redisToken = require('../common/redisToken')
const socketManager = require("../common/socketManager");
const userService = require('../services/users-service');
const notificationManager = require('../common/notificationManager');

const messageModel = orm.getSequelize().import("../models/MESSAGE.js");

exports.init = (io) => {
  socketManager.init(io);
}

exports.join = (data, client) => {
  try {
    var user = jwtDecode(data);
    redisToken.isTokenOnRedis(data, user, function (err, repplies) {
      if (repplies == user.userId) {
        socketManager.addClient(user.userId, user.pseudo, client);
        userService.setConnectStatus(true,  user.userId);
        notificationManager.notifyConnection(client, user.userId);
      } else
        client.disconnect('unauthorized');
    });
  } catch (e) {
    logger.error(e.message);
  }
}

exports.disconnect = (client) => {
  idUser = socketManager.getClientId(client).USER_ID;
  userService.setConnectStatus(false, idUser);
  socketManager.removeClient(client);
  notificationManager.notifyDisconnection(client, idUser);
  client.disconnect('connection closed');
}

exports.message = (io, client, message) => {
  var user = socketManager.getClientId(client);
  if (!user.USER_ID) {
    client.emit('errors', 'You are not connected');
    logger.warn('user with invalid token try to send message');
    return ;
  }
  message.PSEUDO = user.PSEUDO;
  message.ID_RECEIVER = message.USER_ID;
  message.ID_SENDER = user.USER_ID;
  delete message.PSEUDO;
  delete message.USER_ID;
  socketManager.notifyClient(message.ID_RECEIVER, 'message', message)
  orm.create(messageModel, undefined, message);
}
