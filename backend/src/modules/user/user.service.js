require ("dotenv").config();
const bcrypt = require("bcryptjs");
const mailSvc = require("../../services/mail.service");
const UserModel = require("./user.model");
const randomStringGenerator = require("../../utilities/random-string");
const { deleteFile } = require("../../middlewares/uploader.middleware");



class UserService{

generateUserActivationToken = (data) =>{
    data.activationToken = randomStringGenerator(100)
    data.activateFor = new Date(Date.now()+(process.env.TOKEN_ACTIVE_FOR*60*60*1000))      
    return data; 
}

    transformUserCreate =  (req) =>{
        let data = req.body;

            if(req.file){
                data.image = req.file.filename
            }
            data.password = bcrypt.hashSync(data.password, 10)
           const tokenData = this.generateUserActivationToken(data)
           data.activationToken = tokenData.activationToken;
           data.status = "inactive"
        //    data.image = await uploadImage("./public/uploads/user/"+req.file.filename)
            return data;
    }

    sendActivationEmail =  async ({name, email, token, sub = "Activate your account"}) =>{
        try{
            await mailSvc.sendEmail({
                to: email,
                sub: sub ,
                message : `
                Dear ${name}, <br/>
                <p>Your account has been registered successfully</p>
                <p> Please click on the link below or copy and paste the url inthe browser to activate your account: </p>
                <a href = "${process.env.FRONTEND_URL+'activate/'+token}">${process.env.FRONTEND_URL+'activate/'+token}</a>
                <br>
                <p>----------------------------------------------------</p>
                <p>Regards</p>
                <p>System Admin</p>
                <p>"${process.env.SMTP_FROM}"</p>
                <p>
                <small><i>Please do not reply to this email</i></small>
                </p>               
                `
                
            })
        }catch(exception){
            throw exception
        }
    }

    registerUser = async (data)=>{
        try{
            const user = new UserModel(data);
              return await user.save();
        }catch(exception){
            if(data.image){
                deleteFile("./public/uploads/user/"+data.image);
            }
            throw(exception)
        }
    }

    getSingleUserByFilter = async(filter) =>{
        try{
           const UserDetail = await UserModel.findOne(filter);
           if(UserDetail){
            return UserDetail;
           }else{
            throw {status : 404, message: "User doesnot exist"}
           }
        }catch(exception){
            throw exception
        }
    }

    updateUser = async (data, id) =>{
        try{
            const response = await UserModel.findByIdAndUpdate(id, {$set: data}, {new:true})
            return response;
        }catch(exception){
            throw exception
        }
    }

    updatePassword= async(password, id)=>{
        try{
            const user = await UserModel.findById(id)
            user.password = bcrypt.hashSync(password, 10)
            const updatedUser = await user.save()
            return updatedUser
        }catch(exception){
            throw(exception)
        }

    }

    GeneratePasswordResetToken = (data) => {
        data.passwordResetToken = randomStringGenerator(32)
        data.passwordResetExpires = new Date(Date.now()+(30*60*1000))
        return data;
    }

    ForgotPasswordToken = async(req) => {
        const { email } = req.body;
      let user = await UserModel.findOne({ email });

      if (!user) {
        throw { message: "User doesnot exist" };
      }
      user = userSvc.GeneratePasswordResetToken(user);
      return await user.save();
    }

    ResetPasswordEmail = async ({name, email, token, sub = "Password Reset Token"}) =>{
        try{
            await mailSvc.sendEmail({
                to: email,
                sub: sub ,
                message : `
                Dear ${name}, <br/>
                <p> Please click on the link below or copy and paste the url in the browser to reset your password: </p>
                <a href = "${process.env.FRONTEND_URL+'resetpassword/'+token}">${process.env.FRONTEND_URL+'resetpassword/'+token}</a>
                <p>This link is valid till 30 minutes</p>
                <br>
                <p>----------------------------------------------------</p>
                <p>Regards</p>
                <p>System Admin</p>
                <p>"${process.env.SMTP_FROM}"</p>
                <p>
                <small><i>Please do not reply to this email</i></small>
                </p>               
                `
            })
        }catch(exception){
            throw exception
        }
    }

    ResetPassword = async(req) => {
        const {password} = req.body;
    const {token} = req.params;
    const user = await UserModel.findOne({
        passwordResetToken : token
    })
    if(!user){
        throw({message: "No such reset password found"})
    }else if (user.passwordResetExpires < Date.now()){
        throw({message: "Token expired. Please try again"})
    }
    user.password = bcrypt.hashSync(password, 10)
    user.passwordResetExpires = null;
    user.passwordResetToken = null;
   return await user.save()
    }

}

const userSvc = new UserService()
module.exports = {
    userSvc
}