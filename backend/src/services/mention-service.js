const orm = require('../common/orm');
const alias = require('../common/alias')
const notification = require('../common/notificationManager');

const mentionModel = orm.getSequelize().import("../models/MENTION.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

exports.creationMention = (userId, pictureId, mention, user, res) => {
  var attributes = { where : alias.pictureWhereOwner(pictureId, user.userId) };
  mention.ID_PICTURE = pictureId;
  orm.find(pictureModel, undefined, attributes).then(function (result) {
    if (!result && res != undefined)
      res.status(403).send();
    else {
      orm.create(mentionModel, res, mention).then(function (result) {
        if (userId != user.idUser)
          notification.notifyMention(mention.ID_USER, user.userId, mention.ID_PICTURE)
      });
    }
  });
}

exports.deleteMention = (userId, pictureId, mention, user, res) => {
  var attributes = { where : alias.pictureWhereOwner(pictureId, user.userId) };
  mention.ID_PICTURE = pictureId;
  orm.find(pictureModel, undefined, attributes).then(function(result) {
    if (!result)
      res.status(403).send();
    else
      orm.delete(mentionModel, res, {where : mention});
  });
}

exports.deleteAllByPictureId = (pictureId) => {
  orm.delete(mentionModel, undefined, {where : {ID_PICTURE : pictureId}})
}
