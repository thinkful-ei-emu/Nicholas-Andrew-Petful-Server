const express = require('express');

const petsRouter = express.Router();
const jsonBodyParser = express.json();

// dummy db 
const cats = [
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

const dogs = [
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

const notFoundError = {
  error: 'not found'
};

petsRouter
  .route('/cats')
  .get((req, res, next) => {
    const pets = [
      ...cats
    ];

    return res.json(pets);
  });

petsRouter
  .route('/dogs')
  .get((req, res, next) => {
    const pets = [
      ...dogs
    ];

    return res.json(pets);
  });

module.exports = petsRouter;