const router = require('express').Router();

const {
  getThoughts,
  // getSingleThought,
  // createThought,
  // updateThought,
  // deleteThought
} = require('../../controllers/thoughtController.js');

router.route('/')
  .get(getThoughts);

module.exports = router;