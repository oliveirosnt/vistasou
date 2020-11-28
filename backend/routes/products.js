var express = require('express');
var router = express.Router();

var myProducts = [
  {
    "id": 0,
    "name": "Vestido Azul", 
    "price": "120"
  },
  {
    "id": 1,
    "name": "Vestido vermelho", 
    "price": "120"
  },
  {
    "id": 2,
    "name": "Vestido rosa", 
    "price": "120"
  },
  {
    "id": 3,
    "name": "Vestido cinza", 
    "price": "120"
  }
];

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.json(myProducts);
  res.status("200");
});

/* GET product by id. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  res.json(myProducts[id]);
  res.status("200");
});

/* POST: add a new product. */
router.post('/', function(req, res, next) {
  req.body.id = myProducts.length;
  req.body.name = "aaa"
  req.body.price = "bbb"
  myProducts.push(req.body);
  res.json(req.body);
  res.status("201");
});

module.exports = router;
