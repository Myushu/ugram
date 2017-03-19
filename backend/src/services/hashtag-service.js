const orm = require('../common/orm');
const alias = require('../common/alias')

const hashtagModel = orm.getSequelize().import("../models/HASHTAG.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

exports.creationHashtag = (userId, pictureId, hashtag, user, res) => {
  orm.find(pictureModel, res, 403, {
      where : alias.pictureWhereOwner(pictureId, user.userId)
    }, function(result, res) {
      hashtag.ID_PICTURE = pictureId;
      orm.build(hashtagModel, res, hashtag);
    }
  );
}

exports.deleteHashtag = (userId, pictureId, hashtag, user, res) => {
  orm.find(pictureModel, res, 403, {
      where : alias.pictureWhereOwner(pictureId, user.userId)
    }, function(result, res) {
      hashtag.ID_PICTURE = pictureId;
      orm.delete(hashtagModel, res, {where : hashtag});
    }
  );
}

exports.deleteAllByPictureId = (pictureId) => {
  orm.query('DELETE from HASHTAG where ID_PICTURE = ' + pictureId);
}
