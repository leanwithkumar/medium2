import React from 'react'
import Headermain from '../Header/Headermain'
import { Outlet } from 'react-router-dom'

function Homepage() {
 
  return (
    <>
    <Headermain/>
    <div className='md:ml-30 md:mr-100 my-10 border-l-2 border-r-2'>
     <div className='px-10'>

      <Outlet/>
     
     </div>
      

    </div>
    
    </>
  )
}

export default Homepage
