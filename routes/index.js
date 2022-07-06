const express = require('express')
const router = express.Router()

const searchRouter = require("./searchRoute")

router.use("searchs", searchRouter)

module.exports = router