const mongoose=require("mongoose")


let Userschema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    phone:{tyepe:Number},
    state:{type:String},
    district:{tyepe:String},
    address:{type:String},
    pincode:{type:Number},
    password:{type:String},
    confirmPassword:{type:String}
})
const User=mongoose.model("Users",Userschema)

module.exports=User;


