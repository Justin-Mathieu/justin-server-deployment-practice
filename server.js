'use strict';

const express = require('express');

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFoundHandler = require('./handlers/codes/404.js');
const errorHandler = require('./handlers/codes/500.js');

const hello = require('./handlers/hello.js');
const evenodd = require('./handlers/evenodd.js');
// const bad = require('./handlers/bad');

const app = express();

app.get('/', logger, hello);
app.get('/data', logger, evenodd);
app.get('/person/:name', logger, validator);

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`));
}

module.exports = {
  app: app,
  start: start,
};