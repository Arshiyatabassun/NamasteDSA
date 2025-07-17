
function factNum(n){
    if( n == 1) return 1;
    return n * factNum(n-1);
}
console.log(factNum(5))//120