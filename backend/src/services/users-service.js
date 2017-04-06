const extend = require('util')._extend
const graph = require('fbgraph');
const jwt = require('jsonwebtoken');
const config = require('../common/configManager');
const orm = require('../common/orm');
const alias = require('../common/alias');
const errorManager = require('../common/errors');
const redisToken = require('../common/redisToken')
const queryManager = require('../common/queryManager');
const notification = require('../common/notificationManager');

const userModel = orm.getSequelize().import("../models/USER.js")
const followModel = orm.getSequelize().import("../models/FOLLOWING.js")

function resultToJson(result) {
  return JSON.parse(JSON.stringify(result));
}

function doYouFollowHim(idUser, user) {
  var attributes = {
    where : {
      ID_USER : idUser,
      ID_FOLLOWER : user.userId
  }}
  return orm.count(followModel, undefined, attributes).then(function(countResult) {
    return countResult == 0 ? false : true;
 })
}

function getCountFollowers(userId) {
  return orm.count(followModel, undefined, {where : {ID_FOLLOWER : userId}}).then(function(countFollowingResult) {
     return orm.count(followModel, undefined, {where : {ID_USER : userId}}).then(function(countFollowerResult) {
      return {
        countFollower : countFollowerResult,
        countFollowing : countFollowingResult};
    })
  })
}

exports.getUsersById = (idUser, user, res) => {
  var attributes = { where : { 'ID_USER' : idUser}};
  if (idUser != user.userId)
    attributes['attributes'] = alias.userAttributes;
  else
    attributes['attributes'] = alias.userAttributesFull;
  orm.find(userModel, undefined, attributes).then(function(result) {
    if (!result) {
      res.status(404).send();
      return ;
    }
    getCountFollowers(idUser).then(function (followResult) {
      var json = extend(followResult, resultToJson(result));
      if (idUser != user.userId)
        doYouFollowHim(idUser, user).then(function (followResult) {
          res.json(extend({isFollowed : followResult}, json));
        })
      else
        res.json(json);
    })
 });
}

exports.getAllUsers = (query, res) => {
  var attributes = {attributes : alias.userAttributesFull};
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAllAndCount(userModel, res, attributes);
}

exports.createUser = (req, res) => {
  delete req.ID_USER_FACEBOOK;
  delete req.ID_USER;
  req.IS_CONNECTED = false,
  orm.create(userModel, res, req).then(function() {
    notification.notifyUpdateUser();
  })
}

exports.updateUser = (content, idUser, user, res) => {
  delete content.ID_USER;
  delete IS_CONNECTED;
  orm.update(userModel, content, res, { where : {'ID_USER' : user.userId }}).then(function () {
    notification.notifyUpdateUser();
  });
}

exports.deleteUser = (idUser, user, req, res) => {
  orm.delete(userModel, res, { where : {'ID_USER' : user.userId }}).then(function () {
    notification.notifyUpdateUser();
  });
  this.logout(req, res);
}

exports.logout = (req, res) => {
  redisToken.removeToken(req.cookies.token);
  res.clearCookie('token');
  res.clearCookie('user_id');
  res.status(200).send();
}

exports.checkUserAuthentication = (body, res) => {
  if (body.EMAIL === undefined)
    errorManager.handle({name : "emailMissing"}, res);
  else if (body.PASSWORD_HASH === undefined)
    errorManager.handle({name : "passwordMissing"}, res);
  else
    return orm.find(userModel, undefined, {where : body}).then(function (result) {
      return result;
    })
}

function tokenGenerator(result, res) {
    var user = { userId: result.ID_USER };
    var token = jwt.sign(user, config.get('JWT_SECRET', 'jwt.secret'), {
      expiresIn: config.get('TOKEN_EXPIRE', 'token.expire'),
    });
    redisToken.addToken(token, user.userId);
    res.cookie('token', token, {maxAge: config.get('TOKEN_EXPIRE', 'token.expire') * 1000, httpOnly: true});
    res.status(200).send({ID_USER : user.userId});
}

exports.authentification = (req, res) => {
  this.checkUserAuthentication(req.body, res).then(function(result) {
    if (!result)
      res.status(403).send();
    else
      tokenGenerator(result, res);
  });
}

exports.authentificationFacebook = (req, res) => {
  graph.setAccessToken(req.body.TOKEN);
  authentificationFb(req, res);
}

function authentificationFb (req, res) {
  graph.get('me?fields=id,last_name,first_name,email,gender,picture,birthday', function(err, resFacebook) {
    orm.find(userModel, undefined, {where : {'ID_USER_FACEBOOK':resFacebook.id}}).then(function (result) {
      if (!result) {
          return createUserByFacebook(req, res, resFacebook);
        } else
          tokenGenerator(result, res);
      });
  });
}

function createUserByFacebook (req, res, resFacebook)   {
  var user = {"FIRSTNAME": resFacebook.first_name,
              "LASTNAME": resFacebook.last_name,
              "PSEUDO": resFacebook.first_name + '-' + resFacebook.id,
              "EMAIL": resFacebook.email,
              "PICTURE_PATH": resFacebook.picture.data.url,
              "DATE_BIRTHDAY": resFacebook.birthday,
              "SEXE": (resFacebook.gender == "male") ? 'M' : 'F',
              "IS_CONNECTED": true,
              "ID_USER_FACEBOOK": resFacebook.id};
    orm.create(userModel, undefined, user).then(function() {
          notification.notifyUpdateUser();
    });
    authentificationFb(req, res);
}

exports.setConnectStatus = (status, iduser) => {
  orm.update(userModel, {IS_CONNECTED : status}, undefined, { where : {'ID_USER' : iduser }});
}

process.on('SIGINT', function() {
  orm.update(userModel, {IS_CONNECTED : false}, undefined, {where : {IS_CONNECTED : true}}).then(function () {
    process.exit();
  });
});
