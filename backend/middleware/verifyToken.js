// backend/middleware/verifyToken.js
const { auth } = require('../firebaseAdmin');

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send('Unauthorized: No token provided');
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    req.user = decodedToken; // Add decoded user info to the request object
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).send('Unauthorized: Invalid token');
  }
};

module.exports = verifyToken;