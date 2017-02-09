const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const commentModel = orm.getSequelize().import("../models/COMMENT.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

commentModel.belongsTo(pictureModel, {foreignKey : 'ID_PICTURE'});

exports.createComment = (userId, pictureId, comment, res) => {
  comment.ID_PICTURE = pictureId;
  comment.ID_USER = userId // todo : we should be used token
  orm.build(commentModel, res, comment);
}

exports.deleteComment = (userId, pictureId, commentId, res) => {
  var comment = {
    ID_PICTURE : pictureId,
    ID_USER : userId,  // todo : we should be used token
    ID_COMMENT : commentId,
  };
  orm.delete(commentModel, res, {where : comment});
}
