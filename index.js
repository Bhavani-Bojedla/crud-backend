const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");
const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://Bhavani-Bojedla:Bhavani123@cluster1.34vtstj.mongodb.net/MyCrudWeb");
    console.log("Database Connected");
  } catch (error) {
    console.log("error in db connection");
    console.log(error);
  }

};
app.use(express.json()); //helps me to convert the request into json format
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/users", userRoutes);
app.listen(4000, () => {
  dbConnect();
  console.log("server started on port 4000");
});