


function linearSearch(arr,target){
    for(let i= 0;i <arr.length;i++){
        if(arr[i] === target){
            return i;//if target value is present then return the index of tht value
        }
    }
    return -1;//if no element present it returns -1
}

let arr =[2,3,4,6,8,9,0];
console.log(linearSearch(arr,0));
