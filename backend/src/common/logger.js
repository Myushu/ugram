const config = require('config');
var winston = require('winston');
var CloudWatchTransport = require('winston-aws-cloudwatch');

const logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
      colorize: true,
    })
  ]
});

var configuration = {
  logGroupName: config.get('winston')['logGroupName'],
  logStreamName: config.get('winston')['logStreamName'],
  createLogGroup: false,
  createLogStream: true,
  awsConfig: {
    accessKeyId: process.env.CLOUDWATCH_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDWATCH_SECRET_ACCESS_KEY,
    region: config.get('winston')['awsRegion'],
  },
  formatLog: function (item) {
    return item.level + ': ' + item.message + ' ' + JSON.stringify(item.meta)
  }
}

if (config.get('winston')['enable'])
  logger.add(CloudWatchTransport, configuration);
logger.level = config.get('winston')['level'],
logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};
module.exports = logger;
