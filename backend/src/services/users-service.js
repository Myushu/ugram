const jwt = require('jsonwebtoken');
const config = require('config');
const logger = require('../common/logger');
const orm = require('../common/orm');
const errorManager = require('../common/errors');
const userModel = orm.getSequelize().import("../models/USER.js")

exports.getUsersById = (idUser, user, res) => {
  var attributesVar;
  if (idUser != user.userId)
    attributesVar = ['ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO', 'PICTURE_PATH', 'SEXE'];
  orm.find(userModel, res, 404, {
    attributes : attributesVar,
    where : { 'ID_USER' : idUser}
  });
}

exports.getAllUsers = (res) => {
  orm.findAll(userModel, res, {
    attributes : ['ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO', 'PICTURE_PATH', 'SEXE']});
}

exports.createUser = (req, res) => {
  orm.build(userModel, res, req);
}

exports.updateUser = (content, idUser, user, res) => {
  delete content.ID_USER;
  orm.update(userModel, content, res, { where : {'ID_USER' : user.userId }});
}

exports.deleteUser = (idUser, user, res) => {
  orm.delete(userModel, res, { where : {'ID_USER' : user.userId }});
}

exports.checkUserAuthentication = (body, res, callback) => {
  if (body.EMAIL === undefined)
    errorManager.handle({name : "emailMissing"}, res);
  else if (body.PASSWORD_HASH === undefined)
    errorManager.handle({name : "passwordMissing"}, res);
  else
    orm.find(userModel, res, 401, {where : body}, callback)
}

exports.authentification = (req, res) => {
  this.checkUserAuthentication(req.body, res, function(result, res) {
    if (!result) {
      res.sendStatus(401);
      return ;
    }

    var user = {
      email: result.EMAIL,
      userId: result.ID_USER
    };

    var token = jwt.sign(user, config.get('jwt')['secret'], {
      expiresIn: '24h',
    });
    res.json(token);
  });
}
