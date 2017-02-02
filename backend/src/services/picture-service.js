const logger = require('../common/logger');
const orm = require('../common/orm');
const userModel = orm.getSequelize().import("../models/USER.js")
const pictureModel = orm.getSequelize().import("../models/PICTURE.js")

pictureModel.belongsTo(userModel, {foreignKey: 'ID_OWNER'})

exports.getAllPictures = (res, perPage, page) => {
  var attributes = {
          order : 'DATE_POSTED desc',
         include : [userModel]
        };
  if (perPage)
    attributes.limit  = parseInt(perPage);
  if (perPage)
    attributes.offset  = parseInt(page);
  orm.findAll(pictureModel, res, attributes);
}
