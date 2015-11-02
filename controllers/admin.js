;(function(){
'use strict'
const express = require('express');
const router = express.Router();

const adminData = {
    groups: [
        {name: 'abc', number: 1},
        {name: 'def', number: 2},
        {name: 'ghi', number: 3},
    ]
};

router.get('/', function(req, res){
    console.error('route: /, ip: %s, time: %s', req.ip, new Date().toTimeString().substr(0,9));
    res.render('admin', adminData);
});

module.exports = router;
})();