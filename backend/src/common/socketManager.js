const logger = require("../common/logger");
const jwtDecode = require('jwt-decode');

var io;
const clients = [];

module.exports.init = (newIo) => {
  io = newIo;
}

module.exports.addClient = (clientId, pseudo, socket) => {
  if (clients[clientId] === undefined)
    clients[clientId] = [];
  clients[clientId][socket.id] = socket;
  logger.info('User ' +  clientId + ' is now connected');
}

module.exports.removeClient = (socket, clientId) => {
  logger.info('User ' +  clientId + ' is now disconnected');
  if (clientId != undefined) {
    delete clients[clientId][socket.id];
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
}

module.exports.notifyAll = (messageType, message) => {
  io.sockets.emit(messageType, message);
}

module.exports.broadcast = (socket, messageType, message) => {
  socket.broadcast.emit(messageType, message);
}

module.exports.getToken = (socket) => {
  return socket.handshake.headers.cookie.token;
}

module.exports.getClientId = (socket) => {
  try {
    return jwtDecode(socket.handshake.headers.cookie.token);
  } catch (e) {
    logger.warn('Socket connection with invalid token');
    return undefined;
  }
}
