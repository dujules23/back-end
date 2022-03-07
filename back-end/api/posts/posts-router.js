const router = require('express').Router();
var axios = require('axios');

const { checkTags } = require('./posts-middleware')

router.get("/", (req, res, next) => {
  axios.get("https://api.hatchways.io/assessment/blog/posts?tag=tech")
    .then(response => res.status(200).send(response.data.posts))
    .catch(err => {
      res.status(400).json({ 
        message: "cannot get tags", err
      })
    });
});



module.exports = router