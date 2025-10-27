
import { GoogleAuthProvider } from 'firebase/auth'
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
function SignInwithGoogle() {
 const navigate = useNavigate(); 

    async function googleLogin() {
    // const navigate = useNavigate(); // <-- ERROR: Hooks can't be called inside a function
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // --- THIS IS THE NEW PART ---
      const idToken = await user.getIdToken();

      const response = await fetch('http://localhost:5001/api/auth/google-signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Backend sign-in failed');
      }
      // --- END OF NEW PART ---

      // REMOVE all this Firestore logic:
      // const userDocRef = doc(db, 'Users', user.uid);
      // const userDoc = await getDoc(userDocRef);
      // if (!userDoc.exists()) { ... }

      toast.success("Signed in successfully");
      navigate('/profile');
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error(error.message || "Failed to sign in!");
    }
  }

    return (
        <>
            <div className=''>
                <button onClick={googleLogin} className='text-[#1e1e1e] dark:text-[#D6D6D6] text-[14px] lg:text-[16px] font-normal font-Poppins mt-[2vh]  mb-[2vh] rounded-[8px] lg:rounded-[10px] border border-black  flex justify-center items-center lg:w-[24.5vw] lg:h-[5.8vh] w-[78vw] h-[5vh] transition-all duration-300 cursor-pointer hover:bg-[#e9ecff]  hover:scale-105 dark:outline dark:outline-1 dark:outline-offset-[-0.92px] dark:outline-zinc-100  dark:hover:text-black'>
                    <svg className="lg:mr-[0.5vw] mr-[1.5vw]" width="23" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1413_81)">
                            <path d="M9.02548 0.819515C6.63092 1.65021 4.56585 3.2269 3.1336 5.31799C1.70136 7.40907 0.977425 9.90434 1.06814 12.4373C1.15886 14.9702 2.05944 17.4073 3.63761 19.3906C5.21578 21.3738 7.38834 22.7988 9.8362 23.456C11.8207 23.9681 13.8999 23.9906 15.8951 23.5216C17.7025 23.1156 19.3734 22.2472 20.7444 21.0014C22.1713 19.6652 23.207 17.9654 23.7401 16.0846C24.3197 14.0394 24.4228 11.8886 24.0416 9.79735H12.8975V14.4201H19.3514C19.2224 15.1574 18.946 15.8611 18.5387 16.4891C18.1314 17.1171 17.6016 17.6565 16.981 18.0749C16.1929 18.5962 15.3045 18.947 14.3729 19.1047C13.4385 19.2785 12.48 19.2785 11.5456 19.1047C10.5986 18.9089 9.7027 18.518 8.91501 17.957C7.64959 17.0612 6.69943 15.7887 6.20013 14.3209C5.69238 12.8257 5.69238 11.2046 6.20013 9.70935C6.55554 8.66125 7.1431 7.70696 7.91893 6.9177C8.80677 5.99791 9.93081 5.34044 11.1677 5.01743C12.4046 4.69441 13.7066 4.71833 14.9308 5.08656C15.8871 5.38013 16.7617 5.89305 17.4847 6.58443C18.2124 5.86046 18.9389 5.13462 19.6641 4.4069C20.0385 4.01559 20.4467 3.64299 20.8156 3.24231C19.7119 2.21529 18.4165 1.41615 17.0035 0.890663C14.4303 -0.0436497 11.6149 -0.0687585 9.02548 0.819515Z" fill="white" />
                            <path d="M9.02498 0.81957C11.6142 -0.0693068 14.4296 -0.044859 17.003 0.888846C18.4162 1.4179 19.7111 2.2209 20.8132 3.25173C20.4387 3.65241 20.0437 4.02688 19.6617 4.41632C18.9352 5.14154 18.2094 5.86426 17.4842 6.58448C16.7612 5.8931 15.8866 5.38018 14.9303 5.08662C13.7065 4.71709 12.4046 4.69179 11.1673 5.01349C9.9301 5.33518 8.80537 5.99144 7.91655 6.91027C7.14072 7.69952 6.55317 8.65382 6.19775 9.70192L2.31641 6.69682C3.70569 3.9418 6.11116 1.83442 9.02498 0.81957Z" fill="#E33629" />
                            <path d="M1.28685 9.67379C1.49547 8.63987 1.84182 7.63861 2.31663 6.69678L6.19798 9.70936C5.69023 11.2046 5.69023 12.8257 6.19798 14.3209C4.90482 15.3195 3.61104 16.3231 2.31663 17.3316C1.12799 14.9656 0.765468 12.2698 1.28685 9.67379Z" fill="#F8BD00" />
                            <path d="M12.8973 9.79553H24.0414C24.4226 11.8868 24.3195 14.0376 23.74 16.0828C23.2068 17.9635 22.1711 19.6634 20.7443 20.9996C19.4917 20.0222 18.2335 19.0523 16.9809 18.075C17.6019 17.6561 18.1319 17.1162 18.5392 16.4875C18.9465 15.8588 19.2227 15.1544 19.3512 14.4165H12.8973C12.8954 12.8774 12.8973 11.3365 12.8973 9.79553Z" fill="#587DBD" />
                            <path d="M2.31445 17.3316C3.60886 16.3331 4.90264 15.3295 6.1958 14.3209C6.6961 15.7892 7.64762 17.0618 8.91443 17.957C9.70457 18.5154 10.6024 18.9031 11.5507 19.0954C12.4851 19.2691 13.4435 19.2691 14.3779 19.0954C15.3096 18.9377 16.198 18.5869 16.9861 18.0656C18.2386 19.0429 19.4969 20.0128 20.7494 20.9902C19.3787 22.2366 17.7077 23.1057 15.9001 23.5122C13.905 23.9812 11.8258 23.9587 9.84123 23.4467C8.27166 23.0276 6.80557 22.2888 5.53487 21.2766C4.1899 20.2088 3.09139 18.8632 2.31445 17.3316Z" fill="#319F43" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1413_81">
                                <rect width="23.9659" height="23.9659" fill="white" transform="translate(0.675781 0.03125)" />
                            </clipPath>
                        </defs>
                    </svg>Sign in with Google </button>
            </div>

        </>
    )
}

export default SignInwithGoogle;
