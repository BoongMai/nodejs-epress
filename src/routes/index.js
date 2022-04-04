const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const studentRouter = require('./students');

function route(app) {
    
    app.use('/news', newsRouter);

    app.use('/me', meRouter);

    app.use('/student', studentRouter);

    app.use('/', siteRouter);
}

module.exports = route;
