import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoute.js";


const app = express();
app.use(express.json());

app.use("/api/user", router);

mongoose
  .connect(
    "mongodb+srv://ashu00665:ashu1234@cluster0.5z0xc.mongodb.net/chat?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("connect"))
  .catch((err) => console.log(err));


