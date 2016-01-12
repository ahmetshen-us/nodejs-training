var fs = require('fs');
var data = require('./data1.json');
// Reading from files
console.log(data)
console.log(data.name);

fs.readFile('./data1.json', 'utf-8', function(err, data) {
    console.log(data)
    console.log(data.name)
    data = JSON.parse(data);
    console.log(data.name);
    // console.log(data)
});