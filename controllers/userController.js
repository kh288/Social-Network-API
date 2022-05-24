const { 
  User, 
  Thought 
} = require('../models');

// Group all users in a user array
const allUsers = async function() {
  User.aggregate()
    .count('userCount')
    .then((numberOfUsers) => numberOfUsers);
}

module.exports = {
  // Find all users
  getUsers(req, res) {
    User.find({})
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
  // View user based on an ID
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId})
      .populate("friends")
      .populate("thoughts")
      .select('-__v')
      .then(async(user) => {
        !user
          ? res.status(404).json({ message: 'No user with that ID found' })
          : res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Create user
    // Able to create based on username and email
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
  //  Update user based on ID
  //    Able to change username / email
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    .then(async(user) => {
      !user
        ? res.status(404).json({ message: 'No user with that ID found' })
        : res.json({ user });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },
  // Delete a user based on ID
  deleteUser(req, res) {
    User.findOneAndDelete(
      { _id: req.params.userId }
    )
    .then(async(user) => {
      !user
        ? res.status(404).json({ message: 'No user with that ID found' })
        : Thought.deleteMany({ _id: { $in: user.thoughts} });
        res.json( { message: 'Successfully deleted', user });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },
};
