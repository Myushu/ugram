const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const mentionModel = orm.getSequelize().import("../models/MENTION.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

mentionModel.belongsTo(pictureModel, {foreignKey : 'ID_PICTURE'});

exports.creationMention = (userId, pictureId, mention, res) => {
  mention.ID_PICTURE = pictureId;
  orm.build(mentionModel, res, mention);
}

exports.deleteMention = (userId, pictureId, res) => {
  var mention = {
    ID_PICTURE : pictureId,
  };
  orm.delete(mentionModel, mention, res);
}
