
function countDigits(n){
    // let n =0; //1
    if(n == 0) return 1;

    //converting negative numbers to positive numbers
    // let n = -5670;//4
    n=Math.abs(n);
    let count =0;
    while( n > 0){
        n =Math.floor(n/10);
        count++;
    }
    return count;

}
// let n =0; //1
// let n = -5670;//4
let n = 680125;

let countResult = countDigits(n)
console.log(countResult)