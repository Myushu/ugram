const socketManager = require('./socketManager');

module.exports.notifyClient = (clientId, msg, pictureId, userId) => {
  socketManager.notifyClient(clientId, 'notification', {
    message : msg,
    pictureId : pictureId,
    userId : userId});
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
