const winston = require('winston');
const WinstonCloudwatch = require('winston-cloudwatch');

const logger = new winston.Logger({
    transports: [
      new WinstonCloudwatch({
            logGroupName: 'glo3012',
            logStreamName: 'sample',
            awsRegion: 'us-west-2',
            jsonMessage: true
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
