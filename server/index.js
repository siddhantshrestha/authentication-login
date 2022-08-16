const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/user.model")
const jwt = require("jsonwebtoken")

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://0.0.0.0:27017/authenticate-login") // connect to the database

app.post("/api/register", async (req, res) => {
  // console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    res.json({ status: "ok", message: "User created successfully" })
  } catch (error) {
    res.json({
      status: "error",
      error: "Duplicate Email",
    })
    console.log(error)
  }
})
app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  })

  if (user) {
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      "secret123",
      { expiresIn: "1h" }
    )
    return res.json({ status: "ok", data: token })
  } else {
    return res.json({ status: "error", data: false })
  }


})

app.listen(8000, () => {
  console.log("Server is running on port 8000")
})
