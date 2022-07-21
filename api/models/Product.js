const mongoose = require("mongoose")
// const {boolean} =require("webidl-conversions");
const ProductSchema = new mongoose.Schema(
    {
        title : {type : String , required:true , unique:true},
        img : {type:String , required:true },
        img1 : {type:String , required:true },
        img2: {type:String , required:true },
        img3: {type:String , required:true },
        features : {type:Array },
        features2 : {type:Array },
        features3 : {type:Array },
        
       

    },{timestamps:false}
)
module.exports = mongoose.model("Product",ProductSchema);