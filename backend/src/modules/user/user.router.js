const loginCheck = require('../../middlewares/auth.middleware');
const hasPermission = require('../../middlewares/rbac.middleware');
const { setPath, uploadfile } = require('../../middlewares/uploader.middleware');
const bodyValidator = require('../../middlewares/validator.middleware');
const UserCtrl = require('./user.controller');
const { userCreateDTO } = require('./user.request');

const userRouter = require('express').Router();

userRouter.post("/register",setPath('user'),uploadfile().single('image'), bodyValidator(userCreateDTO),UserCtrl.UserCreate)
userRouter.get( "/userlist", loginCheck, hasPermission('admin'), UserCtrl.userLists)
userRouter.get("/userdetail/:id",  UserCtrl.userdetailbyId)


module.exports = userRouter