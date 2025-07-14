

function print(n){
    if(n < 1) return ;
    console.log(n);
    print(--n)//n=n-1
              //print(n)
}
n= 10;
print(n)