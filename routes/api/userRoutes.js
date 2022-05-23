const router = require('express').Router();

const {
  getUsers,
  // getSingleUser,
  // createUser,
  // updateUser,
  // deleteUser
} = require('../../controllers/userController');

// /api/users
router.route('/')
  .get(getUsers);

module.exports = router;