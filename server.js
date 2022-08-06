'use strict';

const express = require('express');

const { logger } = require('./middleware/logger');
const { validator } = require('./middleware/validator.js');
const { notFoundHandler } = require('./handlers/codes/404.js');
const { errorHandler } = require('./handlers/codes/500.js');
const { getPet, listPets, createPet, deletePet, updatePet } = require('./handlers/petHandlers');
const { hello } = require('./handlers/hello.js');
const { evenOdd } = require('./handlers/evenodd.js');
require('./db.js');
const { db } = require('./db');
const { listCars, getCar, createCar, deleteCar, updateCar } = require('./handlers/carHandlers.js');
const Collection = require('./models/collection-class');
const { Pet, Car } = require('./models/models.js');


const app = express();
app.use(express.json());
app.use(logger);

//Random routes
app.get('/', hello);
app.get('/data', evenOdd);
app.get('/person/:name', validator);

// // Pet routes 
// app.get('/pet/:id', getPet);
// app.get('/pet', listPets);
// app.post('/pet', createPet);
// app.delete('/pet/:id', deletePet);
// app.put('/pet/:id', updatePet);


// // Car routes
// app.get('/car/:id', getCar);
// app.get('/car', listCars);
// app.post('/car', createCar);
// app.delete('/car/:id', deleteCar);
// app.put('/car/:id', updateCar);

//Lab 04 

const petCollection = new Collection(Pet);
const carColection = new Collection(Car);



// Error Handling
app.use('*', notFoundHandler);
app.use(errorHandler);


//sync and listen
const startSync = true;
async function start(port) {
  if (startSync) {
    await db.sync();
  }
  app.listen(port, () => console.log(`Server up on port ${port}`));
}

module.exports = {
  app,
  start,
};