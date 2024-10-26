const idvalidate = require("../../utilities/mongo_id_validator");
const UserModel = require("./user.model");
const bcrypt = require("bcryptjs")
const { userSvc } = require("./user.service");
const multer = require("multer");
const cartModel = require("../cart/cart.model");
const ProductModel = require("../product/product.model");
const { object } = require("joi");

class UserController {
  UserCreate = async (req, res, next) => {
    try {
      const data = await userSvc.transformUserCreate(req);
      const user = await userSvc.registerUser(data);
      console.log("Registered Data:", user);
      await userSvc.sendActivationEmail({
        name: user.name,
        email: user.email,
        token: user.activationToken,
      });
      res.json({
        result: user,
        message: "User Created",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  userLists = async (req, res, next) => {
    const userlist = await UserModel.find();
    res.json({
      result: userlist,
      message: "list all user",
      meta: null,
    });
  };

  userdetailbyId = async (req, res, next) => {
    try {
      const { id } = req.params;
      idvalidate(id);
      const details = await UserModel.findById(id);
      res.json({
        result: details,
        message: `user details of ${req.params.id}`,
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  userupdatebyId = async (req, res, next) => {
    try {
      const id = req.authUser;
      const response = await userSvc.updateUser(req.body, id);
      res.json({
        result: response,
        message: `user updated`,
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  UserdeleteById = async (req, res, next) => {
    try {
      const id = req.authUser;
      const response = await UserModel.findByIdAndDelete(id);
      if (!response) {
        throw { status: 404, message: "User not found" };
      }
      res.json({
        result: response,
        message: `User ${id} deleted successfully`,
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  BlocKUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      idvalidate(id);
      const blockUser = await UserModel.findByIdAndUpdate(
        id,
        {
          isBlocked: true,
        },
        { new: true }
      );
      res.json({
        message: "User Blocked",
      });
    } catch (exception) {
      next(exception);
    }
  };

  UnblocKUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      idvalidate(id);
      const blockUser = await UserModel.findByIdAndUpdate(id, {
        isBlocked: false,
      });
      res.json({
        message: "User Unblocked",
      });
    } catch (exception) {
      next(exception);
    }
  };

  updatePassword = async (req, res, next) => {
    try {
      const id = req.authUser;
      const { password } = req.body;
      const updatedPassword = await userSvc.updatePassword(password, id);
      res.json({
        result: updatedPassword,
        message: "Password Changed Successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  ForgotPasswordToken = async (req, res, next) => {
    try {
        const user = await userSvc.ForgotPasswordToken(req)
        await userSvc.ResetPasswordEmail({
            name: user.name,
            email: user.email,
            token: user.passwordResetToken,
          });
      res.json({
        result: user.passwordResetToken,
        message:
          "Reset Token is sent to your email. Please check and proceed further.",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  ResetPassword = async(req,res,next) => {
    try{
        const user = await userSvc.ResetPassword(req)
    res.json({
        result:user,
        message:"Password changed successfully.",
        meta: null
    })
    }catch(exception){
        next(exception)
    }
  }

  AddToWishlist = async(req,res,next) => {
    const id = req.authUser
    const {prod_id} = req.body
    idvalidate(id)
    try{
        const user = await UserModel.findById(id)
          console.log(user.wishlist)
        const alreadyadded = user.wishlist.find((id) => id.toString() === prod_id)
        if(alreadyadded){
            throw({message:"Product already added to your wishlist"})
        }
            let userwishlist = await UserModel.findByIdAndUpdate(id,
                {
                    $push: {wishlist:prod_id}
                },
                {new:true}
            ).populate('wishlist')
        
        res.json({
            result:userwishlist.wishlist,
            message: "Product added to your wishlist",
            meta: null
        })
    }catch(exception){
        next(exception)
    }
 }

  GetWishlist = async(req,res,next) => {
    try{
        const id = req.authUser
        const userwishlist = await UserModel.findById(id).populate("wishlist")
        const wishlistitems = userwishlist.wishlist
        res.json({
          result: wishlistitems,
          message: "wishlist items shown",
          meta: null
        })
    }catch(exception){
      next(exception)
    }
  }

  AddtoCart = async(req,res, next)=> {
    try{
    const id = req.authUser
      const {cart}= req.body
      let products = []
      const user = await UserModel.findById(id)
      let usercart = await cartModel.findOne({orderBy : user._id})
      for (let i=0; i< cart.length;i++) {
        let object = {}
        object.product = cart[i].id
        object.count = cart[i].count || 1
        let getPrice = await ProductModel.findById(cart[i].id).select("price").exec()
        object.price = getPrice.price
        products.push(object)
      }
      let cartTotal = 0;
      for(let i=0; i< products.length;i++){
        cartTotal = cartTotal + products[i].price*products[i].count
      }
      let existingCart = await cartModel.findOne({ orderBy: user._id });
      if (existingCart) {
        products.forEach((newProduct) => {
          let existingProductIndex = existingCart.products.findIndex(p => p.product.toString() === newProduct.product.toString());
          console.log (existingProductIndex )
          if (existingProductIndex == -1) {
            existingCart.products.push(newProduct);
          }
        });
        existingCart.cartTotal = existingCart.products.reduce((total, item) => {
          return total + item.price * item.count;
        }, 0);
        await existingCart.save();
        return res.json({
          message: 'product added to cart',
          cart: existingCart
        });
      }
      console.log(products, cartTotal)
      const cartitem = await new cartModel({products,cartTotal,orderBy:user?._id}).save()
      res.json({
        result: cartitem,
        message: "Product added to cart",
        meta:null
      })
    }catch(exception){
      next(exception)
    }
  }

  GetUserCart = async(req,res,next) => {
    try{
      const id = req.authUser
      const cart = await cartModel.findOne({orderBy: id}).populate("products.product")
      res.json({
        result:cart
      })
    }catch(exception){
      next(exception)
    }
  }

  EmptyCart = async(req,res,next)=>{
    try{
      const id = req.authUser
      const user = await UserModel.findById(id)
      const cart = await cartModel.findOneAndDelete({orderBy: user._id})
      res.json({
        result:cart
      })
    }catch(exception){
      next(exception)
    }
  }

  Order = async(req,res,next)=>{
    try{
      
    }catch(exception){

    }
  }
}

const UserCtrl = new UserController();
module.exports = UserCtrl;
