const loginCheck = require('../../middlewares/auth.middleware')
const hasPermission = require('../../middlewares/rbac.middleware')
const { upload } = require('../../middlewares/uploader.middleware')
const bodyValidator = require('../../middlewares/validator.middleware')
const BrandCtrl = require('./brand.controller')
const BrandDTO = require('./brand.request')


const brandrouter = require('express').Router()

brandrouter.post("/createbrand",loginCheck, hasPermission("admin"), upload.none(), bodyValidator(BrandDTO), BrandCtrl.CreateBrand )
brandrouter.patch("/updatebrand/:id",loginCheck, hasPermission("admin"), upload.none(), bodyValidator(BrandDTO), BrandCtrl.UpdateBrand )
brandrouter.delete("/deletebrand/:id",loginCheck, hasPermission("admin"), BrandCtrl.DeleteBrand )
brandrouter.get("/getabrand/:id",BrandCtrl.GetaBrand )
brandrouter.get("/getallbrands",BrandCtrl.GetallBrands )

module.exports = brandrouter

