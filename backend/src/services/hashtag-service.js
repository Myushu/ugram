const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const hashtagModel = orm.getSequelize().import("../models/HASHTAG.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

hashtagModel.belongsTo(pictureModel, {foreignKey : 'ID_PICTURE'});

exports.creationHashtag = (userId, pictureId, hahstag, user, res) => {
  orm.find(pictureModel, res, 403, {
    where : {
      ID_OWNER : user.userId,
      ID_PICTURE : pictureId
    }},
    function(result, res) {
      hahstag.ID_PICTURE = pictureId;
      orm.build(hashtagModel, res, hahstag);
    }
  );
}

exports.deleteHashtag = (userId, pictureId, hahstag, user, res) => {
  orm.find(pictureModel, res, 403, {
    where : {
      ID_OWNER : user.userId,
      ID_PICTURE : pictureId
    }},
    function(result, res) {
      hahstag.ID_PICTURE = pictureId;
      orm.delete(hashtagModel, res, {where : hashtag});
    }
  );
}

exports.deleteAllByPictureId = (pictureId) => {
  orm.query('DELETE from HASHTAG where ID_PICTURE = ' + pictureId);
}
