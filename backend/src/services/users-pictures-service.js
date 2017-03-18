const config = require('config');
const path = require('path');
const fs = require('fs');
const orm = require('../common/orm');
const errorManager = require('../common/errors');
const queryManager = require('../common/queryManager');
const alias = require('../common/alias')
const mentionService = require('./mention-service');
const hashtagService = require('./hashtag-service');

const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

exports.getAllPictureByUserId = (res, userId, query) => {
    var attributes = {
    attributes : alias.pictureAttributes,
    order : 'DATE_POSTED desc',
    where : {'ID_OWNER' : userId},
    include : [
      alias.reactionInclude,
      alias.mentionInclude,
      alias.hashtagInclude,
      alias.commentInclude
    ]
  };
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAllAndCount(pictureModel, res, attributes, {where: {'ID_OWNER' : userId}});
}

function checkImage(file, res) {
  if (!file) {
    errorManager.handle({name : "missingPicture"}, res);
    return false;
  }
  if (file.size > config.get('picture')['maxSize']) {
    errorManager.handle({name : "invalidPictureSize"}, res);
    return false;
  }
  if (!file.mimetype.startsWith('image/')) {
    errorManager.handle({name : "invalidPictureFormat"}, res);
    return false;
  }
  return true;
}

exports.createPicture = (userId, picture, user, file, res) => {
  if (!checkImage(file, res))
    return;
  var listCallbacks = [];
  picture.ID_OWNER = user.userId;
  picture.FILENAME =  file.filename;
  picture.MIME_TYPE = file.mimetype;
  if (picture.MENTIONs != undefined) {
    listCallbacks.push(function(result, picture, res, user) {
      picture.MENTIONs = JSON.parse(picture.MENTIONs);
      for (var i = 0; i < picture.MENTIONs.length; ++i)
        mentionService.creationMention(result.ID_OWNER, result.ID_PICTURE, picture.MENTIONs[i], user, res);
    });
  }
  if (picture.HASHTAGs != undefined) {
    listCallbacks.push(function(result, picture, res, user) {
      picture.HASHTAGs = JSON.parse(picture.HASHTAGs);
        for (var i = 0; i < picture.HASHTAGs.length; ++i) {
        hashtagService.creationHashtag(result.ID_OWNER, result.ID_PICTURE, picture.HASHTAGs[i], user, res);
      }
    });
  }
  orm.build(pictureModel, res, picture, listCallbacks, user);
}

exports.deletePicture = (userId, pictureId, user, res) => {
  orm.find(pictureModel, res, 403, {
    where : {
      ID_OWNER : user.userId,
      ID_PICTURE : pictureId
    }},
    function(result, res) {
      orm.delete(pictureModel, res, {
         where : alias.pictureWhereOwner(pictureId, userId)
      }, function (result, res) {
        fs.unlinkSync(path.resolve(config.get('picture')['folder'] + '/' + result.FILENAME));
      });
    }
  );
}

exports.getPictureById = (userId, pictureId, res) => {
  orm.find(pictureModel, res, 404, {
    attributes : alias.pictureAttributes,
    where : alias.pictureWhereOwner(pictureId, userId),
    include : [
      alias.reactionInclude,
      alias.mentionInclude,
      alias.hashtagInclude,
      alias.commentInclude
    ]
  });
}

exports.updatePicture = (userId, pictureId, content, user, res) => {
  orm.find(pictureModel, res, 403, {
    where : {
      ID_OWNER : user.userId,
      ID_PICTURE : pictureId
    }},
    function(result, res) {
      var listCallbacks = [];
      delete content.FILENAME;
      delete content.ID_PICTURE;
      delete content.ID_OWNER;
      delete content.DATE_POSTED;
      listCallbacks.push(function(result, picture, res) {
        mentionService.deleteAllByPictureId(result.ID_PICTURE);
        hashtagService.deleteAllByPictureId(result.ID_PICTURE);
      })
      if (content.MENTIONs != undefined) {
        listCallbacks.push(function(result, content, res) {
          for (var i = 0; i < content.MENTIONs.length; ++i) {
            content.MENTIONs[i].ID_PICTURE = result.ID_PICTURE;
            mentionService.creationMention(result.ID_OWNER, result.ID_PICTURE, content.MENTIONs[i], user, res);
          }
        });
      }
      if (content.HASHTAGs != undefined) {
        listCallbacks.push(function(result, content, res) {
          for (var i = 0; i < content.HASHTAGs.length; ++i) {
            content.HASHTAGs[i].ID_PICTURE = result.ID_PICTURE;
            hashtagService.creationHashtag(result.ID_OWNER, result.ID_PICTURE, content.HASHTAGs[i], user, res);
          }
        });
      }
      orm.update(pictureModel, content, res, alias.pictureWhereOwner(pictureId, userId), listCallbacks, user);
    }
  );
}
