const logger = require('../common/logger')
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.getSample = () => {
    return 'This is a sample';
}

exports.getParametrizedSample = (value) => {
    return {value: value};
}

exports.uploadSample = (body) => {
    const bucketName = 'glo3102-sample';
    const keyName = 'hello_world.txt';
    const params = {
        Bucket: bucketName,
        Key: keyName,
        Body: body
    };
    logger.info(`Uploading file "${keyName}" to bucket "${bucketName}" with body "${body}"`);
    return s3.putObject(params).promise();
}
