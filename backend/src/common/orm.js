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
  model.findAll(attributes
  ).then(function(result) {
    if (!result)
      res.sendStatus(404);
    res.json(result);
 }).catch(function(err) {
    logger.error(err.message);
    res.status(500).send(err.message);
 });
}

exports.findAllAndCount = (model, res, attributes, attributesCount) => {
  model.findAndCountAll(attributes
  ).then(function(result) {
    if (!result)
      res.sendStatus(404);
    model.count(attributesCount).then(function (resultCount) {
      result['count'] = resultCount;
      res.json(result);
    })
 }).catch(function(err) {
    logger.error(err.message);
    res.status(500).send(err.message);
 });
}

exports.find = (model, res, errCode, attributes, functionUpdate) => {
  model.find(attributes
  ).then(function(result) {
  if (functionUpdate != undefined)
    functionUpdate(result, res);
  else if (!result)
      res.sendStatus(errCode)
  else
    res.json(result);
 }).catch(function(err) {
   logger.error(err.message);
   res.status(500).send(err.message);
 });
}

exports.build = (model, res, attributes, callbacks, user) => {
  model.build(attributes).save()
  .then(function(result) {
    res.status(201);
    if (callbacks === undefined || callbacks.length == 0) {
      res.send();
    } else {
      for (var i = 0; i < callbacks.length; ++i) {
        callbacks[i](result.dataValues, attributes, res, user);
      }
    }
  }).catch(function(err) {
    errorManager.handle(err, res);
  });
}

exports.update = (model, newContent, res, attributes, callbacks) => {
  this.find(model, res, 404, attributes, function(resultModel, res) {
    resultModel.update(newContent).then(function(result) {
      if (!result)
       res.sendStatus(404)
      else if (callbacks === undefined || callbacks.length == 0) {
        res.json(result);
      } else {
        for (var i = 0; i < callbacks.length; ++i) {
          callbacks[i](result.dataValues, newContent, res);
        }
      }
     }).catch(function(err) {
       errorManager.handle(err, res);
     });
  });
}

exports.delete = (model, res, attributes) => {
  this.find(model, res, 404, attributes, function(resultModel, res) {
    if (!resultModel)
      res.sendStatus(404);
    else {
      resultModel.destroy({cascade : true}).then(function(result) {
        if (!result)
          res.sendStatus(404)
        else
          res.json(result);
      }).catch(function(err) {
       errorManager.handle(err, res);
     });
   }
  });
}

exports.query = (request) => {
  sequelize.query(request);
}
