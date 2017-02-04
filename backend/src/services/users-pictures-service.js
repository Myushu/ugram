const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const mentionService = require('./mention-service');
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");
const reactionModel = orm.getSequelize().import("../models/REACTION.js");
const userModel = orm.getSequelize().import("../models/USER.js");
const mentionModel = orm.getSequelize().import("../models/MENTION.js");
const hashtagModel =  orm.getSequelize().import("../models/HASHTAG.js");

pictureModel.hasMany(reactionModel, {foreignKey : 'ID_PICTURE'});
pictureModel.hasMany(mentionModel, {foreignKey : 'ID_PICTURE'});
reactionModel.belongsTo(userModel, {foreignKey : 'ID_USER'});
pictureModel.hasMany(hashtagModel, {foreignKey : 'ID_PICTURE'});
mentionModel.belongsTo(userModel, {foreignKey : 'ID_USER'});

exports.getAllPictureByUserId = (res, userId, query) => {
  var attributes = {
    attributes : ['FILENAME', 'DATE_POSTED', 'DESCRIPTION'],
    order : 'DATE_POSTED desc',
    where : {'ID_OWNER' : userId},
    include : [{
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

exports.createPicture = (userId, picture, res) => {
  var listCallbacks = [];
  picture.ID_OWNER = userId;
  if (picture.MENTIONs != undefined) {
    listCallbacks.push(function(result, picture, res) {
      for (var i = 0; i < picture.MENTIONs.length; ++i) {
        mentionService.creationMention(result.ID_OWNER, result.ID_PICTURE, picture.MENTIONs[i], res);
      }
    });
  }
  orm.build(pictureModel, res, picture, listCallbacks);
}

exports.deletePicture = (userId, pictureId, res) => {
  orm.delete(pictureModel, res, {
    where : {
      'ID_PICTURE' : pictureId,
      'ID_OWNER' : userId}
    });
}

exports.getPictureById = (userId, pictureId, res) => {
  orm.find(pictureModel, res, {
    attributes : ['FILENAME', 'DATE_POSTED', 'DESCRIPTION'],
    where : {
      'ID_OWNER' : userId,
      'ID_PICTURE' : pictureId
    },
    include : [{
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
  });
}

exports.updatePicture = (userId, pictureId, content, res) => {
  delete content.FILENAME;
  delete content.ID_PICTURE;
  delete content.ID_OWNER;
  delete content.DATE_POSTED;
  orm.update(pictureModel, content, res, {
    'ID_OWNER' : userId,
    'ID_PICTURE' : pictureId
  });
}
