
function isReverse(n){
    let nCopy = n;
    n = Math.abs(n)
    let  rev = 0;
    while(n > 0 ){
        let lastDigit = n % 10;
        rev = (10 * rev) + lastDigit;
        n =  Math.floor(n / 10);
    }
    let limit = Math.pow(2,31);
    if(rev < limit || rev > -limit) return 0

    return rev === nCopy ? -rev : rev;
}
let revNumber = isReverse(-1234);
console.log(revNumber)