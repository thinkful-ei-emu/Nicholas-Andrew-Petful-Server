const app = require('./app');
const uuidv4 = require('uuid/v4');

const Queue = require('./utils/queue');
const Ticket = require('./utils/ticket');
const config = require('./config');

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
  },
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Kitten',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Birdie',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
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
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Bubba',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Gus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
];


/**
 * populate server with dummy data
 */
for (let i = 0; i < catsData.length; i++) {
  const cat = {
    ...catsData[i]
  };

  if (!cat.id) cat.id = uuidv4();

  cats.enqueue(cat);
}

for (let i = 0; i < dogsData.length; i++) {
  const dog = {
    ...dogsData[i]
  };

  if (!dog.id) dog.id = uuidv4();

  dogs.enqueue(dog);
}
for (let i = 0; i < ticketData.length; i++) {
  const ticket = ticketData[i];
  tickets.enqueue(new Ticket(ticket.username, ticket.email, i));
}

/**
 * set Queues as global vars
 */
app.set('cats', cats);
app.set('dogs', dogs);
app.set('tickets', tickets);

app.listen(config.PORT, () => {
  console.log(`Serving on ${config.PORT}`);
});