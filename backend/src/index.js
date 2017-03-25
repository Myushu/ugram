const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');
const socket = require('socket.io');
const cors = require('cors');
const logger = require('./common/logger');
const orm = require('./common/orm');

const app = express();
const server = http.createServer(app);
const io = socket(server, { path: '/socket.io'});
const port = process.env.PORT || config.get('server')['port'];
const corsOptions = {
    origin: '*',
    methods: [
        'GET',
        'PUT',
        'POST',
        'DELETE',
    ],
    credentials: true
};

app.use(morgan(logger.format, {'stream': logger.stream}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
require('./common/headerManager')(app);
require('./common/tokenManager')(app);
require('./controllers/home-controller')(app);
require('./controllers/users-controller')(app);
require('./controllers/pictures-controller')(app);
require('./controllers/users-pictures-controller')(app);
require('./controllers/reaction-controller')(app);
require('./controllers/mention-controller')(app);
require('./controllers/hashtag-controller')(app);
require('./controllers/comment-controller')(app);
require('./controllers/follow-controller')(app);
require('./controllers/search-controller')(app);
require('./controllers/message-controller')(app);
require('./controllers/notification-controller')(app);
require('./controllers/socket-controller')(io);

orm.initConnection();
server.listen(port);
logger.info(`App started on port ${port}`);
