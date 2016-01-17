// Readable file streams
var fs = require('fs');
// fs.readFile("./chat.log","UTF-8",function(err, chatlog){
// console.log(chatlog);
// 	console.log(`File read ${chatlog.length}`);
// });

var stream = fs.createReadStream("./chat.log", "UTF-8");
var data = "";

stream.once("data", function() {
	console.log("\n\n\n");
	console.log("Started Reading File");
	console.log("\n\n\n");
});


stream.on("data", function(chunk) {
	process.stdout.write(`  chunk: ${chunk.length} |`);
	// process.stdout.write(chunk);
	data += chunk;
  console.log(data);
});

stream.on("end", function() {
	console.log("\n\n\n");
	console.log(`Finished Reading File ${data.length}`);
	console.log("\n\n\n");
});


console.log("Reading file at end");
