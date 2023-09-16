const mongoose = require("mongoose")
const app = require("./src/server")

if (process.env.MONGO_URL) {
  console.log("Establishing Connection");
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    // console.clear()
    console.log("Mongoose Is Connected :)")
    app.listen(4000, () => console.log("Connection established at port 4000"));

  }).catch(err => {
    console.error("Mongoose Error")
    console.error(err)
  })
} else {
  console.log("MONGO_URL is missing in dot env file");
}