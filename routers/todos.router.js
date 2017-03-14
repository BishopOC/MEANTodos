var express = require('express');
var todosRouter = express.Router();
var Todos = require('../models/todos.models');

todosRouter.get('/todos', function(req, res){
  Todos.find({}, function(err, docs){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        todos: docs
      });
    }
  });
});

todosRouter.get('/todos/:id', function(req, res){
  Todos.find({_id: req.params.id}, function(err, docs){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        todos: docs
      });
    }
  });
});

todosRouter.post('/todos', function(req, res){
  var todos = new Todos(req.body);
  todos.save(function(err, docs){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Success'
      });
    }
  });
});

todosRouter.put('/todos/:id', function(req, res){
  Todos.findOneAndUpdate({_id: req.params.id}, req.body, function(err, docs){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully Updated'
      });
    }
  });
});

todosRouter.delete('/todos/:id', function(req, res){
  Todos.remove({_id: req.params.id}, function(err, docs){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully delete'
      });
    }
  });
});

module.exports = todosRouter;
