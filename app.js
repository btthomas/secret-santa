;(function(){
'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || process.argv[2] || 80;
//const dbUri = 'mongodb://localhost:27017/NEMS_DV';

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(require('./controllers'))

app.listen(port, function() {
  console.log('Listening on port %d...', port)
})

})();