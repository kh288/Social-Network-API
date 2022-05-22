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
    // users.push(generateUser());
    // thoughts.push(generateThought());
    const user = generateUser();
    const username = user[0];
    const email = user[1];
    // const thought = generateUser();
    users.push({
      username,
      email
    });
  }

  // console.log(users);
  // console.log(thoughts);

  await User.collection.insertMany(users);
  console.table(users);
  console.log('Seeding Complete');
});
