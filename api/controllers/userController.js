const router = require("express").Router();
const userModel = require("../models/users/userModel");
const auth = require("../authentication/auth")

router.get('/:id', auth.verifyToken, userModel.getUser)
router.post("/register", userModel.registerUser);
router.post("/login", userModel.loginUser);
router.patch("/addorder/:id", auth.verifyToken, userModel.addToOrders);
router.get('/all', auth.verifyTokenAndAdmin, userModel.getAllUsers)

module.exports = router;
