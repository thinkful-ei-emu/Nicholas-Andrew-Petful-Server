// const ticketRouter = require('../src/ticket/ticketRouter');
const app = require('../src/app');
const Queue = require('../src/utils/queue');
const Ticket = require('../src/utils/ticket');


describe('Ticket Endpoint', () => {
  const tickets = new Queue();
  const testData = [
    {
      username: 'test1',
      email: 'test1@email.com',
    },
    {
      username: 'test2',
      email: 'test2email.com'
    },
    {
      username: 'test3',
      email: 'test3@email.com'
    },
    {
      username: 'test4',
      email: 'test4@email.com'
    },
    {
      username: 'test5',
      email: 'test5@email.com'
    },
    {
      username: 'test6',
      email: 'test6@email.com'
    },
  ];

  before('make test ticket array', () => {
    app.set('tickets', tickets);
  });

  describe('GET /api/tickets', () => {
    context('given there are tickets in the queue', () => {
      before('enqueue tickets', () => {
        for (let i = 0; i < testData.length; i++) {
          const ticket = testData[i];
          tickets.enqueue(new Ticket(ticket.username, ticket.email, i));
        }
      });

      it('should return a queue of tickets', async () => {
        const res = await supertest(app)
          .get('/api/tickets')
          .expect(200);

        expect(res.body).to.eql(tickets.toArray());
      });
    });
  });

  describe('POST /api/ticket', () => {
    it('should create and enqueue a ticket, then return that ticket', () => {

    });
  });
});