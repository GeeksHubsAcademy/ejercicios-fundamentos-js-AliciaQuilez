
var promise = Promise.resolve('RESUELTO!');
promise = Promise.reject(new Error('no resulto'))

promise.catch(function (err){
  console.error('mal!');
})
