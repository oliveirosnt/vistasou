var express = require('express');
var router = express.Router();

var myUsers = [
  {
    "id": 0,
    "login": "olineto", 
    "password": "olineto"
  },
  {
    "id": 1,
    "login": "dhebora", 
    "password": "dhebora"
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(myUsers);
});

/* GET user by id. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  res.json(myUsers[id]);
});

/* POST: add a new user. */
router.post('/', function(req, res, next) {
  req.body.id = myUsers.length;
  req.body.login = "aaa"
  req.body.password = "bbb"
  myUsers.push(req.body);
  res.json(req.body);
  res.status("201");
});

module.exports = router;
