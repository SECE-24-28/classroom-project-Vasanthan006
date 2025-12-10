import { useEffect, useState } from "react"


const Display3=()=>{
    const [data,setData]=useState(100)
    useEffect(()=>
    console.log("Hello",{data})
    )

return(
    <>
        <h1>im from display3</h1>
        <h1>{data}</h1>
        <button onClick={()=>{setData(data+2)}}>Click me</button>
    </>
)
}
export default Display3;