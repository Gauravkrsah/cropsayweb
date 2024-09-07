const UserModel = require("./user.model");
const { userSvc } = require("./user.service");

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
    const {id} = req.params;
   try {
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


userupdatebyId = (req,res, next)=>{
const params = req.params;
res.json({
    result:"",
    message:`user update of ${req.params.id}`,
    meta : null
})
}
userdeletebyId = (req,res, next)=>{
const params = req.params;
res.json({
result:"",
message:`user delete of ${req.params.id}`,
meta : null
})
}

}

const UserCtrl = new UserController()
module.exports= UserCtrl;

