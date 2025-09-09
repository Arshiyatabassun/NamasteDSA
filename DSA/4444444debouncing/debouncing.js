let counter =0;
const getData =()=>{
console.log("Fetching data",counter)
}
const doSomthing = (fn,d)=>{
   let timer;
    return ()=>{
 let context =this;
 let args =arguments;
 
    clearTimeout(timer)
    timer = setTimeout(()=>{
 fn.apply(context,args)
    },d)
       
    }
}

const betterFunction =doSomthing(getData,300)