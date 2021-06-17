const router = require("express").Router();
const productModul = require("../models/product/productModel");

router.get("/", productModul.getProducts);
router.get("/:id", productModul.getProduct);

router.post("/new", productModul.createProduct);

router.patch("/:id",  productModul.updateProduct);

router.delete("/:id", productModul.deleteProduct);

module.exports = router;

