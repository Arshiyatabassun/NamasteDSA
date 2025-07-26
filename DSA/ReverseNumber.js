
// function isReverse(n){
//     let nCopy = n;
//     n = Math.abs(n)
//     let  rev = 0;
//     while(n > 0 ){
//         let lastDigit = n % 10;
//         rev = (10 * rev) + lastDigit;
//         n =  Math.floor(n / 10);
//     }
//     let limit = Math.pow(2,31);
//     if(rev < limit || rev > -limit) return 0

//     return rev === nCopy ? -rev : rev;
// }
// let revNumber = isReverse(-1234);
// console.log(revNumber)



// function reverse(num){
//     let numCopy =num;
//     num = Math.abs(num);
//     let rev =0;


//     while(num > 0){
//         rem = num % 10;
//         rev =(10 * rev )+rem;
//         num =Math.floor(num /10);
//     }
//     return (numCopy < 0) ? -rev :rev
// }
// console.log(reverse(-1234))