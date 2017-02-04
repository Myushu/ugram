const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const reactionModel = orm.getSequelize().import("../models/REACTION.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

reactionModel.belongsTo(pictureModel, {foreignKey : 'ID_PICTURE'});

exports.creationReaction = (userId, pictureId, res) => {
  var reaction = {
    ID_PICTURE : pictureId,
    ID_USER : userId // todo : we should be used token
  };
  orm.build(reactionModel, res, reaction);
}

exports.deleteReaction = (userId, pictureId, res) => {
  var reaction = {
    ID_PICTURE : pictureId,
    ID_USER : userId // todo : we should be used token
  };
  orm.delete(reactionModel, reaction, res);
}
