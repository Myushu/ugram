const logger = require('../common/logger');
const orm = require('../common/orm');
const userModel = orm.getSequelize().import("../models/USER.js")

exports.getUsersById = (idUser, res) => {
  orm.find(userModel, res,
          [ 'ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO', 'PICTURE_PATH', 'SEXE'],
          { 'ID_USER' : idUser});
}

exports.getAllUsers = (res) => {
  orm.findAll(userModel, res, {
          attributes : [ 'ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO', 'PICTURE_PATH', 'SEXE']});
}

exports.createUser = (req, res) => {
  orm.build(userModel, res, req);
}

exports.updateUser = (content, idUser, res) => {
  orm.update(userModel, content, {'ID_USER' : idUser}, res);
}

exports.deleteUser = (idUser, res) => {
  orm.delete(userModel, {'ID_USER' : idUser}, res);
}
