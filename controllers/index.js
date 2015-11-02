;(function(){
'use strict'
const express = require('express');
const router = express.Router();

router.use('/create', require('./create'));
router.use('/login', require('./login'));
router.use('/admin', require('./admin'));

router.get('/', function(req, res){
    console.error('route: /, ip: %s, time: %s', req.ip, new Date().toTimeString().substr(0,9));
    res.render('index');
});

module.exports = router;
})();