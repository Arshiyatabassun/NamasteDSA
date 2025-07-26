
function largestNumber(arr){
let largest =-Infinity;

for(let i = 0;i < arr.length ;i++){
    if(arr[i] > largest){
        largest=arr[i]
    }
}
return largest;
}
console.log(largestNumber([5,7,10,8,4,17,1]))
// console.log(largestNumber([1,0,4,-3,6,9,-10,-15]))
// console.log(largestNumber([-9,-19]))