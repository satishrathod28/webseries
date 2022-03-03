import React from 'react'

function Navbar({filterItem, removeData}) {
console.log(removeData);
  return (
    <>
    

    <div class="btn-group mr-2 my-5" role="group" aria-label="First group">
   {
     removeData.map((curr)=>{
        return(
          <><button onClick={()=>filterItem(`${curr}`)} className="btn btn-lg btn-primary">{curr}</button></>
        )
      })

   }
    
   
  </div>
  
    </>
  

  )
}

export default Navbar