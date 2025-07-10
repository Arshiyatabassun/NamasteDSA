
function missingNumber(nums,n){
    // let totalSum = n * (n + 1)/2;
    // let partialSum =0;
  
    // for(let  i = 0 ;i< nums.length ; i++){
    //     partialSum =partialSum + nums[i];
    // }
    // return totalSum - partialSum;
    const expectedSum = n * (n + 1)/2;
    const actualSum =nums.reduce((acc,curr)=>acc + curr , 0);
    return expectedSum -actualSum;
}

console.log(missingNumber([1,2,4,5],5))

// console.log(missingNumber([4,0,1,2,5],5))