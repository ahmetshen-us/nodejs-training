var express = require('express');
var app = express();
// Serving static files with Express
app.use(express.static(__dirname));

app.listen(3000);