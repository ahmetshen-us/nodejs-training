// The global object

var hello = "Hello from Node js"
var slice = hello.slice(11) 
console.log(hello)
console.log(`Ahmet ${slice}`)
console.log(__dirname)
console.log(__filename)

var path = require("path");

console.log(`Rock on World from ${path.basename(__filename)}`);
console.log(path)
