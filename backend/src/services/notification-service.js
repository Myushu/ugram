const orm = require('../common/orm');
const alias = require('../common/alias');
const queryManager = require('../common/queryManager');

const notificationModel = orm.getSequelize().import("../models/NOTIFICATION.js");

exports.getAllNotificationById = (res, user, query) => {
  var attributes = {
    attributes : alias.notificationAttributes,
    order : 'ID_NOTIFICATION desc',
    where : {
      ID_OWNER : user.userId
    }
  };
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAllAndCount(notificationModel, res, attributes);
}
