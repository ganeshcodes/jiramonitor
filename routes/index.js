// var express = require('express');
// var querystring = require('querystring');    
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'JIRA Monitor' });
// });

// router.post('/webhook', function(req, res, next) {
//   console.log("New issue created: ", req.body.issue.key);
//   var issue = {};
//   issue.key = req.body.issue.key;
//   issue.attachment = req.body.issue.fields.attachment;
//   issue.filenames = [];
//   issue.attachment.forEach(element => {
//     issue.filenames.push(element.filename)
//   });
//   console.log("Attachments: %o", issue.filenames);
//   res.json(issue);
// });

// module.exports = router;

module.exports = function(io) {
  var express = require('express');
  var router = express.Router();

  /* Socket.io connection */
  io.on('connection', function(socket) { 
      console.log('user connected index.js')
  });

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'JIRA Monitor' });
  });

  router.get('/usecases', function(req, res, next) {
    res.render('usecases', { title: 'FNC Usecases' });
  });

  /* POST JIRA Webhook */
  router.post('/webhook', function(req, res, next) {
    console.log("New issue created: ", req.body.issue.key);
    var issue = {};
    issue.key = req.body.issue.key;
    issue.attachment = req.body.issue.fields.attachment;
    issue.summary = req.body.issue.fields.summary;
    issue.filenames = [];
    issue.attachment.forEach(element => {
      issue.filenames.push(element.filename)
    });
    console.log("Attachments: %o", issue.filenames);
    io.emit('newissue', issue);
    res.json(issue);
  });

  return router;
}