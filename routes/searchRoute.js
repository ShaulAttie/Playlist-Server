const express = require('express')
const router = express.Router()

const searchLogic = require('../BL/searchLogic')

router.get('/search/:params', async (req, res) => {
    // console.log("search req body", req.body)
    console.log("search params", req.params)
    try {
        // const result = 
        await searchLogic.search(req.params)
        res.status(200).send({ msg: '/search success' })
    } catch (error) {
        console.log("/search error", error);
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.msg)
        } else {
            res.send('/search something went wrong')
        }
    }
})

module.exports = router