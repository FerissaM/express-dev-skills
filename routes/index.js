var express = require('express');
var router = express.Router();

var skillsData = [
  { name: 'JavaScript', proficiency: 'Intermediate' },
  { name: 'HTML', proficiency: 'Advanced' },
  { name: 'CSS', proficiency: 'Advanced' },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', skills: skillsData });
});

module.exports = router;
