const orm = require('../common/orm');
const alias = require('../common/alias')

const reactionModel = orm.getSequelize().import("../models/REACTION.js");

exports.creationReaction = (userId, pictureId, user, res) => {
  orm.build(reactionModel, res,  alias.pictureWhereUser(pictureId, user.userId));
  if (userId != user.userId)
    notification.notifyReaction(userId, user.pseudo, comment.ID_PICTURE)
}

exports.deleteReaction = (userId, pictureId, user, res) => {
  orm.delete(reactionModel, res , { where : alias.pictureWhereUser(pictureId, user.userId)});
}
