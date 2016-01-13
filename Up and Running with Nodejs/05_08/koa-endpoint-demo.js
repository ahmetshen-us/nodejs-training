var koa = require('koa');
var app = koa();
// Creating an endpoint with Koa

app.use(function* () {
    this.body = 'Hello World';
});

app.listen(3000);