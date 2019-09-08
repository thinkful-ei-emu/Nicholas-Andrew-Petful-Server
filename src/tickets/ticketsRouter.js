const express = require('express');

const Ticket = require('../utils/ticket');

const ticketsRouter = express.Router();
const jsonBodyParser = express.json();

ticketsRouter
  .route('/')
  /**
   * responds with an array of the Ticket Queue for use
   * in the front end
   */
  .get((req, res) => {
    const tickets = req.app.get('tickets');
    const ticketArray = tickets.toArray();
    return res.json(ticketArray);
  })
  /**
   * enqueues a ticket and responds with the generated ticket
   */
  .post(jsonBodyParser, (req, res) => {
    const tickets = req.app.get('tickets');
    const { username, email } = req.body;
    const newTicket = new Ticket(username, email);
    tickets.enqueue(newTicket);

    res.status(201).json(newTicket);
  });


module.exports = ticketsRouter;