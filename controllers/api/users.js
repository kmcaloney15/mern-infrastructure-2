//this is the token getting returned
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

module.exports = {
  create,
};

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

/*-- Helper Functions --*/
// passing in the user that's created on line 12
function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" } //don't want web-token to go on and on, so set an expiration. always provide the time unit, other wise miliseconds will be use if put in quotes
  );
}
