const mongoose = require("./connection");
var config = require("./dbConfig");

var Schema = mongoose.Schema;
var userSocialSchema = new Schema({
    userid: String,
    password: String
});

try {
    var User = mongoose.model(config.socialCollection, userSocialSchema);
}
catch(exception) {
    console.log("Exception Is :: "+exception);
}

module.exports = User;
