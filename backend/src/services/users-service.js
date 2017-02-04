const logger = require('../common/logger');
const orm = require('../common/orm');
const userModel = orm.getSequelize().import("../models/USER.js")

exports.getUsersById = (idUser, res) => {
  orm.find(userModel, res, {
    attributes : [ 'ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO', 'PICTURE_PATH', 'SEXE'],
    where : { 'ID_USER' : idUser}
  });
}

exports.getAllUsers = (res) => {
  orm.findAll(userModel, res, {
          attributes : [ 'ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO', 'PICTURE_PATH', 'SEXE']});
}

exports.createUser = (req, res) => {
  orm.build(userModel, res, req);
}

exports.updateUser = (content, idUser, res) => {
  delete content.ID_USER;
  orm.update(userModel, content, res, { where : {'ID_USER' : idUser}});
}

exports.deleteUser = (idUser, res) => {
  orm.delete(userModel, res, { where : {'ID_USER' : idUser}});
}
