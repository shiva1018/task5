var numArray = [7,8,10,11,30,36]
 numArray = numArray.filter((number) => { 
     for (var i = 2; i <= Math.sqrt(number); i++)
      { if (number % i === 0) 
        return false; } 
        return true; });
         console.log(numArray); 