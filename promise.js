const p = new Promise((resolve,reject) => {

    //as a best practice pass array of object instead of simple string

    setTimeout(()=>{
            // resolve(1);
            reject(new Error('message'));
    },2000 );


});
p
  .then(result => {
    console.log("Result", result);
  })
  .catch(err => {
    console.log('Error', err.message);
  });