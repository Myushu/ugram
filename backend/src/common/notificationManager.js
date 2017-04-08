const socketManager = require('./socketManager');
const orm = require("../common/orm");

const userModel  = orm.getSequelize().import("../models/USER.js");
const notificationModel = orm.getSequelize().import("../models/NOTIFICATION.js");
const followModel = orm.getSequelize().import("../models/FOLLOWING.js");

function notifyClient (clientId, msg, pictureId, userId) {
  var message = {
    MESSAGE : msg,
    ID_PICTURE : pictureId,
    ID_USER : userId}
    socketManager.notifyClient(clientId, 'notification', message);
    message.ID_OWNER =  clientId;
    orm.create(notificationModel, undefined, message);
}

module.exports.notifyComment = (ownerId, idSender, pictureId) => {
  orm.find(userModel, undefined, {where : {ID_USER : idSender}}).then(function(result) {
    notifyClient(ownerId, result.PSEUDO + ' commented one of your picture', pictureId, ownerId);
  });
}

module.exports.notifyMention = (ownerId, userId, pictureId) => {
  orm.find(userModel, undefined, {where : {ID_USER : userId}}).then(function(result) {
    notifyClient(ownerId, result.PSEUDO + ' tagged you on one of his picture', pictureId, userId);
  });
}

module.exports.notifyReaction = (ownerId, idSender, pictureId) => {
  orm.find(userModel, undefined, {where : {ID_USER : idSender}}).then(function(result) {
    notifyClient(ownerId, result.PSEUDO + ' reacted one of your picture', pictureId, ownerId);
  });
}

module.exports.notifyFollowers = (user, pictureId) => {
  orm.find(userModel, undefined, {where : {ID_USER : user.userId}}).then(function(res) {
    orm.findAll(followModel, undefined, {where : {ID_USER : user.userId}}).then(function(result) {
      for (var i in result) {
        notifyClient(result[i].ID_FOLLOWER, res.PSEUDO + " posted a new picture", pictureId, user.userId);
      }
    });
  });
}

module.exports.notifyUpdateUser = () => {
  socketManager.notifyAll('update_client', "");
}

module.exports.notifyConnection = (socket, idUser) => {
  socketManager.broadcast(socket, 'status', {
    ID_USER : idUser,
    STATUS : 'connected'
  });
}

module.exports.notifyDisconnection = (socket, idUser) => {
  socketManager.broadcast(socket, 'status', {
    ID_USER : idUser,
    STATUS : 'disconnected'
  });
}
