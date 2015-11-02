;(function(){
'use strict'
const express = require('express');
const router = express.Router();

router.post('/', function(req, res){
    console.error('route: /login, ip: %s, time: %s', req.ip, new Date().toTimeString().substr(0,9));
    
    console.error(Object.keys(req.body));
    
    console.error('name: ', req.body.name);
    console.error('pass: ', req.body.pass);
    
    res.status(401).json('wrong user/pass');
});

module.exports = router;
})();