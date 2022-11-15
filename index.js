import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(bodyParser.json({ limit: "32mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));

app.use(cors());

app.use("/post", postRoutes);
app.use("/user", userRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Instaverse API");
});


const PORT = process.env.PORT || 3000


      app.listen(PORT, () => { console.log(`Server running on port:${PORT}`);
                             });
   
