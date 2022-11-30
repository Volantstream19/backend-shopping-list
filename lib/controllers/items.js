const e = require('express');
const { Router } = require('express');
const Item = require('../models/Item.js');

// TO DO - implement items CRUD

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const items = await Item.getAll(req.user.id);
    res.json(items);
  } catch (e) {
    next(e);
  }
});
