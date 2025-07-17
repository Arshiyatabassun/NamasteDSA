//print the SUM OF FIRST N numbers using RECURRSION
function sum(n){
    if( n == 0) return 0;//base case
    return n + sum(n-1);
}
 console.log(sum(5))//15

 //find the summ of all the elements in an array using recurrsion

//  let arr = [5,3,2,0,1]
//  function findSum(n){
//     if( n == 0) return arr[n];
//     return arr[n]  + findSum(n-1)

//  }
//  console.log(findSum(arr.length-1))

//find the sum off all the odd numbers in an array using recurrsion

let arr=[5,3,2,0,1];
function sumOfOdd(n){
    let isOdd =((arr[n]%2 === 1))
    if(n == 0) return isOdd?arr[n]:0;

}




const functional =(props)=>{ 
                                
    return (<>
    <div>
        <h1>Name:Arshiya</h1>
        <h1>location:Bengaluru</h1>
    </div>
    </>)
}

export default functional;



class UserClass extends React.Component{
    render(){
        return(<></>)
    }
}