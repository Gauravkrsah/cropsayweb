const mongoose = require('mongoose'); 
const { UserRoles, StatusType } = require('../../config/constants.config');
require("../../config/constants.config")


const AddressSchema = new mongoose.Schema({
    province: String,
     district: String,
     municiplaity: String,
     wardNo: Number,
     houseAddress: String
     }); 
 const UserSchema = new mongoose.Schema({
     name: {
         type: String,
         min:2,
         max:50,
         required:true
     },
     email :{
         type:String,
         unique:true,
         required:true
     },
     password:{
         type: String,
         required:true       
     },
     image:{
        type: String,
    },
     role:{
         type : String,
         enum: [...Object.values(UserRoles)],
         default: UserRoles.CUSTOMER
     },
     status:{
         type : String,
         enum: [...Object.values(StatusType)],
         default: StatusType.INACTIVE
     },
     activationToken: String,
     activateFor: Date,
     phone: String,
     address: {AddressSchema},
     forgetToken:String,
     forgetFor: Date,
     image: String,
     createdBy:{
         type: mongoose.Types.ObjectId,
         ref: "User",
         default:null
     }
 },{
     timestamps:true,  
     autoIndex:true,
     autoCreate: true
 });
 
 
 const UserModel = mongoose.model("User", UserSchema)
 
 module.exports = UserModel;
 