
function moveZeroes(arr){
    let x =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            arr[x]=arr[i];
            x++;
        }
    }
        //fill all the remaining elements to zero
        for(let i = x ;i<arr.length;i++){
            arr[i] = 0;
        }
    return arr;
}
let arr=[0,1,0,3,12]
let res =moveZeroes(arr);
console.log(res)
