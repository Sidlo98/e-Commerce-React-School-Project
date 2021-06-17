const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
  return jwt.sign({ id: user._id, admin: user.admin }, secretKey, {
    expiresIn: "1h",
  });
};

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    req.userData = jwt.verify(token, secretKey);
    next();
  } catch (error) {
    return res.status(401).json({
      statusCode: 401,
      status: false,
      message: "Access restricted! Please Login!",
    });
  }
};

exports.verifyTokenAndAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    req.userData = jwt.verify(token, secretKey);
    let user = jwt.decode(token, secretKey);
    if (user.admin) {
      next();
    } else {
      throw new Error();
    }
  } catch (error) {
    return res.status(401).json({
      statusCode: 401,
      status: false,
      message: "Access restricted! Please Login!",
    });
  }
};
