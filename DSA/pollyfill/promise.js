
const promise = new Promise((resolve,reject)=>{
    resolve("Iam Promise")
})


promise.then((res)=>console.log(res))
promise.catch((err)=>console.log(err.message))