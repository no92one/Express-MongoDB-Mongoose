import express from "express"
import mongoose from "mongoose"
import apiRegister from "./api-register.js"

const server = express()
const port = 3000

server.use(express.json())

// Configure MongoDB connection
mongoose.connect("mongodb+srv://linus:qwerty123456@cluster0.nyncb7g.mongodb.net/Fullstack23")

// Serve static client directory
server.use(express.static('../client'));

// Connect to API routes
apiRegister(server, mongoose)

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})