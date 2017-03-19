const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const logger = require('./common/logger');
const orm = require('./common/orm');

const port = process.env.PORT || config.get('server')['port'];
const app = express();

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

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(morgan(logger.format, {'stream': logger.stream}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

require('./common/tokenManager')(app);
require('./controllers/home-controller')(app);
require('./controllers/users-controller')(app);
require('./controllers/pictures-controller')(app);
require('./controllers/users-pictures-controller')(app);
require('./controllers/reaction-controller')(app);
require('./controllers/mention-controller')(app);
require('./controllers/hashtag-controller')(app);
require('./controllers/comment-controller')(app);
require('./controllers/search-controller')(app);

orm.initConnection();
app.listen(port);
logger.info(`App started on port ${port}`);
