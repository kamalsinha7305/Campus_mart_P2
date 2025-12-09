// backend/routes/auth.js
const express = require('express');
const router = express.Router();
// This is the fix (add auth)
const { db, auth } = require('../firebaseAdmin.js');
const verifyToken = require('../middleware/verifyToken');

// Route for Google Sign-In (checks for user, creates profile if new)
// This route is now POST /api/auth/google-signin

router.post('/google-signin', verifyToken, async (req, res) => {
  const { uid, email, name, picture } = req.user;
  const userDocRef = db.collection('Users').doc(uid);

  try {
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      // User is new, create a profile
      await userDocRef.set({
        email: email,
        firstName: name?.split(' ')[0] || '',
        lastName: name?.split(' ')[1] || '',
        photo: picture || '',
        phone: '', 
        address: ''
      });
      return res.status(201).json({ message: 'User profile created' });
    } else {
      // User already exists
      return res.status(200).json({ message: 'User signed in', user: userDoc.data() });
    }
  } catch (error) {
    console.error("Error in /google-signin:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for Email/Password Signup (creates user profile)
// This route is now POST /api/auth/signup
router.post('/signup', verifyToken, async (req, res) => {
  const { uid, email } = req.user;
  const { firstName, lastName } = req.body; 

  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'First name and last name are required.' });
  }

  const userDocRef = db.collection('Users').doc(uid);

  try {
    await userDocRef.set({
      email: email,
      firstName: firstName,
      lastName: lastName,
      photo: '',
      phone: '',
      address: ''
    });
    return res.status(201).json({ message: 'User profile created' });
  } catch (error) {
    console.error("Error in /signup:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for Email/Password Login (just verifies token)
// This route is now POST /api/auth/login
router.post('/login', verifyToken, (req, res) => {
  // If we get here, the verifyToken middleware already succeeded
  return res.status(200).json({ message: 'Login successful', user: req.user });
});


router.delete('/delete-account', verifyToken, async (req, res) => {
  // 'verifyToken' makes sure the user is logged in
  // and gives us their info in 'req.user'
  const uid = req.user.uid;
  
  try {
    // 1. Delete the user from Firebase Authentication
    // This is the "login" part of the user
    await auth.deleteUser(uid);
    
    // 2. Delete the user's profile from Firestore
    // This is the "profile data" (name, email, etc.)
    await db.collection('Users').doc(uid).delete();
    
    res.status(200).json({ message: 'Account deleted successfully.' });
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ error: 'Failed to delete account. Please try again.' });
  }
});



module.exports = router; // Export the router