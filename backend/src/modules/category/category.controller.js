const idvalidate = require("../../utilities/mongo_id_validator")
const CategoryModel = require("./category.model")
const { message } = require("./category.request")

class CategoryController {

CreateCategory = async(req,res,next)=>{
    try{
        const newcategory = await CategoryModel.create(req.body)
        res.json({
            result: newcategory,
            message: `New category ${req.body.title} has been created.`,
            meta: null
        })
    }catch(exception){
        next(exception)
    }
}

UpdateCategory = async(req,res,next)=>{
    try{
        const {id} = req.params
        idvalidate(id)
        const updatedcategory = await CategoryModel.findByIdAndUpdate(id,{$set:req.body}, {new: true})
        res.json({
            result: updatedcategory,
            message: `Category Updated.`,
            meta: null
        })
    }catch(exception){
        next(exception)
    }
}

DeleteCategory = async(req,res,next)=>{
    try{
        const {id} = req.params
        idvalidate(id)
        const deletedcategory = await CategoryModel.findByIdAndDelete(id)
        if(!deletedcategory){
            throw({message: ""})
        }
        res.json({
            result: deletedcategory,
            message: `Category Deleted.`,
            meta: null
        })
    }catch(exception){
        next(exception)
    }
}

GetaCategory = async(req,res,next)=>{
    try{
        const {id} = req.params
        idvalidate(id)
        const category = await CategoryModel.findById(id)
        if(!category){
            throw({message:`Category Id ${id} doesnot exist`})
        }
        res.json({
            result: category,
            message: `Details of category ${id}`,
            meta: null
        })
    }catch(exception){
        next(exception)
    }
}

GetallCategory = async(req,res,next)=>{
    try{
        const allcategory = await CategoryModel.find()
        res.json({
            result: allcategory,
            message: `All categories`,
            meta: null
        })
    }catch(exception){
        next(exception)
    }
}
}

const CategoryCtrl = new CategoryController()
module.exports = CategoryCtrl