const Sequelize = require('sequelize');
const logger = require('./logger');
const config = require('../common/configManager');
const errorManager  = require('./errors');

var sequelize = new Sequelize({
  username : config.get('SQL_USERNAME', 'sql.credentials.username', 'root'),
  password : config.get('SQL_PASSWORD', 'sql.credentials.password', 'root'),
  database : config.get('SQL_DATABASE', 'sql.database', 'UGRAM'),
  host : config.get('SQL_HOSTNAME', 'sql.hostname', 'localhost'),
  port : config.get('SQL_PORT', 'sql.port', 3306),
  logging : logger.info,
  options : {
    retry : {
      max : config.get('SQL_MAX_RETRIES', 'sql.maxRetries', 3),
      },
    },
  dialect: 'mysql',
});

exports.initConnection = () => {
  sequelize.sync()
      .catch(function(err) {
      logger.error(err.message);
      process.exit();
  });
}

exports.getSequelize = () => {
  return sequelize;
}

function setResult(result, res) {
  if (res && !result)
    res.status(404).send();
  else if (res && result.error != undefined)
    errorManager.handle(result.error, res);
  else
    return false;
  return true;
}

function sequelizeCall (request)  {
  return request.then(function (result) {
    return result;
  }).catch(function(err) {
     logger.error(err.message);
     return {error : err};
  });
}

exports.findAll = (model, res, attributes, sendIt) => {
  return sequelizeCall(model.findAll(attributes)).then(function (result) {
    setResult(result, res)
    if (sendIt === undefined && res != undefined)
      res.send(result);
    return result;
  })
}

exports.findAllAndCount = (model, res, attributes) => {
  return this.findAll(model, res, attributes, false).then(function (result) {
    sequelizeCall(model.count({where : attributes.where})).then(function (resultCount) {
      var json = {};
      json['count'] = resultCount  == undefined ? 0 : resultCount;
      json['rows'] = result;
      if (res)
        res.send(json);
      return json;
    })
  });
}

exports.find = (model, res, attributes) => {
  return sequelizeCall(model.find(attributes)).then(function (result) {
    if (setResult(result, res))
      return result;
    if (res)
      res.json(result);
    return result;
  })
}

exports.create = (model, res, attributes) => {
  return sequelizeCall(model.create(attributes)).then(function (result) {
    if (setResult(result, res))
      return result;
    if (res)
      res.status(201).send();
    return result;
  });
}

exports.update = (model, newContent, res, attributes) => {
  return sequelizeCall(model.update(newContent, attributes)).then(function (result) {
    if (setResult(result, res))
      return result;
    if (res)
      res.status(200).send();
    return result;
  });
}

exports.delete = (model, res, attributes) => {
  return sequelizeCall(model.destroy(attributes)).then(function (result) {
    if (setResult(result, res))
      return result;
    if (res)
      res.status(200).send();
    return result;
  })
}

exports.count = (model, res, attributes) => {
  return sequelizeCall(model.count(attributes)).then(function (result) {
    if (setResult(result, res))
      return result;
    if (res)
      res.status(200).send();
    return result;
  })
}
