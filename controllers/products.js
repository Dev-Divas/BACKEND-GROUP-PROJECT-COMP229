console.log("Products model loaded");
let ProductsModel = require('../models/product');

console.log("Product Model:", ProductsModel);
console.log("Find:", typeof ProductsModel.find);
console.log("Create:", typeof ProductsModel.create);
module.exports.create = async function (req, res, next) {
    try {  
        let newProduct = ProductsModel(req.body);
        newProduct.seller = req.user.id;
        newProduct.status = "Available";
        let result = await ProductsModel.create(newProduct);
        console.log(result);
        res.json({
            success: true,
            message: "Product added successfully.",
            data: result
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};
module.exports.getAll = async function (req, res, next) {
    try {
        let list = await ProductsModel.find({
            status: "Available"
        });
        res.json({
            success: true,
            message: "Products list retrieved successfully.",
            data: list
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};
module.exports.getByID = async function (req, res, next) {
    try {

        let result = await ProductsModel.findById(req.params.id);

        if (!result) {
            throw new Error('Product not found.');
        }

        res.json({
            success: true,
            message: 'Product retrieved successfully.',
            data: result
        });

    }
    catch (error) {
        next(error);
    }
};
module.exports.update = async function (req, res, next) {
    try {
        let productId = req.params.id;
        let updatedProduct = ProductsModel(req.body);
        updatedProduct._id = productId;
        let result = await ProductsModel.updateOne(
            {
                _id: productId,
                seller: req.user.id
            },
            {
                $set: {
                    title: req.body.title,
                    brand: req.body.brand,
                    category: req.body.category,
                    subcategory: req.body.subcategory,
                    price: req.body.price,
                    size: req.body.size,
                    condition: req.body.condition,
                    description: req.body.description,
                    image: req.body.image,
                    updatedAt: new Date()
                }
            }
        );

        console.log(result);
        if (result.matchedCount > 0) {
            res.json({
                success: true,
                message: "Product updated successfully."
            });
        }
        else {
            throw new Error('Product not updated. Are you sure it exists and belongs to you?');
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};
module.exports.disable = async function (req, res, next) {
    try {
        let productId = req.params.id;
        let result = await ProductsModel.updateOne(
            {
                _id: productId,
                seller: req.user.id
            },
            {
                $set: {
                    status: "Disabled",
                    updatedAt: new Date()
                }
            }
        );

        console.log(result);
        if (result.matchedCount > 0) {
            res.json({
                success: true,
                message: "Product disabled successfully."
            });
        }
        else {
            throw new Error('Product not disabled. Are you sure it exists and belongs to you?');
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};
