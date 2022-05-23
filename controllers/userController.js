const { 
  User, 
  Thought 
} = require('../models');

const allUsers = async function() {
  User.aggregate()
    .count('userCount')
    .then((numberOfUsers) => numberOfUsers);
}

module.exports = {
  getUsers(req, res) {
    User.find()
      .then(async(users) => {
        const userObj = {
          users,
          userCount: await allUsers(),
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      })
  },
  // getSingleUser(req, res) {

  // },
  // createUser(req, res) {

  // },
  // updateUser(req, res) {

  // },
  // deleteUser(req, res) {

  // },
};
