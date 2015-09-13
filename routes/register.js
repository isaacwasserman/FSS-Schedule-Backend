var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
//  res.send(req.params);
});

router.post('/', function(req, res, next) {
  console.log(req.body.nickname + " from the " + req.body.grade + " class registered.");
  
  db.collection('users').insert({email: req.body.email, password: req.body.password, nickname: req.body.nickname, grade: req.body.grade}, function(err, result) {});
  
  res.cookie("fss-sched-account", req.body.email);
  res.cookie("fss-sched-password", req.body.password);
});

router.get('/nocookies', function(req, res, next) {
});

module.exports = router;
