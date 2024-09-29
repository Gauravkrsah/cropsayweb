const loginCheck = require('../../middlewares/auth.middleware');
const hasPermission = require('../../middlewares/rbac.middleware');
const { setPath, uploadfile, upload } = require('../../middlewares/uploader.middleware');
const bodyValidator = require('../../middlewares/validator.middleware');
const UserCtrl = require('./user.controller');
const { userCreateDTO } = require('./user.request');

const userRouter = require('express').Router();

userRouter.post("/register",setPath('user'),uploadfile().single('image'), bodyValidator(userCreateDTO),UserCtrl.UserCreate)
userRouter.get( "/userlist", loginCheck, hasPermission('admin'), UserCtrl.userLists)
userRouter.get("/userdetail/:id",  UserCtrl.userdetailbyId)
userRouter.patch("/userupdate/:id", upload.none(), loginCheck, UserCtrl.userupdatebyId)
userRouter.put("/blockUser/:id",loginCheck,hasPermission('admin'),UserCtrl.BlocKUser)
userRouter.put("/unblockUser/:id",loginCheck,hasPermission('admin'),UserCtrl.UnblocKUser)

userRouter.delete("/userdelete/:id",UserCtrl.UserdeleteById)

module.exports = userRouter