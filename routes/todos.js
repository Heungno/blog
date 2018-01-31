const router = require('express').Router();
const Todo = require('../models/todo');

// Find All
router.get('/', (req, res) => {
  const todos = new Promise((resolve, reject) => Todo.findAll()
    .then((todos) => {
      if (!todos.length) return res.status(404).send({ err: 'Todo not found' });
      //res.send(todos);
      resolve(todos);
    })
    .catch(err => {
      //res.status(500).send(err)
      reject(err);
    })
  ); 
 
 // 서버단 작업끝
 Promise.all([todos]).then((values) => {
   res.render('list', { "title": "Todo List", "todos": values[0] });
 }); 
  
  
  
});

// Find One by todoid
router.get('/todoid/:todoid', (req, res) => {
  Todo.findOne(req.params.todoid)
    .then((todo) => {
      if (!todo) return res.status(404).send({ err: 'Todo not found' });
      res.send(todo);
    })
    .catch(err => res.status(500).send(err));
});

// Create new todo document
router.post('/', (req, res) => {
  Todo.create(req.body)
    //.then(todo => res.redirect("todos"))
    .then(todo => res.send(todo))
    .catch(err => res.status(500).send(err));
});

// Update by todoid
router.put('/todoid/:todoid', (req, res) => {
  Todo.updateByTodoid(req.params.todoid, req.body)
    .then(todo => res.send(todo))
    .catch(err => res.status(500).send(err));
});

// Delete by todoid
router.delete('/todoid/:todoid', (req, res) => {
  Todo.deleteByTodoid(req.params.todoid)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;