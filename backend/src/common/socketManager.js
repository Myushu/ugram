const logger = require("../common/logger");
const orm = require("../common/orm");

const notificationModel = orm.getSequelize().import("../models/NOTIFICATION.js");
const chatMessageModel = orm.getSequelize().import("../models/CHAT_MESSAGE.js");

const typeToModel = {
  'notification' : notificationModel,
  'message' : chatMessageModel
}

const clients = [];
const sockets = [];

module.exports.addClient = (clientId, socket) => {
  if (clients[clientId] === undefined)
    clients[clientId] = [];
  clients[clientId][socket.id] = socket;
  sockets[socket.id] = clientId
  logger.info('User ' +  clientId + ' is now connected');
}

module.exports.removeClient = (socket) => {
  var userId = sockets[socket.id];
  logger.info('User ' +  userId + ' is now disconnected');
  if (userId != undefined) {
    delete clients[userId][socket.id];
    delete sockets[socket.id];
  }
}

function sendMessageToClient(clientId, messageType, message) {
  for (var socket in clients[clientId]) {
    clients[clientId][socket].emit(messageType, message);
  }
}

module.exports.notifyClient = (clientId, messageType, message) => {
  if (clients[clientId] != undefined)
    sendMessageToClient(clientId, messageType, message)
  //orm.create(typeToModel[messageType], undefined, message);
}
