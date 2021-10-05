let arr=[13,45,67,43,2,8]
let prime=arr.filter((n) => {
    for( var i=0;i<=arr.length;i++ ){
if(n%2 === 0)return false;
    }
    return true;
});
console.log(prime)