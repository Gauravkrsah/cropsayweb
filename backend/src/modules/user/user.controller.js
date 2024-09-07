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

}

const UserCtrl = new UserController()
module.exports= UserCtrl;

