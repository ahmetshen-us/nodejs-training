var fs = require('fs');
// tomString = {name:'Tom'};
tomString = '{"name":"Tom"}';
fs.writeFile('tom.json',tomString);


var timmy = {
  name : "timmy"
}
fs.writeFile('timmy.json',JSON.stringify(timmy));
