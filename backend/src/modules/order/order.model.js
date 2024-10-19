const mongoose = require("mongoose");

var orderSchema = new mongoose.Schema({
produts : [
    {
    product :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    count: Number
}
],
paymentIntent:{},
orderStatus: {
    type:String,
    enum:["Not Processed", "Processing", "Dispatched", "Cancelled", "Delivered"],
    default: "Not Processed"
},
orderBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User"
}
},
{
    timestamps:true
}
);

module.exports = mongoose.model('Order', orderSchema);