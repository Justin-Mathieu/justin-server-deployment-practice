'use strict';
function logger(req, res, next) {
  console.log({ Method: req.method, URL: req.path });
  next();
}

module.exports = logger;