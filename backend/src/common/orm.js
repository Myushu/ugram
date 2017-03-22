const Sequelize = require('sequelize');
const logger = require('./logger');
const config = require('config')
const errorManager  = require('./errors');

var sequelize = new Sequelize({
  username : config.get('sql')['credentials']['user'],
  password : config.get('sql')['credentials']['password'],
  database : config.get('sql')['database'],
  host : config.get('sql')['host'],
  port : config.get('sql')['post'],
  logging : logger.info,
  options : {
    retry : {
      max : config.get('sql')['maxRetries'],
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
    res.sendStatus(404);
  else if (res && result.error != undefined)
    errorManager.handle(result.error, res);
  else
    return false;
  return true;
}

function sequelizeCall (request)  {
  return request.then(function (result) {
    if (!result)
      return false;
    return result;
  }).catch(function(err) {
     logger.error(err.message);
     return {error : err};
  });
}

exports.findAll = (model, res, attributes) => {
  return sequelizeCall(model.findAll(attributes)).then(function (result) {
    setResult(result, res)
    return result;
  })
}

exports.findAllAndCount = (model, res, attributes) => {
  return this.findAll(model, res, attributes).then(function (result) {
    sequelizeCall(model.count({where : attributes.where})).then(function (resultCount) {
      var json = {};
      json['count'] = resultCount  == false ? 0 : resultCount;
      json['rows'] = result;
      if (res)
        res.send(json);
      return json;
    })
  });
}

exports.find = (model, res, attributes) => {
  return sequelizeCall(model.find(attributes), res).then(function (result) {
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
      res.sendStatus(201);
    return result;
  });
}

exports.update = (model, newContent, res, attributes) => {
  return sequelizeCall(model.update(newContent, attributes)).then(function (result) {
    if (setResult(result, res))
      return result;
    if (res)
      res.sendStatus(200);
    return result;
  });
}

exports.delete = (model, res, attributes) => {
  return sequelizeCall(model.destroy(attributes)).then(function (result) {
    if (setResult(result, res))
      return result;
    if (res)
      res.sendStatus(200);
    return result;
  })
}
