const orm = require('../common/orm');
const alias = require('../common/alias')

const mentionModel = orm.getSequelize().import("../models/MENTION.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

exports.creationMention = (userId, pictureId, mention, user, res) => {
  orm.find(pictureModel, res, 403, {
      where : alias.pictureWhereOwner(pictureId, user.userId)
    }, function(result, res) {
      mention.ID_PICTURE = pictureId;
      orm.build(mentionModel, res, mention);
    }
  );
}

exports.deleteMention = (userId, pictureId, mention, user, res) => {
  orm.find(pictureModel, res, 403, {
      where : alias.pictureWhereOwner(pictureId, user.userId)
    },function(result, res) {
      mention.ID_PICTURE = pictureId;
      orm.delete(mentionModel, res, {where : mention});
    }
  );
}

exports.deleteAllByPictureId = (pictureId) => {
  orm.query('DELETE from MENTION where ID_PICTURE = ' + pictureId);
}
