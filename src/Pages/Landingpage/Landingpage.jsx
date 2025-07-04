import React from 'react'
import Landinghearder from './Landingheader'
import Footermain from '../Footer/Footermain'
import { Route, Routes } from 'react-router-dom'
import Ourstory from './Ourstory'

import Membership from './Membership'
import Write from './Write'
import Signin from './Signin'
import Landingherosec from './Landingherosec'
import Getstarted from './Getstarted'

function Landingpage() {
  return (
    <>
    <Landinghearder/>
    <Routes>
      <Route path='/' element={<Landingherosec/>}/>
      <Route path='/ourstroy' element={<Ourstory/>}/>
      <Route path='/membership' element={<Membership/>}/>
      <Route path='/write' element={<Write/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/getstarted' element={<Getstarted/>}/>
    </Routes>
    
    

    <Footermain/>
    
    </>
  )
}

export default Landingpage
