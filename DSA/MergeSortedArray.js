let arr1=[1,2,3];
let arr2 =[2,5,6];
function mergeSort(arr1,arr2){
    let arr3=arr1.concat(arr2);
    arr3.sort((a,b)=> a - b)
    return arr3;

}

let merge = mergeSort(arr1,arr2)
console.log(merge)
// console.log(merge.join(" "))