import React from 'react'
import MenuList from './MenuList'

function DataList({menu}) {
  
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            {menu.map((curr)=>{
                return(
                    <>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="tile">
                    <div className="wrapper">
                        <div className="banner-img">
                           <img src={curr.img} alt="Image 1"/> 
                        </div>
                        <div className="header">{curr.name}</div>
                        <div className="dates">
                            <div className="start">
                                <strong>RATINGS</strong> {curr.rating}
                                <span></span>
                            </div>
                            <div className="ends">
                                <strong>PLATFORM</strong> {curr.platform}
                            </div>
                        </div>

                    </div>
                </div> 
            </div>
                    </>
                )
            })}
          
        </div>
    </div>
    </>
  )
}

export default DataList