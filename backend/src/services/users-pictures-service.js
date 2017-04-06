const path = require('path');
const fs = require('fs');
const alias = require('../common/alias')
const config = require('../common/configManager');
const mentionService = require('./mention-service');
const hashtagService = require('./hashtag-service');
const picturePropertiesService  = require('./picture-properties-service');
const orm = require('../common/orm');
const errorManager = require('../common/errors');
const queryManager = require('../common/queryManager');
const notification = require('../common/notificationManager');

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
      alias.commentInclude,
     alias.picturePropertiesInclude
    ]
  };
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAllAndCount(pictureModel, res, attributes);
}

function checkImage(file, picture, res) {
  if (!file) {
    errorManager.handle({name : "missingPicture"}, res);
    return false;
  }
  if (file.size > config.get('PICTURE_MAX_SIZE', 'picture.maxSize')) {
    errorManager.handle({name : "invalidPictureSize"}, res);
    return false;
  }
  if (!file.mimetype.startsWith('image/')) {
    errorManager.handle({name : "invalidPictureFormat"}, res);
    return false;
  }
  if (picture.PICTURE_PROPERTIES === undefined) {
    errorManager.handle({name : "missingProperties"}, res);
    return false;
  }
  return true;
}

exports.createPicture = (userId, picture, user, file, res) => {
  if (!checkImage(file, picture, res))
    return;
  picture.ID_OWNER = user.userId;
  picture.FILENAME =  file.filename;
  picture.MIME_TYPE = file.mimetype;
  orm.create(pictureModel, res, picture).then(function(result) {
    picturePropertiesService.createPictureProperties(result.ID_PICTURE, JSON.parse(picture.PICTURE_PROPERTIES));
    if (picture.MENTIONs != undefined) {
      picture.MENTIONs = JSON.parse(picture.MENTIONs);
      for (var i = 0; i < picture.MENTIONs.length; ++i)
        mentionService.creationMention(result.ID_OWNER, result.ID_PICTURE, picture.MENTIONs[i], user, undefined);
    }
    if (picture.HASHTAGs != undefined) {
      picture.HASHTAGs = JSON.parse(picture.HASHTAGs);
      for (var i = 0; i < picture.HASHTAGs.length; ++i)
        hashtagService.creationHashtag(result.ID_OWNER, result.ID_PICTURE, picture.HASHTAGs[i], user, undefined);
    }
    notification.notifyFollowers(user, result.ID_PICTURE);
  });
}

exports.deletePicture = (userId, pictureId, user, res) => {
  var attributes = { where : alias.pictureWhereOwner(pictureId, user.userId) };
  orm.find(pictureModel, undefined, attributes).then(function (result) {
    if (!result)
      res.status(403).send();
    else
      orm.delete(pictureModel, undefined, attributes).then(function (resultDelete) {
        fs.unlinkSync(path.resolve(config.get('PICTURE_FOLDER', 'picture.folder', './pictures') + '/' + result.FILENAME));
        res.status(200).send();
    });
  });
}

exports.getPictureById = (userId, pictureId, res) => {
  orm.find(pictureModel, res, {
    attributes : alias.pictureAttributes,
    where : alias.pictureWhereOwner(pictureId, userId),
    include : [
      alias.reactionInclude,
      alias.mentionInclude,
      alias.hashtagInclude,
      alias.commentInclude,
      alias.picturePropertiesInclude
    ],
    order : 'DATE_CREATION asc',
  });
}

exports.updatePicture = (userId, pictureId, content, user, res) => {
  var attributes = { where : alias.pictureWhereOwner(pictureId, user.userId) };
  delete content.FILENAME;
  delete content.ID_PICTURE;
  delete content.ID_OWNER;
  delete content.DATE_POSTED;
  orm.find(pictureModel, undefined, attributes).then(function (result) {
    if (!result)
      res.status(403).send();
    else {
      orm.update(pictureModel, content, res, attributes).then(function (r) {
        mentionService.deleteAllByPictureId(result.ID_PICTURE);
        hashtagService.deleteAllByPictureId(result.ID_PICTURE);
        picturePropertiesService.deletePictureProperties(result.ID_PICTURE);
        if (content.PICTURE_PROPERTIES != undefined)
          picturePropertiesService.createPictureProperties(result.ID_PICTURE, content.PICTURE_PROPERTIES);
        else
          picturePropertiesService.createPictureProperties(result.ID_PICTURE, {});
        if (content.MENTIONs != undefined) {
          for (var i = 0; i < content.MENTIONs.length; ++i) {
            content.MENTIONs[i].ID_PICTURE = result.ID_PICTURE;
            mentionService.creationMention(result.ID_OWNER, result.ID_PICTURE, content.MENTIONs[i], user, undefined);
          }
        }
        if (content.HASHTAGs != undefined) {
          for (var i = 0; i < content.HASHTAGs.length; ++i) {
            content.HASHTAGs[i].ID_PICTURE = result.ID_PICTURE;
             hashtagService.creationHashtag(result.ID_OWNER, result.ID_PICTURE, content.HASHTAGs[i], user, undefined);
          }
        }
      });
    }
  });
}
