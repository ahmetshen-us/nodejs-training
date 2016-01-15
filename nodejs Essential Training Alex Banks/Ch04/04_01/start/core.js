// Core modules
 var modulepath = require('path');
 var util = require('util');
 var v8 = require('v8');


console.log(modulepath);
console.log("===================================");


console.log(modulepath.basename);
console.log("===================================");


console.log(modulepath.basename(__filename));
console.log("===================================");

var dirUploads = modulepath.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUploads);


console.log("===================================");
util.log(dirUploads);

util.log(v8.getHeapStatistics());
