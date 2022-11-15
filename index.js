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

const CONNECTION_URL = 'mongodb+srv://instaverse:instaverse123@cluster0.uu9geht.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001

const connectDB = async () => {
    try {
      await mongoose.connect(CONNECTION_URL);
      app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
    } catch (error) {
      console.error("Connection to MongoDB has failed", error.message);
    }
  };
  connectDB();
  
  mongoose.connection.on("open", () =>
    console.log("Connection to database has been established successfully")
  );
  mongoose.connection.on("error", (err) => console.error(err));
