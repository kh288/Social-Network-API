const { Schema, Types } = require('mongoose');
const { isEmail} = require('validator');

// username
//   String
//   Unique
//   Required
//   Trimmed
function validEmail(email) {
  return email;
}

const studentSchema = new Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate:[isEmail, 'Please enter a valid email'],
    },
    thoughts: {
      
    },
    friends: {

    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = studentSchema;
