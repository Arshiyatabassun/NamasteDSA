// import { useEffect,useState } from "react";

// const restro =()=>{
// const [data,setData]=useState(null)
//     // fetching data
//     const fetchData=async ()=>{
//         const data = await fetch("https://jsonplaceholder.typicode.com/todos");
//         const json =await data.json();
//         console.log(json)
//         setData(json)
//     }
//     useEffect(()=>{
// fetchData();
//     },[])

//     return (
//         <div>
//           {data.map(r=><li key ={r.id}>
//          {r.title}
//           </li>)}
//         </div>
//     )
// }

// export default restro;


import { useState } from "react";

const Chips = () => {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const HandleClick = (e) => {
    if (e.key === "Enter" && inputText !== "") {
      //logic to add the chips
      setChips((prev) => [...prev, inputText]);
      setInputText("");
    }
  };
  const HandleDelete = (index) => {
    //remove the value based on the index
    const copyChips = [...chips];
    copyChips.splice(index, 1);
    setChips(copyChips);
  };

  return (
    <>
      <div>
        <h1>Chips Input </h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => HandleClick(e)}
        />
        <div>
          {chips.map((chip, index) => (
            <span style={{ background: "gray" }}>
              {chip}
              <button style={{ color: "red" }} onClick={() => HandleDelete()}>
                X
              </button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default Chips;
