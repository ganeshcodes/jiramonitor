var express = require('express');
var querystring = require('querystring');    
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JIRA Monitor' });
});

router.post('/webhook', function(req, res, next) {
  console.log("New issue created: ", req.body.issue.key);
  var issue = {};
  issue.key = req.body.issue.key;
  issue.attachment = req.body.issue.fields.attachment;
  issue.filenames = [];
  issue.attachment.forEach(element => {
    issue.filenames.push(element.filename)
  });
  res.json(issue);
});

module.exports = router;
