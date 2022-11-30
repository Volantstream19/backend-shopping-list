const e = require('express');
const { Router } = require('express');
const Item = require('../models/Item.js');

// TO DO - implement items CRUD
// i noticed on the website when i try to add an item it doesn't add
//i think this is beacause i haven't made an insert yet??

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const items = await Item.getAll(req.user.id);
      res.json(items);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const items = await Item.insert({ ...req.body, user_id: req.user.id });
      res.json(items);
    } catch (e) {
      next(e);
    }
  });
