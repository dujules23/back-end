const router = require('express').Router()

router.get('/', (req, res) => {
  if (req.query) {
    res.status(200).json({
      "success": true 
    })
  }
});

module.exports = router