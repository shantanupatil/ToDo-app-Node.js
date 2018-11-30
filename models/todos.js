const mongoose = require('mongoose');
//Schema is like Structure
const Schema = mongoose.Schema;

//create a Schema for all of or todo
let todoSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
});

//a model will help us to create delete and a lot more;
module.exports = mongoose.model('ToDo', todoSchema);
