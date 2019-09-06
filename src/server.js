const app = require('./app');

const Queue = require('./utils/queue');

const cats = new Queue();
const dogs = new Queue();
const tickets = new Queue();

const ticketData = [
  {
    username: 'test1',
    email: 'test1@email.com'
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

const catsData = [
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
];

const dogsData = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
];

for (let i = 0; i < catsData.length; i++) {
  const cat = catsData[i];
  tickets.enqueue(cat);
}
for (let i = 0; i < dogsData.length; i++) {
  const dog = dogsData[i];
  tickets.enqueue(dog);
}
for (let i = 0; i < ticketData.length; i++) {
  const ticket = ticketData[i];
  tickets.enqueue(new Ticket(ticket.username, ticket.email, i));
}

app.set('cats', cats);
app.set('dogs', dogs);
app.set('tickets', tickets);

app.listen(8080, () => {
  console.log('Serving on 8080');
});