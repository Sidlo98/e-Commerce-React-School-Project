const mongodb = require("mongoose");
const Product = require("./ProductSchema");

exports.getProducts = (req, res) => {
  Product.find({}, (err, data) => {
    if (err) {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message:
          err.message || "Somthing went wrong when fetching the products",
      });
    }
    res.status(200).json(data);
  });
};

exports.getProduct = async (req, res) => {
  Product.exists({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "You made a bad request",
      });
    }

    if (result) {
      Product.findById({ _id: req.params.id })
        .then((data) => res.status(200).json(data))
        .catch((err) =>
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message,
          })
        );
    } else {
      res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Ooops, this products does not exist",
      });
    }
  });
};

exports.createProduct = (req, res) => {
  Product.exists({ name: req.body.name }, (err, result) => {
    if (err) {
      res.status(500).json(err);
    }
    if (result) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message:
          "Bad request, Product with that name already exists, Please update product instead.",
      });
    }

    const newProduct = new Product({
      name: req.body.name,
      short: req.body.short,
      desc: req.body.desc,
      price: req.body.price,
      image: req.body.image,
    });

    newProduct
      .save()
      .then(() => {
        res.status(201).json({
          statusCode: 201,
          status: true,
          message: "Product created successfully.",
        });
      })
      .catch((err) => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: "failed to create product.",
        });
      });
  });
};

exports.updateProduct = (req, res) => {
  Product.exists({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "You made a bad request.",
      })
    }

    if (result) {
      Product.updateOne(
        { _id: req.params.id },
        {
          ...req.body,
          modified: Date.now(),
        }
      ).then(() => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: "Product updated successfully.",
        })
      })
      .catch(() => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to update product.'
        })
      })
    } else {
      res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Ooops, this products does not exist.",
      })
    }
  })
}

exports.deleteProduct = (req, res) => {

  Product.exists({ _id: req.params.id}, (err, result) => {
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "You made a bad request.",
      })
    }

    if(result) {
      
      Product.deleteOne({ _id: req.params.id })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: "Product deleted successfully.",
          })
        })
        .catch(err => res.status(500).json({
          statusCode: 500,
          status: false,
          message: "Failed to delete product.",
          err
        }))
    } else {
      res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Ooops, this products does not exist.",
      })
    }
  })
}