const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/userdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("CRUD Project Running");
});

app.use("/users", require("./routes/users"));

app.listen(5000, () => {
    console.log("Server Started on Port 5000");
});