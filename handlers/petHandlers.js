const { Pet } = require('../db');

const createPet = async (req, res) => {
  const { name, age, type } = req.body;
  const pet = Pet.build({ name, age, type });
  await pet.save();
  res.status(200).send(pet);
};

const listPets = async (req, res) => {
  let pets = await Pet.findAll();
  res.status(200).send(pets);
};

const getPet = async (req, res) => {
  let pets = await Pet.findAll({
    where: {

      id: req.params.id,
    },
  });
  if (pets.length > 0) {
    res.status(200).send(pets[0]);
  } else {



    res.status(404).send(`Not Found with ${req.params.id}`);
  }
};

const updatePet = async (req, res) => {
  const id = req.params.id;
  const update = req.body;
  let pet = await Pet.findOne({ where: { id: id } });
  let updated = await pet.update(update);
  res.status(200).json(updated);
};

const deletePet = async (req, res) => {
  let petDelete = await Pet.destroy({ where: { id: req.params.id } });
  res.status(204).json(`Deleted pet: ${petDelete}`);
};

module.exports = {
  createPet,
  listPets,
  getPet,
  updatePet,
  deletePet,
};