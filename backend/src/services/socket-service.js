const orm = require('../common/orm');
const logger = require("../common/logger");
const jwtDecode = require('jwt-decode');
const socketManager = require("../common/socketManager");

exports.join = (data) => {
  try {
    var userId = jwtDecode(data).userId;
    //      console.log(jwtDecode(data),.);
          //must check on redis
    socketManager.addClient(userId, client);
  } catch (e) {
    logger.error(e.message);
  }
}

exports.disconnect = (client) => {
  socketManager.removeClient(client);
}

exports.message = (client, message) => {
//   console.log('JSON', JSON.parse(data).name); //tmp
//   socketManager.addClient(0, client);
}
