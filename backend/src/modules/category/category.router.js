const loginCheck = require('../../middlewares/auth.middleware')
const hasPermission = require('../../middlewares/rbac.middleware')
const { upload, uploadfile } = require('../../middlewares/uploader.middleware')
const bodyValidator = require('../../middlewares/validator.middleware')
const CategoryCtrl = require('./category.controller')
const CategoryDTO = require('./category.request')

const categoryrouter = require('express').Router()

categoryrouter.post("/createcategory",loginCheck, hasPermission("admin"), uploadfile().none(), bodyValidator(CategoryDTO), CategoryCtrl.CreateCategory )
categoryrouter.patch("/updatecategory/:id",loginCheck, hasPermission("admin"), uploadfile().none(), bodyValidator(CategoryDTO), CategoryCtrl.UpdateCategory )
categoryrouter.delete("/deletecategory/:id",loginCheck, hasPermission("admin"), CategoryCtrl.DeleteCategory )
categoryrouter.get("/getacategory/:id",CategoryCtrl.GetaCategory )
categoryrouter.get("/getallcategory",CategoryCtrl.GetallCategory )

module.exports = categoryrouter

