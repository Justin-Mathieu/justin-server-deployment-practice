const sequelize = require('sequelize');


function car(db) {
  return db.define('car', {
    make: sequelize.DataTypes.STRING,
    model: sequelize.DataTypes.STRING,
    color: sequelize.DataTypes.STRING,

  });
}

module.exports = {
  car,
};