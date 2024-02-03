const express = require('express');
const router = express.Router();

const productoController = require('../controllers/producto.controllers')

router.post("", productoController.createProducto);
router.get("", productoController.findAllProductos);
router.get("/:id", productoController.findProducto);
router.put("/:id", productoController.updateProducto);
router.delete("/:id", productoController.deleteProducto);

module.exports = router;