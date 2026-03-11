

// function searchElement(arr,x){
//     for(let i =0 ;i <arr.length;i++){
//         if(arr[i] == x){
//             return i;
//         }
//     }
//     return -1;
// }
// let arr =[1,2,3,4,5];
// console.log(searchElement(arr,4))

//practice
// function searchElement(arr ,x){

//     for(let i = 0;i < arr.length;i++){
//       if(arr[i] === x)
//             {
//                 return i;
//             }
//     }
//       return -1;
 

// }
// let  arr =[1,2,4,5,9,8];
// console.log(searchElement(arr,4))

// 2.count the number of Negative numbers
// function negativeCount(arr){
//     let count =0;
//     for(let i =0;i<arr.length;i++){
//         if(arr[i] < 0){
//            count =count+1;
//         }
//     }
//     return count;

// }

// let arr =[1,-1,2,3,-4,-5,-2,-7];
// console.log(negativeCount(arr))

// 3.Largest Number in an Array

// function largestNum(arr){
//     let largest =-1;
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]> largest){
//             largest=arr[i]
//         }
//     }
//     return largest;
// }

// let res = largestNum([-1,5,7,9,22,11,4]);
// console.log(res);

// 4.//smallest number in js

// function smallestNum(arr){
//     let smallest =Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < smallest){
//             smallest =arr[i];
//         }
//     }
//     return smallest;
// }
// console.log(smallestNum([1,2,4,3,9,5,-1,0]))
 
// 5. Second Largest Program
// function secondLargest(arr){
//     let largest =-Infinity;
//     let secondLargest =-Infinity;
//     if(arr.length < 2) {
//         return null;
//     }
//     for (let i = 0; i < arr.length; i++) {
      
//         if(arr[i]> largest){
//             secondLargest =largest;
//             largest =arr[i];
//         }
//         else if(arr[i] > secondLargest && arr[i]!= largest){
//             secondLargest =arr[i];
//         }
//     }
//     return secondLargest;
// }
// // let arr =[10,3,5,8,9,2,-1,0,1];
// // let arr =[10];
// let arr =[10,2]

// let res =secondLargest(arr);
// console.log(res);
// Day-2
//count the number of digits

// function digitCount(num){
//     let count =0;
//     while(num > 0){
//         num = Math.floor(num / 10 );
//         count++;
//     }
//     return count;
// }
// console.log(digitCount(245))