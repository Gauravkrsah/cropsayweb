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
     image: Array,
     cart: [{type: mongoose.Schema.ObjectId, ref: "Product"}],
     isBlocked: {
        type: Boolean,
        default: false
     },
     passwordChangedAt:Date,
     passwordResetToken:String,
     passwordResetExpires:Date,
 },{
     timestamps:true,  
     autoIndex:true,
     autoCreate: true
 });
 
 
 const UserModel = mongoose.model("User", UserSchema)
 
 module.exports = UserModel;
 