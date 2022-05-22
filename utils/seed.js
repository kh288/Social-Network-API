const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { generateUser, generateThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('Connected');

  // await User.deleteMany({});
  // await Thought.deleteMany({});

  const users = [];
  const thoughts =[];

  // Create i amount of users
  for (let i = 0; i < 5; i++) {
    users.push(generateUser());
    thoughts.push(generateThought());
  }

  // console.log(users);
  // console.log(thoughts);

  await User.collection.insertMany(users);
});
