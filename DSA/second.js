
function secondLargest(arr){
    let firstLargest =-Infinity;
    let secondLargest = -Infinity;
for(let i = 0 ; i < arr.length; i++){
 if(arr[i]> firstLargest){
        secondLargest =firstLargest;
        firstLargest =arr[i];

    }
    else if(arr[i] > secondLargest && arr[i] !== firstlarge){
         secondLargest = arr[i];
    }
}
return secondLargest;
   
}

let arr =[4,9,0,2,8,7,1];

let res = secondLargest(arr);
console.log(res)


// function secondLargest(arr){
//     let firstlarge =-Infinity;
//     let secondLarge = -Infinity;

//     if(arr.length < 2 ) return null;
//     for(let  i= 0 ;i <arr.length; i++){
//         if(arr[i] > firstlarge){
//             secondLarge=firstlarge;
//             firstlarge=arr[i]
//         }
//         else if(arr[i] > secondLarge && arr[i] !== firstlarge){
//             secondLarge =arr[i]
//         }
//     }
//     return secondLarge;
// }

// console.log(secondLargest([4,9,8,5,7,0,-9,8,8,8,9]))
// console.log(secondLargest([4,3]))