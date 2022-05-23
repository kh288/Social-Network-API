const { Schema, model, Types } = require('mongoose');
const { getCurrentTime } = require('../utils/helpers');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: getCurrentTime,
  },
});

const thoughtSchema = new Schema({
  // thoughtId: {
  //   type: Schema.Types.ObjectId,
  //   default: () => new Types.ObjectId(),
  // },
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: getCurrentTime,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
  },{
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;