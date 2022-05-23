const { 
  // User, 
  Thought 
} = require('../models');

const allThoughts = async function() {
  allThoughts.aggregate()
    .count('thoughtCount')
    .then((numberOfThoughts) => numberOfThoughts);
}

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then(async(thoughts) => {
        const thoughtObj = {
          thoughts,
          thoughtCount: await allThoughts(),
        };
        return res.json(thoughtObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // getSingleThought(req, res){

  // },
  // createThought(req, res) {

  // },
  // updateThought(req, res) {

  // },
  // deleteThought(req, res) {

  // },
};
