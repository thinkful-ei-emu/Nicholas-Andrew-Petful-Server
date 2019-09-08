const express = require('express');

const petsRouter = express.Router();

petsRouter
  .route('/cats')
  /**
   * responds with an array of the cats Queue
   */
  .get((req, res, next) => {
    const cats = req.app.get('cats');

    return res.json(cats.toArray());
  });

petsRouter
  .route('/dogs')
  /**
   * responds with an array of the dogs Queue
   */
  .get((req, res, next) => {
    const dogs = req.app.get('dogs');

    return res.json(dogs.toArray());
  });

module.exports = petsRouter;