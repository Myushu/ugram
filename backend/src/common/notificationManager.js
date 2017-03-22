const socketManager = require('./socketManager');
const orm = require("../common/orm");

const notificationModel = orm.getSequelize().import("../models/NOTIFICATION.js");

module.exports.notifyClient = (clientId, msg, pictureId, userId) => {
  var message = {
    MESSAGE : msg,
    ID_PICTURE : pictureId,
    ID_USER : userId}
    socketManager.notifyClient(clientId, 'notification', message);
    message.ID_OWNER =  clientId;
    orm.create(notificationModel, undefined, message);
}

module.exports.notifyComment = (ownerId, pseudo, pictureId) => {
  this.notifyClient(ownerId, pseudo + ' commented one of your picture', pictureId, ownerId);
}

module.exports.notifyMention = (ownerId, pseudo, userId, pictureId) => {
  this.notifyClient(ownerId, pseudo + ' tagged you on one of his picture', pictureId, userId);
}

module.exports.notifyReaction = (ownerId, pseudo, pictureId) => {
  this.notifyClient(ownerId, pseudo + ' reacted one of your picture', pictureId, ownerId);
}
