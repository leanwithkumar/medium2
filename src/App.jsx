import { Route, Routes } from 'react-router-dom'
import Landingpage from './Pages/Landingpage/Landingpage'
import Ourstory from './Pages/Landingpage/Ourstory'
import Membership from './Pages/Landingpage/Membership'
import Getstarted from './Pages/Landingpage/Getstarted'
import Signin from './Pages/Landingpage/Signin'
import Landingherosec from './Pages/Landingpage/Landingherosec'
import Write from './Pages/Landingpage/Write'
import Homepage from './Pages/Loginpages/Homepage'
import Protected from './utils/Provider'
import Allblogs from './Pages/Loginpages/Allblogs'
import Profilepage from './Pages/Loginpages/Profilepage'
import Publish from './Pages/Loginpages/Publish'
import Mywork from './Pages/Loginpages/Mywork'



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

 
    <Route element={<Protected/>}>
    <Route path='/medium2' element={<Homepage/>}>
   
    <Route path='allblogs' element={<Allblogs/>}/>
    <Route path='mywork' element={<Mywork/>}/>
    <Route path='profile'  element={<Profilepage/>}/>
    </Route>
    
    </Route>
    <Route path='/publish' element={<Publish/>}/>
   
      
    </Routes>

   

    </>
  )
}

export default App
