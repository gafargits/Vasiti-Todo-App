const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../Models/ToDo");
const Todo = mongoose.model('todos')

//GET all todos
router.get('/', (req, res) => {
  Todo.find()
    .then(todo => res.json(todo))
    .catch(err => res.status(404).json({Todo: "Nothing todo yet"}))
})

//POST new todo
router.post('/', (req, res) => {
  const newTodo = new Todo({
    name: req.body.name,
    details: req.body.details,
    completed: req.body.completed
  })

  newTodo.save()
    .then(todo => res.json(todo))
    .catch(err => console.log(err))
})

//edit todo
router.patch('/:id', (req, res) => {
  const updatedTodo = {
    name: req.body.name,
    details: req.body.details,
    completed: req.body.completed
  }
  Todo.findOneAndUpdate({_id: req.params.id}, updatedTodo)
})

//delete todo
router.delete('/:id', (req, res) => {
  Todo.findOneAndDelete({_id: req.params.id})
    .then(() => res.json({deleted: "true"}))
    .catch(err => console.log(err))
})

module.exports = router;