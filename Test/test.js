var primeTester = function (n) {
  //TO DO: Implement me! 
  
  if (n === 1) return false;
  
  if (n === 2) return true;
  
  for(var i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
      if (n % 1 === 0) {
          return false
      }
  }
  
  return true;
}

var primeSieve = function () {
 /* UNCOMMENT FOR EXTRA CREDIT & WRITE YOUR CODE HERE*/
};

if (n === 1) return false;
   
    if (n === 2) return true;
    
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;