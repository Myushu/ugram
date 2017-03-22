const orm = require('../common/orm');
const notification = require('../common/notificationManager');

const commentModel = orm.getSequelize().import("../models/COMMENT.js");

exports.createComment = (userId, pictureId, comment, res, userWriter) => {
  comment.ID_PICTURE = pictureId;
  comment.ID_USER = userWriter.userId;
  orm.create(commentModel, res, comment).then(function(result) {
    if (userId != comment.ID_USER)
      notification.notifyComment(userId, userWriter.pseudo, comment.ID_PICTURE)
  });
}

exports.deleteComment = (userId, pictureId, commentId, res, userWriter) => {
  var comment = {
    ID_PICTURE : pictureId,
    ID_USER : userWriter.userId,
    ID_COMMENT : commentId,
  };
  orm.delete(commentModel, res, {where : comment});
}
