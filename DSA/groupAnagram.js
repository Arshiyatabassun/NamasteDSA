

function groupAnagram(strs){
let map ={}
for(let i =0 ;i <strs.length;i++){
    let sotrtedStr = strs[i].split("").sort().join("");//sort the strings
    if(!map[sotrtedStr]){//if the sortedstring is not thr in the map.
        map[sotrtedStr]//creating aet in the map then
        map[sotrtedStr]=[strs[i]];//add the original string(eat)
        //ex:[aet:[eat]]
    }
    else{
    map[sotrtedStr].push(strs[i])//if the value already exists then push
    }
}

return [...Object.values(map)]
}
console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))