const extend = require('util')._extend
const graph = require('fbgraph');
const jwt = require('jsonwebtoken');
const config = require('config');
const orm = require('../common/orm');
const alias = require('../common/alias');
const errorManager = require('../common/errors');
const redisToken = require('../common/redisToken')
const queryManager = require('../common/queryManager');


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

function getCountFollowers(user) {
  return orm.count(followModel, undefined, {where : {ID_FOLLOWER : user.userId}}).then(function(countFollowingResult) {
     return orm.count(followModel, undefined, {where : {ID_USER : user.userId}}).then(function(countFollowerResult) {
      return {
        countFollower : countFollowerResult,
        countFollowing : countFollowingResult};
    })
  })
}

exports.getUsersById = (idUser, user, res) => {
  var attributes = { where : { 'ID_USER' : idUser}};
  if (idUser != user.userId)
    attributes['attributes'] = alias.userAttributesFull;
  orm.find(userModel, undefined, attributes).then(function(result) {
    if (!result) {
      res.status(404).send();
      return ;
    }
    getCountFollowers(user).then(function (followResult) {
      var json = extend(followResult, resultToJson(result));
      if (idUser != user.userId)
        doYouFollowHim(idUser, user).then(function (followResult) {
          res.json(extend({isFollowd : followResult}, json));
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
  orm.create(userModel, res, req);
}

exports.updateUser = (content, idUser, user, res) => {
  delete content.ID_USER;
  orm.update(userModel, content, res, { where : {'ID_USER' : user.userId }});
}

exports.deleteUser = (idUser, user, req, res) => {
  orm.delete(userModel, res, { where : {'ID_USER' : user.userId }});
  this.logout(req, res);
}

exports.logout = (req, res) => {
  redisToken.removeToken(req.headers.authorization.split(' ')[1]);
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
    var user = {
      userId: result.ID_USER,
      pseudo: result.PSEUDO
    };

    var token = jwt.sign(user, config.get('jwt')['secret'], {
      expiresIn: '24h',
    });
    redisToken.addToken(token, user.userId);
    res.json({token : token, userId : user.userId});
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
  graph.get('me?fields=id,last_name,first_name,email,gender,picture,birthday', function(err, resFacebook) {
    orm.find(userModel, undefined, {where : {'ID_USER_FACEBOOK':resFacebook.id}}).then(function (result) {
      if (!result) {
        var user = {"FIRSTNAME":resFacebook.first_name,
                    "LASTNAME":resFacebook.last_name,
                    "PSEUDO":resFacebook.first_name + '-' + resFacebook.id,
                    "EMAIL":resFacebook.email,
                    "PICTURE_PATH":resFacebook.picture.data.url,
                    "DATE_BIRTHDAY":resFacebook.birthday,
                    "SEXE":(resFacebook.gender == "male") ? 'M' : 'F',
                    "ID_USER_FACEBOOK":resFacebook.id};
          orm.create(userModel, undefined, user);
          tokenGenerator(user, res);
        } else
          tokenGenerator(result, res);
      });
  });
}
