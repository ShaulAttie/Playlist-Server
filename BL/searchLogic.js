// const searchController = require('../DL/controller/searchController')
const axios = require("axios");
require("dotenv").config();

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
  },
};

async function search(data) {
  // data from client
  if (!data) throw { code: 400, msg: "func search missing data" };

  console.log("searchLogic", data.params); // req.params.params

  const result = await axios.get(
    `https://simple-youtube-search.p.rapidapi.com/search?query=?${data.params}&safesearch=false`,
    options
  );

  console.log("res.data.results", result.data.results);
  return result.data.results;
}

module.exports = { search };
