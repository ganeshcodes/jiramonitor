var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JIRA Monitor' });
});

router.post('/issue_created', function(req, res, next) {
  res.send('New JIRA issue created');
});

module.exports = router;
