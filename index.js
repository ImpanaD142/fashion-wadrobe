
import cors from 'cors';//security and acces/
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import PostRouter from "./routes/Posts.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// error handler
app.use((err, req, res, next) => {

    const status = err.status || 500;
const message = err.message || "Something went wrong!";
return res.status(status).json({
  success: false,
  status,
  message,
});
app.use("/api/post",PostRouter);


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello GFG Developers",
  });
});

});


const connectDB=()=>{
    mongoose.set("strictQuery",true);
    mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("MongoDB Connected")).catch((err)=>{
        console.error("Failed to connect to DB")
        console.error(err);

    });
};

// Function to start the server
const startServer = async () => {
    try {
        connectDB();
      app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();
  

