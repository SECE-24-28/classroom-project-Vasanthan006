function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject()
  })
  }
   

 display().then((data)=>{ console.log("done!....................",data)})   
  .catch(()=>{console.log("not done")} )