const logger = require('./logger');
const errorMap = require('./errorMap');

sequelizeErrorHandler = (error, req, res, next) => {
  var errorInfo = errorMap.map.find(e => e.name === error.name && e.type === error.errors[0].type);
  if (errorInfo === undefined) {
    logger.error("Error code not found");
    res.status(500).send("Error code not found");
  } else {
    res.status(errorInfo.statusCode).send({
      code : errorInfo.code,
      path : error.errors[0].path,
      message : error.errors[0].message,
    });
  }
}

expressErrorHandler = (error, req, res, next) => {
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

exports.errorHandler = (error, req, res, next) => {
  console.log(error); // tmp
  if (error.errors != undefined)
    sequelizeErrorHandler(error, req, res, next);
  else
    expressErrorHandler(error, req, res, next);
}
