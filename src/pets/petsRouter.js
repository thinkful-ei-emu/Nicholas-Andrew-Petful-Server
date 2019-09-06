const express = require('express');

const petsRouter = express.Router();
const jsonBodyParser = express.json();

// dummy db 

const notFoundError = {
  error: 'not found'
};

petsRouter
  .route('/cats')
  .get((req, res, next) => {
    const cats = req.app.get('cats');

    return res.json(cats.toArray());
  });

petsRouter
  .route('/dogs')
  .get((req, res, next) => {
    const dogs = req.app.get('dogs');

    return res.json(dogs.toArray());
  });

module.exports = petsRouter;