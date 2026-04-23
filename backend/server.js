import express from 'express';
import dotenv from "dotenv";
// import fileRoutes from "./src/routes/fileRoutes.js";
import connectDB from "./src/config/db.js";

dotenv.config()

const app = express()

app.use(express.json())

app.get("/", (_req,res) => {
    res.status(200).json({ message: "Worked my oo" });
})
// app.use("/api/files", fileRoutes);

await connectDB()

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});