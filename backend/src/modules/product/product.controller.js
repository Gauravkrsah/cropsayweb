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
        const allProducts = await productSvc.AllProducts()

        res.json({
            result: allProducts,
            message: "All Products",
            meta: null
        })
    }catch(exception){
        next(exception)
    }
    
 }

}

const ProductCtrl = new ProductController()

module.exports= ProductCtrl