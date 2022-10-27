var express = require('express');
const DatabaseManager = require("../monitoring/DatabaseManager");
var router = express.Router();
/* GET users listing. */
router.post("/", function(req, res, next) {
  if(req.body.name !=undefined && req.body.phone !=undefined)
  DatabaseManager.addUser(req.body.name, req.body.phone );
    res.redirect('/diet');
  });
module.exports = router;