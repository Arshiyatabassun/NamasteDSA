


function linearSearch(arr,target){
    for(let i= 0;i <arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

let arr =[2,3,4,6,8,9,0];
console.log(linearSearch(arr,0));
