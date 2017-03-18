const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const userModel = orm.getSequelize().import("../models/USER.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");
const hashtagModel =  orm.getSequelize().import("../models/HASHTAG.js");

pictureModel.hasMany(hashtagModel, {foreignKey : 'ID_PICTURE'});
pictureModel.belongsTo(userModel, {foreignKey : 'ID_OWNER'});

exports.searchUser = (query, res) => {
  var attributes = {
    where : {
      $or : [
        {
          'FIRSTNAME' : {
            $like : '%' + query.input + '%'
          },
        }, {
          'LASTNAME' : {
            $like : '%' + query.input + '%'
          },
        }, {
          'PSEUDO' : {
            $like : '%' + query.input + '%'
          }
        }
      ]
    }
  }
  var attributesCount = Object.assign({}, attributes);;
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAllAndCount(userModel, res, attributes, attributesCount);
}

exports.searchDescription = (query, res) => {
  var attributes = {
    where : {
      'DESCRIPTION' : {
        $like : '%' + query.input + '%'
      }
    }
  }
  var attributesCount = Object.assign({}, attributes);;
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAllAndCount(pictureModel, res, attributes, attributesCount);
}

exports.searchHashtag = (query, res) => {
  var attributes = {
    include : [{
      model : hashtagModel,
      // attributes
      where : {
        'HASHTAG' : {
          $like : '%' + query.input + '%'
        }
      }
    }]
  }
  var attributesCount = Object.assign({}, attributes);;
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAllAndCount(pictureModel, res, attributes, attributesCount);
}
