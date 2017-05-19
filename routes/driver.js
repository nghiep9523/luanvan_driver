var express = require('express');
var router = express.Router();
var driver = require('../models/driver');

router.post('/login', function(req, res) {
  	driver.login(req.body, res);
});

router.post('/register', function(req, res) {
 	driver.register(req.body, res);
});

router.get('/coordInfo', function(req, res) {
 	driver.getCoordInfo(res);
});

router.post('/updateStatus', function(req, res) {
 	driver.updateDriverStatus(req.body, res);
});

router.post('/info', function(req, res) {
 	driver.getDriverInfo(req.body, res);
});

router.post('/updateCoord', function(req,res) {
	driver.updateDriverCoord(req.body, res);
});
module.exports = router;