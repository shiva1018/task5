
function rotate(){
    var arr=[1,3,4,5,6,8]
    let k=4;
    k=k%arr.length;
    for(i=0;i<arr.length;i++){
        if(i<k){
            console.log(arr[arr.length+i-k]+" ");
        }
        else{
            console.log((arr[i-k])+" ")
        }
    }}
    rotate();
