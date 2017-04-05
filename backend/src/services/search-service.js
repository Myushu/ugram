const orm = require('../common/orm');
const queryManager = require('../common/queryManager');
const alias = require('../common/alias');

const userModel = orm.getSequelize().import("../models/USER.js");
const pictureModel = orm.getSequelize().import("../models/PICTURE.js");
const hashtagModel =  orm.getSequelize().import("../models/HASHTAG.js");

exports.searchUser = (query, res) => {
  var attributes = {
    attributes : alias.userAttributes,
    where : {
      $or : [
        {
          'FIRSTNAME' : {
            $like : query.input + '%'
          },
        }, {
          'LASTNAME' : {
            $like : query.input + '%'
          },
        }, {
          'PSEUDO' : {
            $like : query.input + '%'
          }
        }
      ]
    }
  }
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAllAndCount(userModel, res, attributes);
}

exports.searchDescription = (query, res) => {
  var attributes = {
    attributes : alias.pictureAttributes,
    include : [
      alias.picturePropertiesInclude
    ],
    where : {
      'DESCRIPTION' : {
        $like : '%' + query.input + '%'
      }
    }
  }
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAllAndCount(pictureModel, res, attributes);
}

exports.searchHashtag = (query, res) => {
  if (query.absolute == 'false')
    query.input += '%';
  var attributes = {
    attributes : alias.pictureAttributes,
    include : [
      alias.picturePropertiesInclude,
      {
        model : hashtagModel,
        attributes : [],
        where : {
          'HASHTAG' : {
            $like :  query.input
        }
      }
    }]
  }
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAllAndCount(pictureModel, res, attributes);
}

exports.hashtagAutocomplete = (query, res) => {
  if (query.absolute == 'false')
    query.input += '%';
  var attributes = {
    attributes : alias.hashtagAttributes ,
    where : {
      'HASHTAG' : {
        $like :  query.input
      }
    }
  }
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAllAndCount(hashtagModel, res, attributes);
}
