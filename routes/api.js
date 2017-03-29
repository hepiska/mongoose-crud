var express = require('express');
var router = express.Router();
var booksControl = require('../controler/books');
var constumerControl = require('../controler/costumers');
var transactionsControl = require('../controler/transactions');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/books', booksControl.create );
router.get('/books', booksControl.reads );
router.put('/books/:id', booksControl.update )
router.delete('/books/:id', booksControl.delete )

router.post('/costumers', constumerControl.create );
router.get('/costumers', constumerControl.reads );
router.put('/costumers/:id', constumerControl.update )
router.delete('/costumers/:id', constumerControl.delete );

router.get('/transactions', transactionsControl.reads );
router.get('/transactions/:id', transactionsControl.read )
router.post('/transactions', transactionsControl.create );

module.exports = router;
