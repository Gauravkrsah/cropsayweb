const idvalidate = require("../../utilities/mongo_id_validator")
const BrandModel = require("./brand.model")

class BrandController {

CreateBrand = async(req,res,next)=>{
    try{
        const newBrand = await BrandModel.create(req.body)
        res.json({
            result: newBrand,
            message: `New Brand ${req.body.title} has been created.`,
            meta: null
        })
    }catch(exception){
        next(exception)
    }
}

UpdateBrand = async(req,res,next)=>{
    try{
        const {id} = req.params
        idvalidate(id)
        const updatedBrand = await BrandModel.findByIdAndUpdate(id,{$set:req.body}, {new: true})
        res.json({
            result: updatedBrand,
            message: `Brand Updated.`,
            meta: null
        })
    }catch(exception){
        next(exception)
    }
}

DeleteBrand = async(req,res,next)=>{
    try{
        const {id} = req.params
        idvalidate(id)
        const deletedBrand = await BrandModel.findByIdAndDelete(id)
        res.json({
            result: deletedBrand,
            message: `Brand ${id} Deleted.`,
            meta: null
        })
    }catch(exception){
        next(exception)
    }
}

GetaBrand = async(req,res,next)=>{
    try{
        const {id} = req.params
        idvalidate(id)
        const Brand = await BrandModel.findById(id)
        if(!Brand){
            throw({message:`Brand Id ${id} doesnot exist`})
        }
        res.json({
            result: Brand,
            message: `Details of Brand ${id}`,
            meta: null
        })
    }catch(exception){
        next(exception)
    }
}

GetallBrands = async(req,res,next)=>{
    try{
        const allBrand = await BrandModel.find()
        res.json({
            result: allBrand,
            message: `All brands`,
            meta: null
        })
    }catch(exception){
        next(exception)
    }
}
}

const BrandCtrl = new BrandController()
module.exports = BrandCtrl