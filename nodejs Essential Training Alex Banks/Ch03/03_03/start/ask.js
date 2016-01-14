// Standard input and standard output
// process.stdout.write("Hello")
// process.stdout.write("World \n\n\n\n")
// process.stdout.write("Hello")

var questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your preferred programming language?"
];

var answers = [];

function ask(i) {
  process.stdout.write(`\n\n\n\n ${questions[i]}`);
  process.stdout.write("  >  ");
}

process.stdin.on('data', function(data) {
process.stdout.write('\n'+data);
process.stdout.write('\n'+data.toString());
process.stdout.write('\n'+data.toString().trim()+'\n');

	answers.push(data.toString().trim());

	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}

});

ask(0)
