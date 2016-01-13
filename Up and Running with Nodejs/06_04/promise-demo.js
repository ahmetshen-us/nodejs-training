var promise = new Promise(function(resolve, reject) {
    reject();
});
// Creating a custom promise
promise.then(function() {
    console.log('then');
})
.catch(function() {
    console.error('failed');
});