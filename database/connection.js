const mongoose = require("mongoose");

var config = require("./dbConfig");

mongoose.connect(config.dbUrl);

console.log("Connection Created....");

module.exports = mongoose;
