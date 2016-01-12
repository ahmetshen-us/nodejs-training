var fs = require('fs');
// Accessing directories
fs.readdir('/', function(err, data) {
    console.log(data);
});