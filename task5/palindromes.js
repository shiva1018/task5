 let palindromes = function (arr)
  {   let arr1 = []; 
      for (let i in arr) {       
             if (arr[i].split("").reverse().join("") === arr[i].split("").join("")) 
             {       arr1.push(arr[i]);     }   }    return arr1; }; 
             console.log(palindromes(["palap", "malam", "lavish", "nayan", "aya"]));
