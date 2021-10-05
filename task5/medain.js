function sum(){
    var a1=[1,3,5,7]
 
    var a2=[2,4,6,8]
let sum=a1.concat(a2) 
 var sum1=sum.sort()
 if(sum1.length%2===0){
     const first=[sum1.length/2-1]
     const second=[sum1.length/2]
     console.log((first+second)/2)
 }

}
sum();
