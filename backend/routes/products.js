var express = require('express');
var router = express.Router();

var myProducts = [
  {
    "id": 0,
    "name": "Vestido Azul", 
    "price": "120,00R$"
  },
  {
    "id": 1,
    "name": "Vestido vermelho", 
    "price": "120,00R$"
  },
  {
    "id": 2,
    "name": "Vestido rosa", 
    "price": "120,00R$"
  },
  {
    "id": 3,
    "name": "Vestido cinza", 
    "price": "120,00R$"
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
  myProducts.push(req.body);
  res.json(req.body);
  res.status("201");
});

module.exports = router;
