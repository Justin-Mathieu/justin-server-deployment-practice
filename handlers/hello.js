'use strict';

function hello(req, res) {
  res.status(200).send('Hello World');
}

module.exports = { hello };