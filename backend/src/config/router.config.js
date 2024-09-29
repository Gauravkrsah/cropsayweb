const userRouter = require("../modules/user/user.router");
const router = require("express").Router();
const authRouter = require(".././modules/auth/auth.router");
const productRouter = require("../modules/product/product.router");

router.use('/auth',authRouter)
router.use('/user',userRouter)
router.use('/product',productRouter)
module.exports = router;