const mongoose = require("mongoose")

const BrandSchema = new mongoose.Schema({
    title :{
        type: String,
        required: true,
        unique: true,
    },
},
{
    timestamps: true,
    autoIndex:true
}
)

const BrandModel =mongoose.model("Brand", BrandSchema)
module.exports = BrandModel