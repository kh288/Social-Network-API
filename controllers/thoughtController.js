const { User, Thought } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find({})
      .then(async(thoughts) => {
        return res.json(thoughts);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  getSingleThought(req, res){
    Thought.findOne({ _id: req.params.userId })
    .select('-__v')
    .then(async(thought) => {
      !thought
        ? res.status(404).json({ message: 'No thought with that ID found' })
        : res.json(thought);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true },
        );
      })
      .then((thought) => {
        !thought
          ? res.status(404).json({ message: 'No thought with that ID found' })
          : res.json(thought);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, New: true },
    )
    .then(async(thought) => {
      !thought
        ? res.status(404).json({ message: 'No thought with that ID found' })
        : res.json("Successfully updated!");
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete(
      { _id: req.params.userId }
    )
    .then(async(thought) => {
      !thought
        ? res.status(404).json({ message: 'No thought with that ID found' })
        : User.findOneAndUpdate(
          { thoughts: req.params.thoughtId },
          { $pull: { thoughts: req.params } },
          { new: true},
          );
        res.json( { message: 'Successfully deleted', thought });
    })
  .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },
};
