const path = require('path');
const config = require('config');
const orm = require('../common/orm');
const alias = require('../common/alias');
const queryManager = require('../common/queryManager');

const pictureModel = orm.getSequelize().import("../models/PICTURE.js");

exports.getAllPictures = (res, query) => {
    var attributes = {
      attributes : alias.pictureAttributes,
      order : 'DATE_POSTED desc',
      include : [
        alias.userInclude,
        alias.reactionInclude,
        alias.mentionInclude,
        alias.hashtagInclude,
        alias.commentInclude,
       alias.picturePropertiesInclude
      ]
    };
    queryManager.fillAttributesFromQuery(attributes, query);
    orm.findAllAndCount(pictureModel, res, attributes);
}

function defaultImage (res) {
  res.type("image/png");
  res.sendFile(path.resolve(config.get('picture')['folder'] + '/default'));
}

exports.getPicture = (picturePath, res) => {
  var attributes = { where : {'FILENAME' : picturePath }};
  if (picturePath === 'default')
    return defaultImage(res);
  orm.find(pictureModel, undefined, attributes).then(function(result) {
    if (!result)
      res.status(404).send();
    else {
      res.type(result.MIME_TYPE);
      res.sendFile(path.resolve(config.get('picture')['folder'] + '/' + result.FILENAME));
    }
  });
}
