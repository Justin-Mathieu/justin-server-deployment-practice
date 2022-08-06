'use strict';
const express = require('express');
const router = require(express.Router());
const Collection = require('../models/collection-class');
const petModel = require('../models/models');
const Pet = new Collection(petModel);

router.post('/pet', async (req, res) => {
  let data = await Pet.create();
  res.send(data);
});

router.get('/pet', async (req, res) => {
  let data = await Pet.list();
  res.send(data);
});


router.get('/pet', async (req, res) => {
  let data = await Pet.getOne();
  res.send(data);
});

router.put('/pet', async (req, res) => {
  let data = await Pet.update();
  res.send(data);
});

router.delete('/pet', async (req, res) => {
  let data = await Pet.delete();
  res.send(data);
});

