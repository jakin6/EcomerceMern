import express from 'express'
import asyncHandler from 'express-async-handler' 
import Product from '../Models/ProductModel.js'

const productRoute = express.Router()

//GET ALL PRODUCT
productRoute.get("/", asyncHandler(async (req, res) => {
    try {

        const products = await Product.find({});
        res.json(products)
    }
    catch (error) {
        console.log(error)
    }

}))
//GET SINGLE PRODUCT
productRoute.get("/:id", asyncHandler(
    async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product)
        }
        // else {
        //     res.status(404)
        //         .send('Product not Found')
        // }

    }
))

export default productRoute