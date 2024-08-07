import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  postId:{
    type:String,
    required:true,
  },

  userId:{
    type:String,
    required:true,
  },

  content: {
    type: String,
    required: true,
  },

  user:{
    type:String,
    required:true,
  }
});

export default mongoose.model("post",postSchema)