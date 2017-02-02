const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const userModel = orm.getSequelize().import("../models/USER.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

pictureModel.belongsTo(userModel, {foreignKey: 'ID_OWNER'})

exports.getAllPictureByUserId = (res, userId, query) => {
  var attributes = {
    attributes : ['FILENAME', 'DATE_POSTED', 'DESCRIPTION'],
    order : 'DATE_POSTED desc',
    where : {'ID_OWNER' : userId}
  };
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAll(pictureModel, res, attributes);
}

exports.createPicture = (userId, picture, res) => {
  picture.ID_OWNER = userId;
  orm.build(pictureModel, res, picture);
}

exports.deletePicture = (userId, pictureId, res) => {
  orm.delete(pictureModel, {'ID_PICTURE' : pictureId, 'ID_OWNER' : userId,  }, res);
}

exports.getPictureById = (userId, pictureId, res) => {
  orm.find(pictureModel, res, {
    attributes : ['FILENAME', 'DATE_POSTED', 'DESCRIPTION'],
    where : {
      'ID_OWNER' : userId,
      'ID_PICTURE' : pictureId
    }
  });
}

exports.updatePicture = (userId, pictureId, content, res) => {
  orm.update(pictureModel, content, res, {
    'ID_OWNER' : userId,
    'ID_PICTURE' : pictureId
  });
}
