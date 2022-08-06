'use strict';
const express = require('express');
const router = require(express.Router());
const Collection = require('../models/collection-class');
const carModel = require('../models/models');
const Car = new Collection(carModel);

router.post('/car', async (req, res) => {
  let data = await Car.create();
  res.send(data);
});

router.get('/car', async (req, res) => {
  let data = await Car.list();
  res.send(data);
});


router.get('/car', async (req, res) => {
  let data = await Car.getOne();
  res.send(data);
});

router.put('/car', async (req, res) => {
  let data = await Car.update();
  res.send(data);
});

router.delete('/car', async (req, res) => {
  let data = await Car.delete();
  res.send(data);
});




