# Campus Mart 🛒

Campus Mart is a web application designed to create an online marketplace specifically for university/college students. It allows students to easily buy and sell items within their campus community using a secure and user-friendly interface.

## Features ✨

* **User Authentication:**
    * Sign up with Email/Password.
    * Log in with Email/Password.
    * Sign in/Sign up with Google.
* **User Profile Management:**
    * View personal information (Name, Email, Phone, Gender, Address).
    * Update campus address.
    * Verify and update phone number via OTP.
    * View profile statistics (Products Listed, Orders, Rating - *Placeholders*).
    * *(Placeholder for Profile Photo Upload)*
* **Security:**
    * Change password securely (requires old password verification).
    * Logout functionality.
    * Secure account deletion (requires user verification via token, deletes Auth & Firestore data).
* **Marketplace Features:** *(Add details as you build these)*
    * *(Placeholder) List products for sale.*
    * *(Placeholder) Browse listed products.*
    * *(Placeholder) Manage orders.*

## Tech Stack 🛠️

* **Frontend:**
    * [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
    * [Firebase Client SDK](https://firebase.google.com/docs/web/setup) (Authentication, Firestore, Storage)
    * [Tailwind CSS](https://tailwindcss.com/) for styling
    * [Radix UI](https://www.radix-ui.com/) (specifically `@radix-ui/react-alert-dialog`, `@radix-ui/react-dialog`) for accessible UI components
    * [Framer Motion](https://www.framer.com/motion/) for animations
    * [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications
    * [Lucide React](https://lucide.dev/) for icons
* **Backend:**
    * [Node.js](https://nodejs.org/)
    * [Express](https://expressjs.com/)
    * [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) (Authentication, Firestore)
    * [CORS](https://www.npmjs.com/package/cors) for handling cross-origin requests
    * [Dotenv](https://www.npmjs.com/package/dotenv) for environment variables
* **Database & Auth Provider:**
    * [Firebase Authentication](https://firebase.google.com/docs/auth)
    * [Cloud Firestore](https://firebase.google.com/docs/firestore) (NoSQL Database)
    * [Firebase Storage](https://firebase.google.com/docs/storage) *(Optional, for product/profile images)*

## Prerequisites 📋

* [Node.js](https://nodejs.org/) (v18.x or later recommended, you are using v20.x)
* [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)
* A [Firebase Project](https://console.firebase.google.com/)

## Firebase Setup 🔥

1.  **Create a Firebase Project:** Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  **Enable Services:**
    * Go to **Authentication** -> **Sign-in method** tab and enable **Email/Password** and **Google** providers.
    * Go to **Firestore Database** -> **Create database**. Start in **Production mode** (this sets secure default rules). Choose your nearest location.
    * *(Optional)* Go to **Storage** -> **Get Started**. Follow the setup steps if you plan to store images.
3.  **Get Frontend Configuration:**
    * In your Firebase project, go to **Project settings** (Gear icon ⚙️) -> **General** tab.
    * Scroll down to "Your apps". Click the **Web icon** (`</>`).
    * Register your app (give it a name like "Campus Mart Web").
    * You'll be given a `firebaseConfig` object. **Copy this object.**
4.  **Get Backend Service Account Key:**
    * Go to **Project settings** -> **Service accounts** tab.
    * Click **"Generate new private key"**.
    * Confirm by clicking **"Generate key"**. A JSON file will download.
    * **Rename** this downloaded file to `serviceAccountKey.json`.
    * **SECURITY WARNING:** This file contains administrative credentials. **Never commit it to Git.** Add it to your `.gitignore` file immediately.

## Setup & Installation ⚙️

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-project-folder>
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    ```
    * Place the `serviceAccountKey.json` file (downloaded from Firebase Setup Step 4) into this `backend` directory.
    * Create a `.env` file in the `backend` directory and add the port:
        ```env
        # backend/.env
        PORT=5001
        ```
    * Install backend dependencies:
        ```bash
        npm install
        ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    # Or 'cd frontend' if you are in the root directory
    ```
    * Open the file `src/components/firebase.jsx`.
    * Replace the placeholder `firebaseConfig` object with the one you copied during Firebase Setup Step 3.
    * Install frontend dependencies:
        ```bash
        npm install
        ```

4.  **Git Ignore:** Ensure your root `.gitignore` file includes:
    ```gitignore
    # Firebase Admin SDK credentials
    backend/serviceAccountKey.json

    # Environment files
    frontend/.env*
    backend/.env*

    # Node modules
    node_modules/
    frontend/node_modules/
    backend/node_modules/

    # Build files
    frontend/dist/
    # etc.
    ```

## Running the Application 🚀

You need to run both the frontend and backend servers simultaneously.

1.  **Start the Backend Server:**
    * Open a terminal in the `backend` directory.
    * Run:
        ```bash
        npm run dev
        # Or if you don't have a dev script using nodemon:
        # node server.js
        ```
    * The backend should start, typically on `http://localhost:5001`.

2.  **Start the Frontend Server:**
    * Open a *separate* terminal in the `frontend` directory.
    * Run:
        ```bash
        npm run dev
        ```
    * The frontend development server (Vite) should start, typically on `http://localhost:5173`.

3.  **Open the App:** Open your web browser and navigate to `http://localhost:5173`.

## Folder Structure (Simplified) 📂