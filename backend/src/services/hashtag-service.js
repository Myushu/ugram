const orm = require('../common/orm');
const alias = require('../common/alias')

const hashtagModel = orm.getSequelize().import("../models/HASHTAG.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

exports.creationHashtag = (userId, pictureId, hashtag, user, res) => {
  var attributes = { where : alias.pictureWhereOwner(pictureId, user.userId) };
  hashtag.ID_PICTURE = pictureId;
  orm.find(pictureModel, undefined, attributes).then(function(result) {
    if (!result && res != undefined)
      res.status(403).send();
    else
      orm.create(hashtagModel, res, hashtag);
  });
}

exports.deleteHashtag = (userId, pictureId, hashtag, user, res) => {
  var attributes = { where : alias.pictureWhereOwner(pictureId, user.userId) };
  hashtag.ID_PICTURE = pictureId;
  orm.find(pictureModel, undefined, attributes).then(function(result) {
    if (!result)
      res.status(403).send();
    else
      orm.delete(hashtagModel, res, {where : hashtag});
  })
}

exports.deleteAllByPictureId = (pictureId) => {
  orm.delete(hashtagModel, undefined, {where : {ID_PICTURE : pictureId}})
}
