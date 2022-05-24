const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  // deleteReaction
} = require('../../controllers/thoughtController.js');

router.route('/')
  .get(getThoughts)
  .post(createThought)

router.route('/:userId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)

router.route('/:userId/reactions').post(createReaction);

// router.route('/:userId/reactions/:reactionId').post(deleteReaction);

module.exports = router;
