const idvalidate = require("../../utilities/mongo_id_validator");
const UserModel = require("../user/user.model");
const ProductModel = require("./product.model")
const productSvc = require("./product.service")

class ProductController {
CreateProduct = async(req, res, next) =>{
    const data = req.body
    try{
        const newProduct = await productSvc.createProduct(data);
        res.json({
            result: newProduct,
            message: "Product Added",
            meta: null
          })
    }catch(exception){
        next(exception)
    }
}

 getaproduct = async(req, res, next) => {
    try{
        const {id} = req.params
        idvalidate(id)
    const product = await productSvc.productDetailById(id)
    res.json({
        result : product,
        message: `details of product Id ${id} `,
        meta: null
    })
    }catch(exception){
        next(exception)
    }
 }

 getallProducts = async(req,res,next) =>{
    try{
        const query = req.query
        const allProducts = await productSvc.AllProductsFiltering(query)
        res.json({
            result: allProducts,
            message: "All Products",
            meta: null
        })
    }catch(exception){
        next(exception)
    }
 }

 UpdateaProduct = async(req,res,next) => {
    try{
        const {id} = req.params
        idvalidate(id)
        const updatedProduct = await productSvc.ProductUpdateById(id, req.body)
        res.json({
            result: updatedProduct,
            message: "The product has been updated successfully",
            meta: null
        })
    }catch(exception){
        next(exception)
    }
}
 
 DeleteaProduct = async(req, res, next) =>{
    try{
        const {id} = req.params
        idvalidate(id)
        const deletedproduct = await productSvc.ProductDeleteById(id)
        res.json({
            result: deletedproduct,
            message: `The product ${deletedproduct.title} has been deleted`,
            meta: null
        })
    }catch(exception){
        next(exception)
    }
 }

 AddToCart = async(req,res,next) => {
    const id = req.authUser
    const {prod_id} = req.body
    console.log(prod_id)
    try{
        const user = await UserModel.findById(id)
          console.log(user.cart)
        const alreadyadded = user.cart.find((id) => id.toString() === prod_id)
        if(alreadyadded){
            throw({message:"Product already added to your cart"})
        }
            let usercart = await UserModel.findByIdAndUpdate(id,
                {
                    $push: {cart:prod_id}
                },
                {new:true}
            ).populate('cart')
        
        res.json({
            result:usercart.cart,
            message: "Product added to your cart",
            meta: null
        })
    }catch(exception){
        next(exception)
    }
 }
}

const ProductCtrl = new ProductController()
module.exports= ProductCtrl