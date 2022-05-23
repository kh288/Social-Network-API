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
      });
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId})
      .select('-__v')
      .then(async(user) => {
        !user
          ? res.status(404).json({ message: 'No user with that ID found' })
          : res.json({
            user
          });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => {
        res.json(user)
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    .then(async(user) => {
      !user
        ? res.status(404).json({ message: 'No user with that ID found' })
        : res.json({
          user
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },
  // deleteUser(req, res) {

  // },
};
