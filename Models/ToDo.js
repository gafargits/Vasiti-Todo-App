const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  details: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
})

mongoose.model('todos', TodoSchema);