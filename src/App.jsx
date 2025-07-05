import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Loginpages/Homepage'

import Landingpage from './Pages/Landingpage/Landingpage'
import Ourstory from './Pages/Landingpage/Ourstory'
import Membership from './Pages/Landingpage/Membership'
import Getstarted from './Pages/Landingpage/Getstarted'
import Signin from './Pages/Landingpage/Signin'
import Landingherosec from './Pages/Landingpage/Landingherosec'
import Write from './Pages/Landingpage/Write'
import PrivateRoute from './Pages/Loginpages/PrivateRoute'



function App() {
  return (
    <>
    <Routes>

    <Route path='/' element={<Landingpage/>}>

    <Route index element={<Landingherosec/>}/>
    <Route path='ourstroy' element={<Ourstory />} />
    <Route path='membership' element={<Membership />} />
    <Route path='write' element={<Write/>} />
    <Route path='signin' element={<Signin />} />
    <Route path='getstarted' element={<Getstarted />} />

    </Route>
    
    
    <Route element={<PrivateRoute/>}>
    <Route path='home' element={<Homepage/>}/>
    </Route>
    
   
      
    </Routes>

   

    </>
  )
}

export default App
