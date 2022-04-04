const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

app.use(methodOverride('_method'))

// ConnectDB
const db = require('./config/db')
db.connect();

// gọi route ra để dùng 
const route = require('./routes');


app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () =>
    console.log(`Listening at http://localhost:${port}`),
);
