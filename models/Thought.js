const { Schema, model, Types } = require('mongoose');
const userSchema = require('./User');
const { getCurrentTime } = require('../util/helpers');

const thoughtSchema = new Schema({
  thoughtId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
  },{
  toJSON: {
    getters: true,
  },
});

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

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return {
      // this.reactions.length;
      }
});

module.exports = thoughtSchema;