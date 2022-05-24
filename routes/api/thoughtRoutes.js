const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// Getting all thoughts and creating a thought
router.route('/')
  .get(getThoughts)
  .post(createThought)

// Routes getting a single reaction, updating and deleting a thought
router.route('/:userId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)

// Create reaction based on userId and new text
router.route('/:userId/reactions').post(createReaction);
// Delete reaction by Id
router.route('/:userId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
