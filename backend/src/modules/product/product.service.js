const ProductModel = require("./product.model")
const slugify = require('slugify')
class ProductService{
     createProduct  = async (data) => {
    try{
        if(data.title){
            data.slug = slugify(data.title)
        }
        const newProduct = await ProductModel.create(data)

        return newProduct
    }catch(exception){
        throw(exception)
    }
}

productDetailById = async(id) => {
    try{
        const product = await ProductModel.findById(id)
        return product
    }catch(exception){
        throw(exception)
    }
}

AllProducts = async()=>{
    try{
        const allProducts = await ProductModel.find()
        return allProducts
    }catch(exception){
        throw(exception)
    }
}
}

const productSvc = new ProductService()
module.exports = productSvc