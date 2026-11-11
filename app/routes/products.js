
var express = require('express');
var router = express.Router();

let productsController = require('../controllers/products');
router.get('/', productsController.getAll);

router.get('/:id', productsController.getByID);

router.post('/', productsController.create);

router.put('/:id', productsController.update);

router.delete('/:id', productsController.disable);

module.exports = router;
