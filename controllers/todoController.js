const mongoose = require('mongoose');
const ToDo = require('../models/todos');

module.exports = {
  add: (description, res) => {
    console.log('Adding new task!');
    let newTask = new ToDo({description: description, done: false});
    newTask.save().then((result) => {
      console.log('TaskAdded');
      res.redirect('/');
    }).catch((err) => {
      console.log('Something went wrong');
      res.redirect('/');
    });
  },
  taskCompleted: (id, res)=> {
    ToDo.findById(id)
      .then((result) => {
        console.log(result);
        result.done = !result.done;
        return result.save();
    }).then((result) => {
      res.redirect('/');
    });
  },
  notCompleted: (id, res)=> {
    ToDo.findById(id)
      .then((result) => {
        result.done = !result.done;
        return result.save();
    }).then((result) => {
      res.redirect('/');
    });
  }
}
