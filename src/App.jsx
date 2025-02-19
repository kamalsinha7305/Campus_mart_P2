import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// PROBLEMATIC STATEMENT CAUSING PROBLEMS IN THIS CODE  import {BrowserRouter as Router,Routes,Route,Outlet, Navigate } from "react-router-dom"
 import Signup from './components/Signup';
import Login from './components/Login';
// PROBLEMATIC IN THIS PART ALSO import Home from './components/Home';
//import RefrshHandler from './RefrshHandler';

import Profile from './pages/Profile';
import New_profile from './pages/New_profile';
import Termscondition from './pages/Termscondition';
import Notification from './pages/Notification';
import Myorders from './pages/Myorders';
function App() {

 /*  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }
 */
  

  return (
    <>
     
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/termscondition" element={<Termscondition />} />
      <Route path="/myorders" element={<Myorders />} />
      <Route path="/new_profile" element={<New_profile/>}/>
     </Routes>
     </BrowserRouter>



   {/*   <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </div> */}
     
     
    {/*    <div className='App'>
        <Routes>
          <Route path='/' element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
       
      </div> 
 */}
     
    </>
  )
}


export default App
