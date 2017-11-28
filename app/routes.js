const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})


router.get('/components/radio', function (req, res) {
  res.render('components/radio.nunjucks')
})

// Add your routes here - above the module.exports line

module.exports = router
