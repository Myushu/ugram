const path = require('path');
const config = require('config');
const orm = require('../common/orm');
const alias = require('../common/alias')
const queryManager = require('../common/queryManager');

const messageModel = orm.getSequelize().import("../models/MESSAGE.js");

exports.getAllMessage = (res, user, userId, query) => {
    var attributes = {
      attributes : alias.messageAttributes,
      order : 'DATE_SENDED desc',
      where : {
        $or : [{
            'ID_SENDER' : user.userId,
            'ID_RECEIVER' : userId
          }, {
            'ID_SENDER' : userId,
            'ID_RECEIVER' : user.userId
          }
        ]
      }
    };
    queryManager.fillAttributesFromQuery(attributes, query);
    orm.findAllAndCount(messageModel, res, attributes);
}
