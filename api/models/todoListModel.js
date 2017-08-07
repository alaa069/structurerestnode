'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  timestamps = require("mongoose-times"),
  mongoosePaginate = require('mongoose-paginate');

var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

TaskSchema.plugin(timestamps);
TaskSchema.plugin(mongoosePaginate);

var task = mongoose.model('Tasks', TaskSchema);

module.exports = task;