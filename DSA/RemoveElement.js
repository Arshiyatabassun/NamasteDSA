
function removeElements(nums,val){
    let x = 0;//x is pointing to 0th index

    for(let i = 0;i <nums.length;i++){
        if(nums[i] !== val){//shift the elements to left if it is not equal to val
            nums[x]=nums[i];
            x++;
        }
    }
    return x;

}

// let nums=[3,1,3,4,3,3,3,7];
// let val =3;

let result = removeElements([3,1,3,4,3,3,3,7],3);
console.log(result)