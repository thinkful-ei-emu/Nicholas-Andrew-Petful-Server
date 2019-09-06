const app = require('../src/app');
const Queue = require('../src/utils/queue');

describe('Pets Endpoint', () => {
  const cats = new Queue();
  const dogs = new Queue();

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

  before('create dummy arrays', () => {
    app.set('cats', cats);
    app.set('dogs', dogs);
  });
  describe('GET /api/pets/cats', async () => {
    context('given there are cats up for adoption', () => {
      before('populate dummy data', () => {
        for (let i = 0; i < catsData.length; i++) {
          const cat = catsData[i];
          cats.enqueue(cat);
        }
      });
      it('should return an array of cats', async () => {
        const res = await supertest(app)
          .get('/api/pets/cats')
          .expect(200);

        console.log('cats', res.body);
        expect(res.body).to.eql(cats.toArray());
      });
    });
  });

  describe('GET /api/pets/dogs', () => {
    context('given there are dogs up for adoption', () => {
      before('populate dummy data', () => {
        for (let i = 0; i < dogsData.length; i++) {
          const dog = dogsData[i];
          dogs.enqueue(dog);
        }
      });

      it('should return an array of dogs', async () => {
        const res = await supertest(app)
          .get('/api/pets/dogs')
          .expect(200);

        console.log('dogs', res.body);
        expect(res.body).to.eql(dogs.toArray());
      });
    });
  });
});