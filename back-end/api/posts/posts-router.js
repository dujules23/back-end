const router = require('express').Router()
const request = require('request')


router.get('/', (req, res) => {
  if (req.query) {
    res.status(200).json({
      "success": true 
    })
  }
});

module.exports = router