import React, { useState } from 'react'
import DataList from './DataList'
import Navbar from './Navbar'
import MenuList from './MenuList'
import '../css/index.css'



  const removeData = [...new Set(MenuList.map((curr)=>{
      return curr.category
      })),"All"]

function Restaurant() {
    const [menu, setMenu ] = useState(MenuList);
    const [nav, setNav ] = useState(removeData);
  
    const filterItem = (category) =>{
      if(category === "All"){
        setMenu(MenuList)
        return
      }
     const filterData =  MenuList.filter((curr)=>{
        return curr.category === category
      })
         setMenu(filterData);
    }

 
  return (
    <>
      <Navbar filterItem={filterItem} removeData = {removeData}/>
      <DataList menu = {menu}/>
    </> 
  
    
  )
}

export default Restaurant