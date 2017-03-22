const orm = require('../common/orm');
const queryManager = require('../common/queryManager');

const notificationModel = orm.getSequelize().import("../models/NOTIFICATION.js");

exports.getAllNotificationById = (res, user, query) => {
  var attributes = {where : {ID_OWNER : user.userId}};
  queryManager.fillAttributesFromQuery(attributes, query);
  orm.findAllAndCount(notificationModel, res, attributes);
}
