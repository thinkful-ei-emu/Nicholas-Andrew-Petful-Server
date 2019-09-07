const express = require('express');

const adoptRouter = express.Router();
const jsonBodyParser = express.json();

adoptRouter
  .route('/')
  .get(jsonBodyParser, (req, res) => {
    const { ticketId, petId, display } = req.body;  

    const tickets = req.app.get('tickets');
    const pets = req.app.get.get(display);

    if (tickets.peek().id === ticketId && pets.peek().id === petId)
      return res.json(pets.dequeue());
    else return res.status(403).json({ error: 'not first in line' });
  });