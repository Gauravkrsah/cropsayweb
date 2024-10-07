const userRouter = require("../modules/user/user.router");
const router = require("express").Router();
const authRouter = require(".././modules/auth/auth.router");
const productRouter = require("../modules/product/product.router");
const categoryrouter = require("../modules/category/category.router");
const brandrouter = require("../modules/brand/brand.router");

router.use('/auth',authRouter)
router.use('/user',userRouter)
router.use('/product',productRouter)
router.use('/category',categoryrouter)
router.use('/brand',brandrouter)
module.exports = router;