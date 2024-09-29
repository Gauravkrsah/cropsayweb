const idvalidate = require("../../utilities/mongo_id_validator");
const UserModel = require("./user.model");
const { userSvc } = require("./user.service");
const multer = require('multer');

class UserController {

 UserCreate =async (req,res,next)=> {
    try{
        const data = userSvc.transformUserCreate(req);
        const user = await userSvc.registerUser(data);
        console.log("Registered Data:", user);
        
        await userSvc.sendActivationEmail({name: user.name, email: user.email, token: user.activationToken})   

        res.json({
            result:user,
            message: "User Created",
            meta: null
        })
    }catch(exception){
        next (exception)
    }
}


userLists = async (req, res,next)=>{
    const userlist = await UserModel.find()
    res.json({
        result: userlist,
        message:"list all user",
        meta : null
    })
}

userdetailbyId = async (req,res, next)=>{
    
   try {
    
    const {id} = req.params;
    idvalidate(id)
    const details = await UserModel.findById(id)
    res.json({
        result: details,
        message:`user details of ${req.params.id}`,
        meta : null
    })
}catch(exception){
    next(exception)
}
}


userupdatebyId =async (req,res, next)=>{
try {
    const {id} = req.params;
    idvalidate(id)

if (!req.body.name) {
   throw({status:400, message: "request body is missing"});
}

const response = await userSvc.updateUser(req.body, id);

        res.json({
            result:response,
            message:`user update of ${id}`,
            meta : null
        })
}catch(exception){
    next(exception)
}
}


UserdeleteById = async(req, res, next) =>{
    try{
        const {id} = req.params;
        idvalidate(id)
        const response = await UserModel.findByIdAndDelete(id);
        if(!response){
            throw{status:404,message:"User not found"}

        }
        res.json({
            result: response,
            message: `User ${id} deleted successfully`,
            meta : null
        })

    }catch(exception){
        next(exception)
}
}

BlocKUser = async(req, res, next) =>{
    
    try{
        const {id} = req.params;
    idvalidate(id)
        const blockUser =await UserModel.findByIdAndUpdate(id,{
            isBlocked: true
        },
        {new:true}
    )

        res.json({
            message: "User Blocked"
        })
    }catch(exception){
        next(exception)
    }
}
UnblocKUser = async(req, res, next) =>{
   
    try{
        const {id} = req.params;
        idvalidate(id)
        const blockUser = await UserModel.findByIdAndUpdate(id,{
            isBlocked: false
        })

        res.json({
            message: "User Unblocked"
        })
    }catch(exception){
        next(exception) 
    }
}
}

const UserCtrl = new UserController()
module.exports= UserCtrl;

