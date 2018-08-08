let attachTitle = (name) => {
    return 'DR. ' + name;
}

var promise = Promise.resolve('MANHATTAN')
.then(attachTitle)
.then(console.log);