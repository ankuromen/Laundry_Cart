const mongoose= require("mongoose")
let orderSchema=new mongoose.Schema({
   userEmail:String,
   orderId:String,
   items:[{
    name:String,
    quantity:Number,
    checkboxes:Object,
    price:String,
   clearValues:String,
   },
],
quantity:Number,
total:Number,
clicktime:Date,

})


const Order=mongoose.model("Order",orderSchema);

module.exports=Order;
