const logger = require('./logger');
const errorMap = require('./errorMap');
const errno = require('errno')

sequelizeErrorHandler = (error, res) => {
  var errorInfo = errorMap.map.find(e => e.name === error.name && e.type === error.errors[0].type);
  if (errorInfo === undefined) {
    logger.error("Error code not found");
    res.status(500).send("Error code not found");
  } else {
    res.status(errorInfo.statusCode).send({
      code : errorInfo.code,
      path : error.errors[0].path,
      message : error.errors[0].errno,
    });
  }
}

SequelizeForeignKeyHandler = (error, res) => {
  var errorInfo = errorMap.map.find(e => e.name === error.name);
  if (errorInfo === undefined) {
    logger.error("Error code not found");
    res.status(500).send("Error code not found");
  } else {
    res.status(errorInfo.statusCode).send({
      code : errorInfo.code,
      message : errorInfo.message
    });
  }
}


expressErrorHandler = (error, res) => {
  var errorInfo = errorMap.map.find(e => e.name === error.name);
  if (errorInfo === undefined) {
    logger.error("Error code not found");
    res.status(500).send("Error code not found");
  } else {
    res.status(errorInfo.statusCode).send({
      code : errorInfo.code,
      message : error.message
    });
  }
}

exports.handle = (error, res) => {
  console.log(error); // tmp
  if (error.errors != undefined)
    sequelizeErrorHandler(error, res);
  else if (error.parent != undefined)
    SequelizeForeignKeyHandler(error, res);
  else
    expressErrorHandler(error, res);
}
