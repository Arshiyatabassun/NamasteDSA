
function reverseString(s){
    let len =s.length;
   let halfLen =Math.floor(len/2);
   for(let i = 0;i<halfLen;i++){
    // swapp of values
    let temp =s[i];
    s[i]=s[len-1-i];
    s[len-1-i]=temp;
   }
   return s;
//    console.log(s)
}

console.log(reverseString(["h","e","l","l","o"])) 
// reverseString(["h","e","l","l","o"])

