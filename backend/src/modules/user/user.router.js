const { fileFilterType } = require('../../config/constants.config');
const loginCheck = require('../../middlewares/auth.middleware');
const hasPermission = require('../../middlewares/rbac.middleware');
const { setPath, uploadfile } = require('../../middlewares/uploader.middleware');
const bodyValidator = require('../../middlewares/validator.middleware');
const UserCtrl = require('./user.controller');
const { userCreateDTO, PasswordUpdateDTO } = require('./user.request');

const userRouter = require('express').Router();

userRouter.post("/register",setPath('user'),uploadfile(fileFilterType.IMAGE).array('image',10), bodyValidator(userCreateDTO),UserCtrl.UserCreate)
userRouter.post("/forgotpasswordtoken",uploadfile().none(),UserCtrl.ForgotPasswordToken)
userRouter.patch("/resetpassword/:token",uploadfile().none(), bodyValidator(PasswordUpdateDTO), UserCtrl.ResetPassword)
userRouter.patch("/updatepassword",uploadfile().none(),loginCheck, bodyValidator(PasswordUpdateDTO),UserCtrl.updatePassword)
userRouter.get( "/userlist", loginCheck, hasPermission('admin'), UserCtrl.userLists)
userRouter.get("/userdetail/:id",  UserCtrl.userdetailbyId)
userRouter.patch("/userupdate", uploadfile().none(), loginCheck, UserCtrl.userupdatebyId)
userRouter.put("/blockUser/:id",loginCheck,hasPermission('admin'),UserCtrl.BlocKUser)
userRouter.put("/unblockUser/:id",loginCheck,hasPermission('admin'),UserCtrl.UnblocKUser)
userRouter.delete("/userdelete",loginCheck,UserCtrl.UserdeleteById)
userRouter.put('/addtowishlist',loginCheck,uploadfile().none(), UserCtrl.AddToWishlist)
userRouter.get("/getwishlist",loginCheck,UserCtrl.GetWishlist)

module.exports = userRouter;