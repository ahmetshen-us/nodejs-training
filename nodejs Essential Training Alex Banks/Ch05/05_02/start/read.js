var fs = require("fs");
// var contents = fs.readFileSync('./lib/sayings.md',"UTF-8")
// var contents = fs.readFileSync('./lib/sayings.md')
// console.log(contents);

// fs.readFile('./lib/sayings.md', "UTF-8", function(err, contents) {
//
//   console.log(contents);
//
// });
var path = require("path");

fs.readdir("./lib", function(err, files) {

	files.forEach(function(fileName) {
		var file = path.join(__dirname, "lib", fileName);
    console.log(file);

		var stats = fs.statSync(file);
    console.log(stats);
    
		if(stats.isFile() && fileName !== ".DS_Store") {

			fs.readFile(file, "UTF-8", function(err, contents) {

				console.log(contents);

			});

		}
	});

});
