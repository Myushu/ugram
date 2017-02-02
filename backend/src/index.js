const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const winston = require('winston');
const winstonCloudWatch = require('winston-cloudwatch');
const errors = require('./common/errors');
const logger = require('./common/logger');
const orm = require('./common/orm');

const port = process.env.PORT || 3000;
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

winston.add(winstonCloudWatch, {
    logGroupName: 'glo3012',
    logStreamName: 'sample'
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(morgan('combined', {'stream': logger.stream}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/home-controller')(app);
require('./controllers/users-controller')(app);
require('./controllers/pictures-controller')(app);
require('./controllers/users-pictures-controller')(app);

orm.initConnection();
app.listen(port);
logger.info(`App started on port ${port}`);
