const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const userModel = orm.getSequelize().import("../models/USER.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");
const reactionModel = orm.getSequelize().import("../models/REACTION.js");
const mentionModel = orm.getSequelize().import("../models/MENTION.js");
const hashtagModel =  orm.getSequelize().import("../models/HASHTAG.js");

pictureModel.belongsTo(userModel, {foreignKey : 'ID_OWNER'});
pictureModel.hasMany(reactionModel, {foreignKey : 'ID_PICTURE'});
pictureModel.hasMany(mentionModel, {foreignKey : 'ID_PICTURE'});
pictureModel.hasMany(hashtagModel, {foreignKey : 'ID_PICTURE'});
mentionModel.belongsTo(userModel, {foreignKey : 'ID_USER'});

exports.getAllPictures = (res, query) => {
    var attributes = {
      attributes : ['FILENAME', 'DATE_POSTED', 'DESCRIPTION', 'ID_OWNER'],
      order : 'DATE_POSTED desc',
      include : [{
        model : userModel,
        attributes : ['ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO']
      },{
        model : reactionModel,
        attributes : {
          exclude : ['ID_PICTURE'],
        },
        include : {
          model : userModel,
          attributes : ['ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO']
        }
      },{
        model : mentionModel,
        attributes : {
          exclude : ['ID_PICTURE'],
        },
        include : {
          model : userModel,
          attributes : ['ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO']
        }
      },{
        model : hashtagModel,
        attributes : {
          exclude : ['ID_PICTURE'],
        }
      }]
    };
    queryManager.fillAttributesFromQuery(attributes, query);
    orm.findAll(pictureModel, res, attributes);
}
