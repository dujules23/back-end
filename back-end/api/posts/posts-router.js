const router = require('express').Router();
var axios = require('axios');

const { checkTags } = require('./posts-middleware')

let endpoints = [
  "https://api.hatchways.io/assessment/blog/posts?tag=history",
  "https://api.hatchways.io/assessment/blog/posts?tag=tech",
  "https://api.hatchways.io/assessment/blog/posts?tag=science",
  "https://api.hatchways.io/assessment/blog/posts?tag=startups",
  "https://api.hatchways.io/assessment/blog/posts?tag=politics",
  "https://api.hatchways.io/assessment/blog/posts?tag=health"
]

router.get("/", (req, res, next) => {
  
  Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then((
    [{data: history}, {data: tech}, {data: science}, {data: startups}, {data: politics}, {data: health} ] ) => {
      res.status(200).send( {history, tech, science, startups, politics, health} )
    }
  );
});



module.exports = router