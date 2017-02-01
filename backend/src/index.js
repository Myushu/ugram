const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const errors = require('./common/errors');
const logger = require('./common/logger');
const orm = require('./common/orm');

const app = express();
const corsOptions = {
    origin: '*',
    methods: [
        'GET',
        'PUT',
        'POST',
        'PATCH',
        'DELETE',
        'UPDATE'
    ],
    credentials: true
};

const winston = require('winston');
const winstonCloudWatch = require('winston-cloudwatch');

winston.add(winstonCloudWatch, {
    logGroupName: 'glo3012',
    logStreamName: 'sample'
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(errors.genericErrorHandler);
app.use(morgan('combined', {'stream': logger.stream}));

require('./controllers/home-controller')(app);
require('./controllers/users-controller')(app);

const port = process.env.PORT || 3000;
orm.initConnection();
app.listen(port);

logger.info(`App started on port ${port}`);
