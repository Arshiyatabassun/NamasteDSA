
function isPalindrome(n){
    if( n < 0) return false;
    let rev =0;
  let nCopy= n;
    while( n > 0){
        let rem = n % 10;
        rev = (rev * 10) + rem;
         n = Math.floor(n /10);
    }
    // if(rev === nCopy) return true;
    // else return false;
    //or
     return rev === nCopy

}
let n =121;
let res = isPalindrome(n);
console.log(res)