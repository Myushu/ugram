const orm = require('../common/orm');
const reactionModel = orm.getSequelize().import("../models/REACTION.js");

exports.creationReaction = (userId, pictureId, user, res) => {
  var reaction = {
    ID_PICTURE : pictureId,
    ID_USER : user.userId
  };
  orm.build(reactionModel, res, reaction);
}

exports.deleteReaction = (userId, pictureId, user, res) => {
  var reaction = {
    ID_PICTURE : pictureId,
    ID_USER : user.userId
  };
  orm.delete(reactionModel, res , { where : reaction});
}
