const { Schema, Types } = require('mongoose');

const emailCheck = '/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/';

const studentSchema = new Schema({
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
      validate: [emailCheck, 'Please enter a valid email'],
    },
    thoughts: [thoughtSchema],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
  },{
  toJSON: {
    getters: true,
  },
  id: false,
});

module.exports = studentSchema;
