//print the SUM OF FIRST N numbers using RECURRSION
function sum(n){
    if( n == 0) return 0;//base case
    return n + sum(n-1);
}
 console.log(sum(5))//15

 //find the summ of all the elements in an array using recurrsion

 let arr = [5,3,2,0,1]
 function findSum(n){
    if( n == 0) return arr[n];
    return arr[n]  + findSum(n-1)

 }
 console.log(findSum(arr.length-1))