const orm = require('../common/orm');
const alias = require('../common/alias');
const notification =  require('../common/notificationManager');

const reactionModel = orm.getSequelize().import("../models/REACTION.js");

exports.creationReaction = (userId, pictureId, user, res) => {
  orm.create(reactionModel, res,  alias.pictureWhereUser(pictureId, user.userId)).then(function(result) {
    if (userId != user.userId)
      notification.notifyReaction(userId, user.userId, pictureId);
  });
}

exports.deleteReaction = (userId, pictureId, user, res) => {
  orm.delete(reactionModel, res , { where : alias.pictureWhereUser(pictureId, user.userId)});
}
