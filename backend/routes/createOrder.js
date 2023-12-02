const express=require("express");
let orderSchema=require("../model/order.js");
const { route } = require("./login.js");
const Order = require("../model/order.js");

const router=express.Router();


router.post("/create/order",async(req,res) =>{
    try {
        const{orderId,items,clicktime,userEmail,quantity,total}=req.body;
        const order=new orderSchema({
            userEmail,
            orderId,
            items,
            quantity,
            total,
            clicktime,
        });
        await order.save();
        res.status(201).json({ message: 'Order created successfully' });
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get("/orders", async(req,res)=>{
    let {email}=req.user;
    let result=await Order.find({userEmail:email})
    return res.status(200).json({data:result})
  })

  router.delete("/orders/:orderId",async(req,res)=>{
    try {
      const orderId = req.params.orderId;
      const deletedOrder = await Order.findOneAndDelete({ orderId });

      if (!deletedOrder) {
          return res.status(404).json({ error: 'Order not found' });
      }

      res.json({ message: 'Order deleted successfully', deletedOrder });
  } catch (error) {
      console.error('Error deleting order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
  })



  module.exports=router