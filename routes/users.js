var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req)
  console.log(res)
  res.send('respond with a resource');
  console.log(req)
  console.log(res)
});

module.exports = router;
