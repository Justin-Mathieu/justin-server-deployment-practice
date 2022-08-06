'use strict';

class Collection {
  constructor(model, app) {
    this.model = model;
  }
  async create(req, res) {
    const thing = this.model.build(req.body);
    await thing.save();
    res.status(200).send(thing);
  }
  async list(req, res) {
    const thing = await this.model.findAll();
    res.status(200).send(thing);
  }
  async getOne(req, res) {
    let thing = await this.model.findAll({
      where: {

        id: req.params.id,
      },
    });
    if (thing.length > 0) {
      res.status(200).send(thing[0]);
    } else {
      res.status(404).send(`Not Found with ${req.params.id}`);
    }
  }

  async update(req, res) {
    const id = req.params.id;
    const update = req.body;
    let car = await this.model.findOne({ where: { id: id } });
    let updated = await car.update(update);
    res.status(200).json(updated);
  }

  async delete(req, res) {
    let thingToDelete = await this.model.destroy({ where: { id: req.params.id } });
    res.status(204).json(`Deleted pet: ${thingToDelete}`);
  }



}


module.exports = Collection;
