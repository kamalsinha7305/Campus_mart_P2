import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './pages/Profile';
import Termscondition from './pages/Termscondition';
import Notification from './pages/Notification';
import Myorders from './pages/Myorders';
import Wishlist from './pages/Wishlist';
import ProductListed from './pages/ProductListed';
import ContactUs from './pages/ContactUs';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { auth } from "./components/firebase";
import Loader from './components/Loder';

function App() {
  // undefined = still checking, null = not logged in, object = logged in
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser || null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              {/* ROOT: if logged in -> profile, else -> login */}
              <Route
                path="/"
                element={
                  user ? <Navigate to="/profile" /> : <Login />
                }
              />

              {/* LOGIN: redirect to profile if already logged in */}
              <Route
                path="/login"
                element={
                  user ? <Navigate to="/profile" /> : <Login />
                }
              />

              {/* SIGNUP: redirect to profile if already logged in */}
              <Route
                path="/signup"
                element={
                  user ? <Navigate to="/profile" /> : <Signup />
                }
              />

              {/* PROTECTED ROUTES */}
              <Route
                path="/profile"
                element={
                  user ? <Profile /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/notification"
                element={
                  user ? <Notification /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/myorders"
                element={
                  user ? <Myorders /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/wishlist"
                element={
                  user ? <Wishlist /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/productlisted"
                element={
                  user ? <ProductListed /> : <Navigate to="/login" />
                }
              />

              {/* PUBLIC PAGES */}
              <Route
                path="/termscondition"
                element={<Termscondition />}
              />
              <Route
                path="/contact"
                element={<ContactUs />}
              />
            </Routes>

            <ToastContainer />
          </div>
        </div>

        {/* 🔹 ONLY show this while auth is initializing */}
        {user === undefined && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
            <Loader />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
