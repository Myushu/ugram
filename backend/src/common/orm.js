const Sequelize = require('sequelize');
const logger = require('./logger');
const config = require('./config')
const errorManager  = require('./errors')

var sequelize = new Sequelize({
  username : config.getSqlCredentialsConfig('user'),
  password : config.getSqlCredentialsConfig('password'),
  database : config.getSqlConfig('database'),
  host : config.getSqlConfig('host'),
  port : config.getSqlConfig('port'),
  options : {
    retry : {
      max : config.getSqlConfig('maxRetries'),
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

exports.findAll = (model, res, attributes) => {
  model.findAll({
    attributes : attributes
 }).then(function(result) {
    if (!result)
      res.sendStatus(404);
    res.json(result);
 }).catch(function(err) {
    logger.error(err.message);
    res.status(500).send(err.message);
 });
}

exports.find = (model, res, attributes, where, functionUpdate) => {
  model.find({
    attributes : attributes,
    where: where
 }).then(function(result) {
   if (!result)
    res.sendStatus(404)
  else if (functionUpdate != undefined)
    functionUpdate(result, res);
  else
    res.json(result);
 }).catch(function(err) {
   logger.error(err.message);
   res.status(500).send(err.message);
 });
}

exports.build = (model, res, attributes) => {
  model.build(attributes).save()
  .then(function(result) {
    res.sendStatus(201);
  }).catch(function(err) {
    errorManager.handle(err, res);
  });
}

exports.update = (model, newContent, attributesWhere, res) => {
  this.find(model, res, undefined, attributesWhere, function(resultModel, res) {
    resultModel.update(newContent).then(function(result) {
      if (!result)
       res.sendStatus(404)
     else
       res.json(result);
     }).catch(function(err) {
       errorManager.handle(err, res);
     });
  });
}

exports.delete = (model, attributesWhere, res) => {
  this.find(model, res, undefined, attributesWhere, function(resultModel, res) {
    resultModel.destroy().then(function(result) {
      if (!result)
       res.sendStatus(404)
     else
       res.json(result);
     }).catch(function(err) {
       errorManager.handle(err, res);
     });
  });
}
