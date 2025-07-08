
function maxConsecutiveOnces(nums){
let currCount = 0;
let maxCount =0;
for(let i =0;i < nums.length; i++){
    if(nums[i]=== 1){
        currCount++;
    }
    else{
        maxCount =Math.max(currCount,maxCount);//compare the currCount with maxCount n move the currCount value to maxCount
        currCount =0//update the currcount to 0
    }
}
return Math.max(currCount,maxCount)//return the maxCount
}

console.log(maxConsecutiveOnces([0,1,1,1,0,,0,0,1,1,0,0,1,1,1,1,1]))//5
