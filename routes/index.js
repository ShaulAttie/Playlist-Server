const express = require("express");
const router = express.Router();

const searchRouter = require("./searchRoute");

router.use("/search", searchRouter);

module.exports = router;
