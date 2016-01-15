// Creating child process with exec
var exec = require("child_process").exec;
// exec("open http://www.ahmetshen.us");
// exec("open -a /Applications/Utilities/Terminal.app/ .");
// exec("open -a Terminal .");

exec("ls -al", function(err, stdout) {

	if (err) {
		throw err;
	}

	// console.log("Git Version Executed");

	console.log(stdout);

});

exec("git version", function(err, stdout) {

	if (err) {
		throw err;
	}

	console.log("Git Version Executed");

	console.log(stdout);

});
