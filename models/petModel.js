const sequelize = require('sequelize');


function pet(db) {
  return db.define('pet', {
    name: sequelize.DataTypes.STRING,
    age: sequelize.DataTypes.NUMBER,
    type: sequelize.DataTypes.STRING,

  });
}

module.exports = {
  pet,
};