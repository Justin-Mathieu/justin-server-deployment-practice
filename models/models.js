const sequelize = require('sequelize');

function models(db) {


  const Pet = db.define('pet', {
    name: sequelize.DataTypes.STRING,
    age: sequelize.DataTypes.NUMBER,
    type: sequelize.DataTypes.STRING,

  });

  const Car = db.define('car', {
    make: sequelize.DataTypes.STRING,
    model: sequelize.DataTypes.STRING,
    color: sequelize.DataTypes.STRING,
  });

  Pet.belongsTo(Car);


  return { Pet, Car };
}

module.exports = { models };