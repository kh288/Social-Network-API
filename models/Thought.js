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
// reactionId
//   Use Mongoose's ObjectId data type
//   Default value is set to a new ObjectId
reactionId: {
  type: Schema.Types.ObjectId,
  default: () => new Types.ObjectId(),
},
// reactionBody
//   String
//   Required
//   280 character maximum
reactionBody: {
  type: String,
  required: true,
  maxlength: 280,
},
// username
//   String
//   Required
username: {
  type: String,
  required: true,
},
// createdAt
//   Date
//   Set default value to the current timestamp
//   Use a getter method to format the timestamp on query
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