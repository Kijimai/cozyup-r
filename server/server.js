require("dotenv").config()

const express = require("express")
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 8000

require("./config/mongoose.config")

