const { User, Thought } = require('../models');

const allUsers = async function() {
  Users.aggregate()
    .count('userCount')
    .then((numberOfUsers) => numberOfUsers);
}

