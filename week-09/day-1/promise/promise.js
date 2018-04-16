    let myFirstPromise = new Promise((fulifll, reject) => {
      setTimeout(function(){
        fulifll('FULFILLED!'); 
      }, 300);
    });
    
    myFirstPromise.then(console.log);
  