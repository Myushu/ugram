const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const mentionModel = orm.getSequelize().import("../models/MENTION.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

mentionModel.belongsTo(pictureModel, {foreignKey : 'ID_PICTURE'});

exports.creationMention = (userId, pictureId, mention, user, res) => {
  orm.find(pictureModel, res, 403, {
    where : {
      ID_OWNER : user.userId,
      ID_PICTURE : pictureId
    }},
    function(result, res) {
      mention.ID_PICTURE = pictureId;
      orm.build(mentionModel, res, mention);
    }
  );
}

exports.deleteMention = (userId, pictureId, mention, user, res) => {
  orm.find(pictureModel, res, 403, {
    where : {
      ID_OWNER : user.userId,
      ID_PICTURE : pictureId
    }},
    function(result, res) {
      mention.ID_PICTURE = pictureId;
      orm.delete(mentionModel, res, {where : mention});
    }
  );
}

exports.deleteAllByPictureId = (pictureId) => {
  orm.query('DELETE from MENTION where ID_PICTURE = ' + pictureId);
}
