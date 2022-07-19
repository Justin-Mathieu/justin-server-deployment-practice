const { Sequelize } = require('sequelize');
const { pet } = require('./models/petModel');
const { car } = require('./models/carModel');

let connection_string;

switch (process.env.NODE_ENV) {
  case 'production':
    connection_string = process.env.DATABASE_URL;
    break;

  case 'dev':
    connection_string = 'sqlite::memory:';
    break;
  case 'staging':
    connection_string = `sqlite:${process.env.SQLITE_file ?? '../db'}`;
    break;
}

const db = new Sequelize('sqlite::memory:', {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});




module.exports = {
  db,
  Pet: pet(db),
  Car: car(db),

};