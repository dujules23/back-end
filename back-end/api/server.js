const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
require ("dotenv").config()


const pingRouter = require('./ping/ping-router')

const server = express()


server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/api/ping', pingRouter)



server.get("/", (req, res) => {
  res.json({kolinSays: "The future is nigh, Server is up and running"})
})

module.exports = server;