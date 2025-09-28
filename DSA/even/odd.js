
// function EvenOrOdd(num){

//     if(num % 2 === 1){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(EvenOrOdd(6))

// // using Array
// function OddOrEven(){
// let arr=[10,5,7,0,8,3,80];
// for(let i =0 ;i < arr.length;i++){
//     if(arr[i] % 2 !== 0){
//         console.log(arr[i])
//     }
// }
// }
// OddOrEven();

//2.


// function elementSearch(arr1,element){

//     for(let i = 0 ;i <arr1.length;i++){
//  if(arr1[i] === element){
//     return i;
//  }
//     }
//     return -1

   
// }
//  let arr1 =[4,2,0,10,8,30]
// console.log(elementSearch(arr1,10))

//3.Negative Numbers:

// function negativeNum(arr){
//     let count =0;
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] < 0){
//            count =++count;
//         }
//     }
//     return count;
    
// }
// let arr =[2,-9,17,0,1,-10,-4,-8];
// let res = negativeNum(arr);
// console.log(res)

//4.Largest Number in an array:

// function largestNum(arr){
//     // let largest =-Infinity;
//     let largest =arr[0]; 
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > largest){
//            largest = arr[i]
//         }
       
//     }
//     return largest;
// }
// let arr =[5,7,10,8,4,17,1]
// console.log(largestNum(arr))

//5.Second Largest Number

// function secondLargest(arr){
//     let fl =-Infinity;
//     let sl=-Infinity;
//     if(arr.length < 2 ) return null;

//     for(let i =0;i <arr.length ;i++){
//         if(arr[i] > fl){
//             sl=fl;
//             fl=arr[i];
//         }
//         else if(arr[i] > sl && arr[i]!== fl){
//             sl=arr[i];
//         }
//     }
//     return sl;
// }

// let arr =[10,2,10,4,4,5];
// console.log(secondLargest(arr))

//6.Count the number of digits

// function countDigits(n){
   
//     let count =0;
//     n =Math.abs(n)
//     if( n  ===  0){
//    return 1;
//     }
//     while(n > 0){
//          n = Math.floor(n / 10);
//         count++;
//     }
//     return count;
// }

// console.log(countDigits(-123))

//7.Palindorme of a number

// function Palindrome(num){
//     if(num < 0){
//         return false;
//     }
//  let xCopy =num;
//     let rev = 0;
//      while(num > 0){
//         let rem = num % 10;//finding reminder
//         rev =(10 * rev) + rem;//finding the reverse
//         num = Math.floor(num /10); //dividing the number by 10
//      }
   
//     //  if(rev === xCopy) {
//     //     return true;
//     //  }
//     //     else{
//     //       return  false;
//     //     }

//     return rev === xCopy;
// }
// console.log(Palindrome(-221))

//8.Reverse a Number

// function revNum(num){
//     let numCopy = num;
//    num = Math.abs(num)
//     let rev =0;

//     while(num > 0){
//         let ld = num % 10;
//         console.log(ld)
//         rev =(10 * rev) + ld;
//         num =Math.floor(num / 10) ;
//         console.log(num)
//     }
//     return rev;

// }

// console.log(revNum(-123454))

//Remove the duplicates from an array

// function remvDuplicates(nums){
// let x =0;
// for(let i =0 ;i < nums.length;i++){
//     if(nums[i]> nums[x]){
//         x=x+1;
//         nums[x]=nums[i];
//     }
// }
// return x+1;
// }

// console.log(remvDuplicates([0,0,1,1,1,2,2,3,3,4,5]));

//Remove number

// function remvNum(nums,val){
//     let x =0;
//     for (let i = 0; i < nums.length; i++) {
        
//         if(nums[i] !== val){
//             nums[x]=nums[i];
//             x=x+1;

//         }
//     }
//     return x;
//     console.log(nums[i])
// }

// // console.log(remvNum([3,1,3,4,3,3,3,7],3))
// console.log(remvNum([0,1,2,2,3,0,4,2],2))

//reverse String

// function revString(arr){
// let len =arr.length;
// let  n =Math.floor(len/2)
// for(let i =0 ;i < n ;i++){
//    let temp =arr[i];
//    arr[i]=arr[len-1-i]
//    arr[len-1-i] = temp;
//     }
//     return arr;
// }
// console.log(revString(["h","e","l","l","o"]))

//Move Zeros at the last

// function moveZeros(nums){
//     let x =0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] !== 0){
//             nums[x]=nums[i];
//             x++;
//         }
//     }
//     for(let i =x ;i<nums.length;i++){
//         nums[i] = 0;
//     }
//     return nums;
// }
// let nums =[0,1,0,3,12]
// let res = moveZeros(nums);
// console.log(res)
// // console.log(moveZeros([0,1,0,3,12]))

//MaxConsecutive Onces

// function MaxConsecutive(nums){
//     let cCount =0;
//     let maxCount =0;
//     for(let i =0 ;i < nums.length;i++){
//         if(nums[i] === 1){
//             cCount++;
//         }
//         else{
//             maxCount =Math.max(cCount,maxCount);
//             cCount =0;
//         }
//     }
//     return Math.max(cCount,maxCount)
// }
// console.log(MaxConsecutive([0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1]))

// //Missing Number
// function missingNum(nums){
//     let n = nums.length;
//     let totalSum = n * (n + 1)/2
//     let partialSum = 0;
//     for(let i = 0 ;i < n; i++){
//         partialSum = partialSum + nums[i];
//     }
//     return totalSum - partialSum;
// }
// console.log(missingNum([0,2,1,4]));

// function missNum(nums,n){
//     const expectedSum =n * (n + 1)/2;

//   const actualSum = nums.reduce((acc,curr)=>acc + curr,0)
// return expectedSum - actualSum;
// }

// console.log(missNum([9,8,1,2,0,4,6,5,7],9))

//recursion 
// 1.print n , , to 1 using recursion

// function print(n){
//     if(n < 1){
//         return;
//     }
//     console.log(n)
//     n = n-1;
//     print(n)
// }
// let n = 10;

// print(n)

// function printOneTon(x){
    
// if(x > n) return;
//   console.log(x)
//     printOneTon(++x)

// }
// let  n =10;
// printOneTon(1)
