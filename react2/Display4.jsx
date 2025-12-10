import { useState } from "react"
 
const Display4=()=>{
    const[student,setStudent]=useState({
        name:"Vasanth",
        gender:"male",
        mobile:9999999999
    })
     console.log("the current state: ",student)
    function updateName(){
        // setStudent( {name:"demo"})
      setStudent((previousData)=>{
        console.log("pre data: ..............",previousData)
return({...previousData,name:"demo",mobile:8148716690})
      })
    }
    return(
 <>
     
 <h1>name:{student.name}</h1>
 <h1>gender:{student.gender}</h1>
 <h1>mobile:{student.mobile}</h1>
 <button onClick={updateName}>change name</button>
 </>
    )
       
     
}
export default Display4