const orm = require('../common/orm');
const errorManager = require('../common/errors');
const queryManager = require('../common/queryManager');
const alias = require('../common/alias')
const mentionService = require('./mention-service');
const hashtagService = require('./hashtag-service');
const notification = require('../common/notificationManager');

const picturePropertiesModel = orm.getSequelize().import("../models/PICTURE_PROPERTIES.js");

exports.createPictureProperties = (pictureId, properties) => {
  properties.ID_PICTURE = pictureId;
  orm.create(picturePropertiesModel, undefined, properties);
}

exports.deletePictureProperties = (pictureId) => {
  orm.delete(picturePropertiesModel, undefined, {where : {ID_PICTURE : pictureId}})
}
