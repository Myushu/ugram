const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const userModel = orm.getSequelize().import("../models/USER.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

exports.getAllPictures = (res, query) => {
    var attributes = {
      attributes : ['FILENAME', 'DATE_POSTED', 'DESCRIPTION'],
      order : 'DATE_POSTED desc',
      include : [{
        model : userModel,
        attributes : ['FIRSTNAME', 'LASTNAME', 'PSEUDO'],
      }]
    };
    queryManager.fillAttributesFromQuery(attributes, query);
    orm.findAll(pictureModel, res, attributes);
}
