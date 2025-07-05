import React from 'react'
import Landinghearder from './Landingheader'
import Footermain from '../Footer/Footermain'
import { Outlet, Route, Routes } from 'react-router-dom'


function Landingpage() {
  return (
    <>
    <Landinghearder/>
    <Outlet/>
    <Footermain/>
    
    </>
  )
}

export default Landingpage
