const orm = require('../common/orm');
const logger = require("../common/logger");
const jwtDecode = require('jwt-decode');
const redisToken = require('../common/redisToken')
const socketManager = require("../common/socketManager");

const messageModel = orm.getSequelize().import("../models/MESSAGE.js");
;
exports.join = (data, client) => {
  try {
    var user = jwtDecode(data);
    redisToken.isTokenOnRedis(data, user, function (err, repplies) {
      if (repplies == user.userId)
        socketManager.addClient(user.userId, user.pseudo, client);
      else
        client.emit('errors', 'Invalid token');
    });
  } catch (e) {
    logger.error(e.message);
  }
}

exports.disconnect = (client) => {
  socketManager.removeClient(client);
}

exports.message = (io, client, message) => {
  var user = socketManager.getClientId(client);
  if (!user.USER_ID) {
    client.emit('errors', 'You are not connected');
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
