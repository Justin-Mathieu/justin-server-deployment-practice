'use strict';
function validator(req, res, next) {
  if (req.params.name) {
    res.status(200).send({ name: req.params.name });
    console.log(res);

  }
  else { res.status(500).send('Not Found'); }
}

module.exports = { validator }; 