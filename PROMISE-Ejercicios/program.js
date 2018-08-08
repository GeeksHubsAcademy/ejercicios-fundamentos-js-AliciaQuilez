var promise = first();

var promise2 = promise.then(second);

promise2.then(console.log);
