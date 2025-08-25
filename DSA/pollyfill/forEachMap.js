


const arr =[1,2,3,4,5];
// const res =arr.forEach((el)=>console.log(el))

// function printsth(el){
//     console.log(el)
// }


// Array.prototype.myForEach = function (cb){
// for(let i =0;i<this.length;i++){
//     cb(this[i])
// }
// }

// arr.myForEach(printsth)


// map:  

const arr1 =[1,2,3,4,5];
const res1 = arr1.map((el)=>el*2)
// console.log(res1)

Array.prototype.myMap = function (cb){
    let response =[];
    for(let i = 0 ;i < this.length;i++){
    response.push(cb(this[i]))

    }
    return response;
}

const result = arr1.myMap((el) =>el * 2)
console.log(result);