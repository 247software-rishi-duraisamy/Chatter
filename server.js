const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db.js");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});