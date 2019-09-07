const express = require('express');

// const Queue = require('../utils/queue');
const Ticket = require('../utils/ticket');

const ticketsRouter = express.Router();
const jsonBodyParser = express.json();

// const tickets = new Queue();

ticketsRouter
  .route('/')
  .get((req, res) => {
    const tickets = req.app.get('tickets');
    const ticketArray = tickets.toArray();
    return res.json(ticketArray);
  })
  .post(jsonBodyParser, (req, res) => {
    const tickets = req.app.get('tickets');
    const { username, email } = req.body;
    const newTicket = new Ticket(username, email);
    tickets.enqueue(newTicket);

    res.status(201).json(newTicket);
  });


module.exports = ticketsRouter;