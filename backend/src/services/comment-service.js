const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const commentModel = orm.getSequelize().import("../models/COMMENT.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

commentModel.belongsTo(pictureModel, {foreignKey : 'ID_PICTURE'});

exports.createComment = (userId, pictureId, comment, res, userWriter) => {
  comment.ID_PICTURE = pictureId;
  comment.ID_USER = userWriter.userId;
  orm.build(commentModel, res, comment);
}

exports.deleteComment = (userId, pictureId, commentId, res, userWriter) => {
  var comment = {
    ID_PICTURE : pictureId,
    ID_USER : userWriter.userId,
    ID_COMMENT : commentId,
  };
  orm.delete(commentModel, res, {where : comment});
}
