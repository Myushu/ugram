const winston = require('winston');
const CloudWatchTransport = require('winston-aws-cloudwatch');
const config = require('../common/configManager');

const logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
      colorize: true,
    })
  ]
});

var winstonMode = config.get('WINSTON_MODE', 'winston.enable', false)
logger.info('Logged on Wiston : ' +  winstonMode);
if (winstonMode == true) {
  var configuration = {
    logGroupName: config.get('LOG_GROUP_NAME', 'winston.logGroupName'),
    logStreamName: config.get('LOG_STREAM_NAME', 'winston.logStreamName'),
    createLogGroup: false,
    createLogStream: true,
    awsConfig: {
      accessKeyId: config.get('CLOUDWATCH_ACCESS_KEY_ID', 'winston.cloudwatchAccessKeyId'),
      secretAccessKey: config.get('CLOUDWATCH_SECRET_ACCESS_KEY', 'winston.cloudwatchAccessId'),
      region: config.get('AWS_REGION', 'winston.awsRegion')
    }
  }
  logger.add(CloudWatchTransport, configuration);
}

logger.level = config.get('LOGGER_LEVEL', 'winston.level', 'silly');
logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};
logger.format = function (tokens, req, res) {
  var user = 'not connected'
  if (req.user)
    user = req.user.userId
  return [
    '\nmethod:      ', tokens.method(req, res),
    '\nurl:         ', tokens.url(req, res),
    '\nstatusCode:  ', tokens.status(req, res),
    '\nuserId:      ', user,
    '\nreponse-time:', tokens['response-time'](req, res), 'ms'
  ].join(' ')
};

module.exports = logger;
