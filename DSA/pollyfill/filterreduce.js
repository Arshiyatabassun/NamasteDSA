
// const arr = [1,2,4,3,5,8,6];
// const res =arr.filter((el)=>el < 5)
// console.log(res)

Array.prototype.myFilter =function (cb){
    let resp = [];
    for(let  i= 0;i<this.length;i++){
        if(cb(this[i])){
            resp.push(this[i])
        }
    }
    return resp;
}
// const res = arr.myFilter((el)=>el < 5)
// console.log(res)

//reduce

const arr =[1,2,4,3,5,8,6];
// const res = arr.reduce((acc,curr)=>{
// return acc+curr;
// },0)
// console.log(res)

Array.prototype.myReduce =function (cb,initialValue){
    let acc = initialValue;
let response =[];
for(let i =0 ; i<this.length;i++){
acc = acc ? cb(acc,this[i]) : this[i];
}
return acc;

}

const res =arr.myReduce((acc,curr)=>{
    return acc+curr
},0)
console.log(res)

