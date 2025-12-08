import { useState } from "react"

function Display1(){
    const [myName,setMyName]= useState("hello")
  
    // var name="demo"
    //  console.log("im inside the disp1",{name})

    console.log("im inside the disp1",{myName})
    //   function changeName(d){
    //     var name=d
    //      console.log("im inside the disp1",{name})
    // }
    return(
        <>
        <h1>im from dis1{myName}</h1>
<button onClick={()=>{setMyName('not demo')}}>click here!!!!</button>
</>
    )
}

export default Display1