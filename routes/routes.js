const express = require('express');
const routes = express.Router();
const fs = require('fs');
const todoController = require('../controllers/todoController');
const ToDo = require('../models/todos');

routes.get('/', (req, res) => {

  ToDo.find({}).then((result) => {
    var count = 0;
    for (let i = 0; i < result.length; i++) {
      if (!result[i].done) {
        count++;
      }
    }
    res.render('index', {task: result, count: count});
  });
});

routes.post('/add', (req, res) => {
  todoController.add(req.body.description, res);
});

routes.post('/task/:id/completed', (req, res) => {
  todoController.taskCompleted(req.params.id, res);
});

routes.post('/task/:id/notcompleted', (req, res) => {
  todoController.notCompleted(req.params.id, res);
});

module.exports = routes;
