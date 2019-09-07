const express = require('express');

const adoptRouter = express.Router();
const jsonBodyParser = express.json();

adoptRouter
  .route('/')
  .post(jsonBodyParser, (req, res) => {
    const { ticketId, petId, display } = req.body;  
    console.log(display);
    const tickets = req.app.get('tickets');
    const pets = req.app.get(display);
    console.log(pets.peek());

    if (tickets.peek().id === ticketId && pets.peek().id === petId)
      return res.json(pets.dequeue());
    else return res.status(403).json({ error: 'not first in line' });
  });

module.exports = adoptRouter;