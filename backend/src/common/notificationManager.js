const socketManager = require('./socketManager');
const orm = require("../common/orm");

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

module.exports.notifyComment = (ownerId, pseudo, pictureId) => {
  notifyClient(ownerId, pseudo + ' commented one of your picture', pictureId, ownerId);
}

module.exports.notifyMention = (ownerId, pseudo, userId, pictureId) => {
  notifyClient(ownerId, pseudo + ' tagged you on one of his picture', pictureId, userId);
}

module.exports.notifyReaction = (ownerId, pseudo, pictureId) => {
  notifyClient(ownerId, pseudo + ' reacted one of your picture', pictureId, ownerId);
}

module.exports.notifyFollowers = (user, pictureId) => {
  orm.findAll(followModel, undefined, {where : {ID_USER : user.userId}}).then(function(result) {
    for (var i in result) {
      notifyClient(result[i].ID_FOLLOWER, user.pseudo + " posted a new picture", pictureId, user.userId);
    }
  });
}
