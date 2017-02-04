const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const hashtagModel = orm.getSequelize().import("../models/HASHTAG.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

hashtagModel.belongsTo(pictureModel, {foreignKey : 'ID_PICTURE'});

exports.creationHashtag = (userId, pictureId, hahstag, res) => {
  hahstag.ID_PICTURE = pictureId;
  console.log(hahstag);
  orm.build(hashtagModel, res, hahstag);
}

exports.deleteHashtag = (userId, pictureId, hahstag, res) => {
  hahstag.ID_PICTURE = pictureId;
  orm.delete(hashtagModel, res, {where : hashtag});
}
