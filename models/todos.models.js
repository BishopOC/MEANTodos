var mongoose = require('mongoose');

var todosSchema = mongoose.Schema({
  description: String,
  completed: Boolean,
});

var Todos = mongoose.model('Todos', todosSchema);
module.exports = Todos;
