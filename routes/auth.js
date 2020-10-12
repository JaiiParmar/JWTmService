var express = require("express");
var router = express.Router();

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

router.post("/", function (req, res, next) {
    const token = generateAccessToken({ username: req.body.username });
    console.log("Yes!");
    res.json(token);
});


// username is in the form { username: "my cool username" }
// ^^the above object structure is completely arbitrary
function generateAccessToken(username) {
  // expires after half and hour (1800 seconds = 30 minutes)
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}
module.exports = router;
