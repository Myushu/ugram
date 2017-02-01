const logger = require('../common/logger');
const orm = require('../common/orm');
const userModel = orm.getSequelize().import("../models/USER.js")


// exports.getUsersById = (idUser, res) => {
//   orm.find(userModel, res,
//           [ 'ID_USER', 'FIRSTNAME', 'LASTNAME', 'PSEUDO', 'PICTURE_PATH', 'SEXE'],
//           { 'ID_USER' : idUser});
// }
