import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// PROBLEMATIC STATEMENT CAUSING PROBLEMS IN THIS CODE  import {BrowserRouter as Router,Routes,Route,Outlet, Navigate } from "react-router-dom"
import Signup from './components/Signup';
import Login from './components/Login';
// PROBLEMATIC IN THIS PART ALSO import Home from './components/Home';
//import RefrshHandler from './RefrshHandler';
import "react-toastify/dist/ReactToastify.css";
import Profile from './pages/Profile';
import New_profile from './pages/New_profile';
import Termscondition from './pages/Termscondition';
import Notification from './pages/Notification';
import Myorders from './pages/Myorders';
import { useEffect } from "react";
import { auth } from "./components/firebase";
import { ToastContainer } from "react-toastify";
import Loader from './components/Loder';
import ProductListed from './pages/ProductListed';
function App() {

  /*  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
   const PrivateRoute = ({ element }) => {
     return isAuthenticated ? element : <Navigate to="/login" />
   }
  */
  const [user, setUser] = useState();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  
    return () => unsubscribe(); // Cleanup to prevent memory leaks
  }, []);
  return (
    <>

      <BrowserRouter>
        <div className='App'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Routes>
                <Route
                  path="/"
                  element={
                    user === undefined ? (
                       <Loader/> // Show a loader while checking auth state
                    ) : user ? (
                      <Navigate to="/profile" />
                    ) : (
                      <Login />
                    )
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/termscondition" element={<Termscondition />} />
                <Route path="/myorders" element={<Myorders />} />
                <Route path="/new_profile" element={<New_profile />} />
                <Route path="/productlisted" element={<ProductListed/>}/>

              </Routes>
              <ToastContainer />
            </div>
          </div>
        </div>
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
