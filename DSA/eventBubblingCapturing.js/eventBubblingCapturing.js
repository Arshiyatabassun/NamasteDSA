//Event Bubbling
document.querySelector("#grandParent").addEventListener("click",()=>{
    console.log("Grand parent")
},false)//event bubbling(by default value is false in event bubbling)

document.querySelector("#parent").addEventListener("click",(e)=>{
    console.log("parent clicked")
    e.stopPropagation();


},false)//event bubbling


document.querySelector("#child").addEventListener("click",()=>{
    console.log("child clicked")
},false)//event bubbling

//Event Capturing
document.querySelector("#grandParent").addEventListener("click",()=>{
    console.log("Grand parent")
},true)//event Capturing

document.querySelector("#parent").addEventListener("click",(e)=>{
console.log("parent clicked")
e.stopPropagation();
},true)//event Capturing


document.querySelector("#child").addEventListener("click",()=>{
    console.log("child clicked")
},true)//event Capturing