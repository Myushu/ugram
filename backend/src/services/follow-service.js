const orm = require('../common/orm');

const followModel = orm.getSequelize().import("../models/FOLLOWING.js");

exports.follow = (idFollowed, user, res) => {
  var attributes = {
    ID_USER : idFollowed,
    ID_FOLLOWER : user.userId
  }
  if (attributes.ID_USER == attributes.ID_FOLLOWER)
    res.status(400).send({message : 'You cannot followed your self'});
  else
    orm.create(followModel, res, attributes);
}

exports.unfollow = (idFollowed, user, res) => {
  var attributes = {
    ID_USER : idFollowed,
    ID_FOLLOWER : user.userId
  }
  orm.delete(followModel, res, {where : attributes});
}
