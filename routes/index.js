var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quizController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

/* GET author page. */
router.get('/', function(req, res) {
  res.render('author', { nombre: 'Andoni' });
});

module.exports = router;
