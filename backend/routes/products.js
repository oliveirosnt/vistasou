var express = require('express');
var router = express.Router();

var storeProducts = [
  {
    "id": 0,
    "name": "short trançado",
    "color": "azul", 
    "description": "blablablabla",
    "price": "69,90"
  },
  {
    "id": 1,
    "name": "cropped regata", 
    "color": "azul cetim", 
    "description": "blablablabla",
    "price": "49,90"
  },
  {
    "id": 2,
    "name": "blusa gola alta vintage", 
    "color": "unica", 
    "description": "blablablabla",
    "price": "69,90"
  }
];

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.json(storeProducts);
});

module.exports = router;