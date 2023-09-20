const jwt = require('jsonwebtoken');

const auth = (...authorized) => (req, res, next) => {
  if (!req?.headers?.authorization) {
    next("Please Enter your token");
    return;
  }

  if (!req?.headers?.authorization?.startsWith("Bearer")) {
    next("Invalid Token Structure");
    return;
  }

  const token = req.headers.authorization.split(" ")[1];
  const decode = jwt.verify(token, process.env.TOKEN_KEY);

  if (authorized.includes(decode.user_type)) {
    req.headers.user = decode;
    next()
  } else {
    next("Not Authorized Access")
  }



}

module.exports = auth