const express = require('express');
const cors = require('cors');

const petsRouter = require('./pets/petsRouter');
const ticketsRouter = require('./tickets/ticketsRouter');
const adoptRouter = require('./adopt/adoptRouter');

const app = express();


app.use(cors());

/**
 * set app routes
 */
app.use('/api/pets', petsRouter);
app.use('/api/tickets', ticketsRouter);
app.use('/api/adopt', adoptRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;