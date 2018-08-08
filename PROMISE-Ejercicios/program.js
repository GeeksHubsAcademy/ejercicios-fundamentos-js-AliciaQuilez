function parsePromised(json) {
    try{
       var promise = Promise.resolve(JSON.parse(json))
    }catch(e){
       var promise = Promise.reject(e);
    }
    return promise;
  }
  
  function onReject(error) {
    console.log(error.message);
  }
  
  parsePromised(process.argv[2])
  .then(null, onReject);