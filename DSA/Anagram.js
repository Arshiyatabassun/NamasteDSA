
// function isAnagram(s,t){
// return s.split("").sort().join("") === t.split("").sort().join("")
// }
// console.log(isAnagram("anagram" ,"nagaram")) //true
// console.log(isAnagram("listen" ,"silent")) //true
// console.log(isAnagram("listen" ,"lent")) //false

//using map
function isAnagram(s,t){
    // let map =new Map() or
    //creating a map

    if(s.length !== t.length) return;
    let map ={};
    for(let i =0 ;i <s.length ;i++){//looping all the elemnts throgh the string
        if(!map[s[i]]){ //if value is not present in map initialy map is empty
           map[s[i]] =1;//put 1 to the map
        }
        else {
            ++map[s[i]];//key is present increase
        }

    }

//decreasing the characters one by one
    for(let i = 0 ; i  < t.length ;i++){
        if(!map[t[i]] || map[t[i]] < 0){ //if map of t is not exists
            return false
        }
        else {
            --map[t[i]];//decreasing the count
       
        }
      
    }
  return true;
}
console.log(isAnagram('listen','silent'))