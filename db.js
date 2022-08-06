const { Sequelize } = require('sequelize');
const { Pet } = require('./models/models');
const { Car } = require('./models/models');

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

const db = new Sequelize(connection_string, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});




module.exports = {
  db,
  Pet: Pet(db),
  Car: Car(db),

};