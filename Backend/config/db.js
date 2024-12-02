const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://muneebmalik2468:my-Mongo-DB@cluster0.3e40v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

module.exports = mongoose;