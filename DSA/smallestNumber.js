

function smallestNumber(arr){
let smallest = Infinity;

for(let  i= 0 ;i <arr.length ;i++){
    if(arr[i] < smallest){
        smallest = arr[i];
    }
}
return smallest;
}
console.log(smallestNumber([1,0,4,-3,6,9,-10,-15]))