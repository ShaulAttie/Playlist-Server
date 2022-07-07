const express = require("express");
const router = express.Router();

const searchLogic = require("../BL/searchLogic");

router.get("/:params", async (req, res) => {
  // console.log("search req body", req.body)
  try {
    // console.log("/search params", req.params);
    const result = await searchLogic.search(req.params);
    console.log("searchRoute res", result);
    res.status(200).send(result);
  } catch (error) {
    console.log("/search error", error);
    if (error.code && error.code < 1000) {
      res.status(error.code).send(error.msg);
    } else {
      res.send("/search something went wrong");
    }
  }
});

module.exports = router;
