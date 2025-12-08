function Display(datas){
    const myData="im a child"
   const {name,a, arr,obj,receive} =datas
    return(
         <>
        <h1>hello {name} {a}</h1>
        <h2>{arr}</h2> 
        <h2>array datas</h2>
        
         <ul>
            {
                arr.map((d,ind)=>{
                    return (
                        <li key={ind}>{d}</li>
                    )
                })
            }
         </ul>


        <h2>{obj.name} {obj.gender}</h2>
        <h2>im from display</h2>
          <button onClick={()=>{receive(myData) }}>send to parent</button>
        </>
    )
}
export default Display