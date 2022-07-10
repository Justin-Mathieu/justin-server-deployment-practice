'use strict';
const express = require('express');

const hello = (request, response) => {
  response.status(200).send('Hello World!!');
};
const app = express();

app.get('/data', hello);

function start(port) {
  app.listen(port, () => console.log(`listening on port ${port}`));
}

module.exports = {
  app,
  start,
};