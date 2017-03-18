const path = require('path');
const config = require('config');
const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const userModel = orm.getSequelize().import("../models/USER.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");
const reactionModel = orm.getSequelize().import("../models/REACTION.js");
const mentionModel = orm.getSequelize().import("../models/MENTION.js");
const hashtagModel =  orm.getSequelize().import("../models/HASHTAG.js");
const commentModel = orm.getSequelize().import("../models/COMMENT.js");

pictureModel.hasMany(reactionModel, {foreignKey : 'ID_PICTURE'});
pictureModel.hasMany(mentionModel, {foreignKey : 'ID_PICTURE'});
pictureModel.hasMany(hashtagModel, {foreignKey : 'ID_PICTURE'});
pictureModel.hasMany(commentModel, {foreignKey : 'ID_PICTURE'});
pictureModel.belongsTo(userModel, {foreignKey : 'ID_OWNER'});
reactionModel.belongsTo(userModel, {foreignKey : 'ID_USER'});
mentionModel.belongsTo(userModel, {foreignKey : 'ID_USER'});
commentModel.belongsTo(userModel, {foreignKey : 'ID_USER'});

exports.getAllPictures = (res, query) => {
    var attributes = {
      attributes : ['ID_PICTURE', 'FILENAME', 'DATE_POSTED', 'DESCRIPTION', 'ID_OWNER'],
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
      },{
        model : commentModel,
        attributes : {
          exclude : ['ID_PICTURE', 'ID_USER'],
        },
        include : {
          model : userModel,
          attributes : ['ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO']
        }
      }]
    };
    queryManager.fillAttributesFromQuery(attributes, query);
    orm.findAllAndCount(pictureModel, res, attributes, {});
}

exports.getPicture = (picturePath, res) => {
  orm.find(pictureModel, res, 404, {where : {'FILENAME' : picturePath}}, function(result, res) {
    if (!result)
      res.status(404).send();
    else {
      res.type(result.MIME_TYPE);
      res.sendfile(path.resolve(config.get('picture')['folder'] + '/' + result.FILENAME));
    }
  });
}
