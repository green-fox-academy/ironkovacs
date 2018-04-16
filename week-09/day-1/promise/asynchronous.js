promise = new Promise(function (fulfill, reject) {
  fulfill('PROMISE VALUE'),
    reject(new Error('I DID NOT FIRE'));
});

promise.then(console.log);

console.log('MAIN PROGRAM');
