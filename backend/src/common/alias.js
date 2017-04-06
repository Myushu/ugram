const orm = require('../common/orm');

const pictureModel = orm.getSequelize().import("../models/PICTURE.js");
const reactionModel = orm.getSequelize().import("../models/REACTION.js");
const userModel = orm.getSequelize().import("../models/USER.js");
const mentionModel = orm.getSequelize().import("../models/MENTION.js");
const hashtagModel =  orm.getSequelize().import("../models/HASHTAG.js");
const commentModel = orm.getSequelize().import("../models/COMMENT.js");
const picturePropertiesModel = orm.getSequelize().import("../models/PICTURE_PROPERTIES.js");

pictureModel.hasMany(reactionModel, {foreignKey : 'ID_PICTURE'});
pictureModel.hasMany(mentionModel, {foreignKey : 'ID_PICTURE'});
pictureModel.hasMany(hashtagModel, {foreignKey : 'ID_PICTURE'});
pictureModel.hasMany(commentModel, {foreignKey : 'ID_PICTURE'});
pictureModel.hasOne(picturePropertiesModel, {foreignKey : 'ID_PICTURE'});
pictureModel.belongsTo(userModel, {foreignKey : 'ID_OWNER'});
reactionModel.belongsTo(userModel, {foreignKey : 'ID_USER'});
mentionModel.belongsTo(userModel, {foreignKey : 'ID_USER'});
commentModel.belongsTo(userModel, {foreignKey : 'ID_USER'});
hashtagModel.belongsTo(pictureModel, {foreignKey : 'ID_PICTURE'});
picturePropertiesModel.belongsTo(pictureModel, {foreignKey : 'ID_PICTURE'});

// Pictures
exports.pictureAttributes = ['ID_PICTURE', 'ID_OWNER', 'FILENAME', 'DATE_POSTED', 'DESCRIPTION'];
exports.pictureWhereOwner = (pictureId, userId) => {
  return {
    'ID_PICTURE' : pictureId,
    'ID_OWNER' : userId
  }
};
exports.pictureWhereUser = (pictureId, userId) => {
  return {
    'ID_PICTURE' : pictureId,
    'ID_USER' : userId
  }
};

// User
exports.userAttributes =  ['ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO', 'IS_CONNECTED', 'PICTURE_PATH'];
exports.userAttributesFull = ['ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO', 'PICTURE_PATH', 'SEXE', 'IS_CONNECTED'];
exports.userInclude = {
  model : userModel,
  attributes : this.userAttributes
}

// Reaction
exports.reactionAttributes = {exclude : ['ID_PICTURE']};
exports.reactionInclude = {
  model : reactionModel,
  attributes : this.reactionAttributes,
  include : Object.assign({}, this.userInclude)
};

// Mention
exports.mentionAttributes = {exclude : ['ID_PICTURE']};
exports.mentionInclude = {
  model : mentionModel,
  attributes : this.mentionAttributes,
  include : Object.assign({}, this.userInclude)
};

// Hashtag
exports.hashtagAttributes = {exclude : ['ID_PICTURE']};
exports.hashtagInclude = {
  model : hashtagModel,
  attributes : this.hashtagAttributes,
};

// Comment
exports.commentAttributes = ['ID_PICTURE', 'ID_USER', 'CONTENT', 'DATE_CREATION'];
exports.commentInclude = {
  model : commentModel,
  attributes : this.commentAttributes,
  include : Object.assign({}, this.userInclude)
};

// Message
exports.messageAttributes = ['ID_SENDER', 'ID_RECEIVER', 'DATE_SENDED', 'MESSAGE'];

// Pictures Properties
exports.picturePropertiesInclude = {
  model : picturePropertiesModel
}

// Notification
exports.notificationAttributes = ['MESSAGE', 'ID_USER', 'ID_PICTURE'];
