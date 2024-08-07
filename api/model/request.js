import mongoose from "mongoose";

const Schema=mongoose.Schema;

const friendRequestSchema=new Schema({
    senderId:{
        type:"String",
        required:true,
    },
    receiverId:{
        type:"String",
        required:true,
    },
    status:{
        type:"String",
        required:true,
    },
})


export default mongoose("request",friendRequestSchema);