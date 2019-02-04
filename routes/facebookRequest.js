var express = require("express");
var router = express.Router();
var logger = require("../database/logger");
var passportFacebook = require("./facebookAuthentication");

router.get("/facebook",
passportFacebook.authenticate("facebook", {scope: ["email"]}));

router.get("/facebook/callback",
passportFacebook.authenticate("facebook", {failureRedirect: "/"}),
function(request, response) {
    // Successful authentication
    logger.debug("Facebook Authentication Is Successfully Done");
    console.log("CallBACK CALL>>>>");
    response.redirect("http://localhost:9090/view/welcome.html");
});

module.exports = router;
