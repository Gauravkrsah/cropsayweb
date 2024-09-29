const bodyValidator = require("../../middlewares/validator.middleware");
const authController = require("./auth.controller");
const LoginDTO = require("./auth.request");
const multer = require("multer")

const authRouter = require("express").Router();

const upload = multer()

authRouter.get("/activate/:token",authController.activateUser)
authRouter.get("/resend-activationToken/:token",authController.resendActivationToken)
authRouter.post("/login", upload.none(),bodyValidator(LoginDTO) ,authController.login)
authRouter.get("/refresh",authController.refreshToken)
module.exports = authRouter