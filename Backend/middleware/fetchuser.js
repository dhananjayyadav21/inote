var jwt = require("jsonwebtoken");
const authToken_SECRATE = "NEEL@IS$HERO#!&";

const fetchuser = (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      return res
        .status(401)
        .send({ error: "plese authenticate using a valid token" });
    }
    const data = jwt.verify(token, authToken_SECRATE);
    req.user = data.user;
    next();
  } catch (error) {
    console.log(error.message);
    res.send({ error: "plese authenticate using a valid token" });
  }
};

module.exports = fetchuser;
