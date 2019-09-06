const express = require('express');

const adoptRouter = express.Router();
const jsonBodyParser = express.json();

adoptRouter
  .route('/')
  .get(jsonBodyParser, (req, res) => {
    const { userId, petId, petType } = req.body;

    const tickets = req.app.get('tickets');
    const pets = req.app.get.get(petType);

    if (tickets.peek().id === userId && pets.peek().id === petId)
      return res.json(pets.dequeue());
    else return res.status(403).json({ error: 'not first in line' });
  });