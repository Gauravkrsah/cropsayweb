const bodyValidator = require('../../middlewares/validator.middleware')
const ProductCtrl = require('./product.controller')
const multer = require('multer')
const { ProductCreateDTO } = require('./product.request')
const loginCheck = require('../../middlewares/auth.middleware')
const hasPermission = require('../../middlewares/rbac.middleware')
const productRouter = require('express').Router()

const upload = multer()
productRouter.post('/createProduct',loginCheck, hasPermission('admin'), upload.none(), bodyValidator(ProductCreateDTO), ProductCtrl.CreateProduct)
productRouter.get('/getaproduct/:id',ProductCtrl.getaproduct)
productRouter.get('/getallproducts',ProductCtrl.getallProducts)

module.exports = productRouter