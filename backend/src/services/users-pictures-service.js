const logger = require('../common/logger');
const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const mentionService = require('./mention-service');
const hashtagService = require('./hashtag-service');
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");
const reactionModel = orm.getSequelize().import("../models/REACTION.js");
const userModel = orm.getSequelize().import("../models/USER.js");
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

exports.getAllPictureByUserId = (res, userId, query) => {
    var attributes = {
    attributes : ['ID_PICTURE', 'FILENAME', 'DATE_POSTED', 'DESCRIPTION'],
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
  orm.findAll(pictureModel, res, attributes);
}

exports.createPicture = (userId, picture, user, res) => {
  var listCallbacks = [];
  picture.ID_OWNER = user.userId;
  if (picture.MENTIONs != undefined) {
    listCallbacks.push(function(result, picture, res, user) {
      for (var i = 0; i < picture.MENTIONs.length; ++i)
        mentionService.creationMention(result.ID_OWNER, result.ID_PICTURE, picture.MENTIONs[i], user, res);
    });
  }
  if (picture.HASHTAGs != undefined) {
    listCallbacks.push(function(result, picture, res, user) {
      for (var i = 0; i < picture.HASHTAGs.length; ++i)
        hashtagService.creationHashtag(result.ID_OWNER, result.ID_PICTURE, content.HASHTAGs[i], user, res);
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
      where : {
        'ID_PICTURE' : pictureId,
        'ID_OWNER' : userId}
      });
    }
  );
}

exports.getPictureById = (userId, pictureId, res) => {
  orm.find(pictureModel, res, 404, {
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
      if (content.MENTIONs != undefined) {
        listCallbacks.push(function(result, content, res, user) {
          for (var i = 0; i < content.MENTIONs.length; ++i)
          mentionService.creationMention(result.ID_OWNER, result.ID_PICTURE, content.MENTIONs[i], user, res);
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
      orm.update(pictureModel, content, res, {
        'ID_OWNER' : userId,
        'ID_PICTURE' : pictureId
      }, listCallbacks, user);
    }
  );
}
