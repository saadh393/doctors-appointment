const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  if(!req.headers.authorization){
    next("Please Enter your token")
  }
 
  if(!req.headers.authorization.startsWith("Bearer")){
    next("Invalid Token Structure")
  }

  const token = req.headers.authorization.split(" ")[1];
  const decode = jwt.verify(token, process.env.TOKEN_KEY);

  req.header.user = decode.user;
  next()
}

module.exports = auth