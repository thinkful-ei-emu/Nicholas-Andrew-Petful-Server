const express = require('express');

const adoptRouter = express.Router();
const jsonBodyParser = express.json();

adoptRouter
  .route('/')
  /**
   * dequeues from the specificed pet queue and ticket queue
   * if the both are the front of their respective queues
   * 
   * responds with the pet and ticket that was dequeued
   */
  .post(jsonBodyParser, (req, res) => {
    const { ticketId, petId, display } = req.body;

    const tickets = req.app.get('tickets');
    const pets = req.app.get(display);

    if (tickets.peek().id === ticketId && pets.peek().id === petId) {
      const adopted = {
        pet: pets.dequeue(),
        owner: tickets.dequeue()
      };

      /**
       * reinsert pet and owner into queues to simulate more pets and owners joining the line
       */
      pets.enqueue(adopted.pet);
      tickets.enqueue(adopted.owner);

      /**
       * return pet and owner pair
       */
      return res.json(adopted);
    }
    else return res.status(403).json({ error: 'not first in line' });
  });

module.exports = adoptRouter;