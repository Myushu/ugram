const orm = require('../common/orm');
const notification = require('../common/notificationManager');
const alias =  require('../common/alias');

const commentModel = orm.getSequelize().import("../models/COMMENT.js");

exports.createComment = (userId, pictureId, comment, res, userWriter) => {
  comment.ID_PICTURE = pictureId;
  comment.ID_USER = userWriter.userId;
  orm.create(commentModel, res, comment).then(function(result) {
    if (userId != comment.ID_USER)
      notification.notifyComment(userId, userWriter.userId, comment.ID_PICTURE)
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

exports.findById = (userId, pictureId, res) => {
  var attributes = {
    where : {
      ID_PICTURE : pictureId
    },
    order : 'DATE_CREATION asc',
    include : [
      alias.userInclude,
    ]
  }
  orm.findAll(commentModel, res, attributes);
}
