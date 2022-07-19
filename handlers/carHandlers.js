const { Car } = require('../db');

const createCar = async (req, res) => {
  const { make, model, color } = req.body;
  const car = Car.build({ make, model, color });
  await car.save();
  res.status(200).send(car);
};

const listCars = async (req, res) => {

  const cars = await Car.findAll();

  res.status(200).send(cars);
};

const getCar = async (req, res) => {
  let cars = await Car.findAll({
    where: {

      id: req.params.id,
    },
  });
  if (cars.length > 0) {
    res.status(200).send(cars[0]);
  } else {



    res.status(404).send(`Not Found with ${req.params.id}`);
  }
};

const updateCar = async (req, res) => {
  const id = req.params.id;
  const update = req.body;
  let car = await Car.findOne({ where: { id: id } });
  let updated = await car.update(update);
  res.status(200).json(updated);
};

const deleteCar = async (req, res) => {
  let petDelete = await Car.destroy({ where: { id: req.params.id } });
  res.status(204).json(`Deleted pet: ${petDelete}`);
};

module.exports = {
  createCar,
  listCars,
  getCar,
  updateCar,
  deleteCar,
};