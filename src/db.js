import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/baseball");

const db = mongoose.connection;

const handleOpenEvnet = (req, res) => console.log("✅ Ready to use DB");
const handleErrorEvent = (req, res) => console.log("❌ DB rror occurred in DB");

db.once("open", handleOpenEvnet);
db.on("error", handleErrorEvent);