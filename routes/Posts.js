//used to maintain structure //
import express
 from "express";
 import { getAllPosts } from "../controllers/Posts";
 const router=express.Router();
 router.get("/",getAllPosts);
 router.post("/",createPost);
 export  default router;