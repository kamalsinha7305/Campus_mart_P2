import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import Image4 from '../assets/upper_circle_1.png';
import Image5 from '../assets/rectangle_1.png';
import Image6 from '../assets/rectangle_2.png';
import Image7 from '../assets/Homepage.png';
import Image9 from '../assets/circle_up.png';

import { signInWithEmailAndPassword } from "firebase/auth";
import SignInwithGoogle from './signinWithGoogle';
import { toast } from "react-toastify";
import { auth } from "./firebase";
import { Eye, EyeOff } from "lucide-react";


const floatUpDown = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const slowRotate = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const fadeSlideIn = {
  initial: { opacity: 0, x: 40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
     
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
   
        const idToken = await user.getIdToken();

        await fetch('http://localhost:5001/api/auth/login', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${idToken}`,
          },
        });
      }

      console.log("User logged in Successfully");
      toast.success("User logged in Successfully", {
        position: "top-center",
      });

     
    } catch (error) {
      console.log(error.message);
      let errorMessage = 'An error occurred. Please try again.';
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        errorMessage = 'Invalid email or password.';
      } else {
        errorMessage = error.message;
      }
      toast.error(errorMessage, {
        position: 'bottom-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex overflow-hidden'>

  
      <div className='relative h-screen w-[100%] lg:w-[38%] bg-white shadow dark:bg-[#131313]'>

        <div className='flex items-center justify-center mt-[6vh]'>
          <svg className='mb-[0.5vh]' width="22" height="22" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.05 8.79119C18.05 11.3414 15.5629 13.4088 13.0126 13.4088C10.4624 13.4088 7.9752 11.3414 7.9752 8.79119C7.9752 6.24094 5.42505 3.33398 7.9753 3.33398C10.5256 3.33398 18.05 6.24094 18.05 8.79119Z" stroke="#4D4EF2" strokeWidth="1.67914" />
            <path d="M19.1842 9.63082C19.1842 12.1811 16.6971 14.2485 14.1468 14.2485C11.5965 14.2485 9.10938 12.1811 9.10938 9.63082C9.10938 7.08056 15.0807 1.23511 17.6309 1.23511C20.1812 1.23511 19.1842 7.08056 19.1842 9.63082Z" stroke="#534FF2" strokeWidth="1.67914" />
            <path d="M4.12511 10.2522C4.41527 9.14425 5.41637 8.37158 6.56164 8.37158H19.7557C20.8938 8.37158 21.8905 9.13479 22.1872 10.2335L25.5888 22.8271C26.0212 24.4279 24.8154 26.0026 23.1572 26.0026H3.26333C1.6131 26.0026 0.408693 24.4421 0.826795 22.8457L4.12511 10.2522Z" fill="#394FF1" />
          </svg>
          <span className='text-[#012436] dark:text-[#FFFFFF] text-[18px] lg:text-[1.5rem] font-poppins font-semibold ml-[0.3vw]'>
            Campus Mart
          </span>
        </div>

        <div>
          <h1 className='flex items-center justify-center mt-[3vh] lg:mt-[4vh]'>
            <span className='font-robotoflex text-black text-[18px] dark:text-[#F1F1F1] font-semibold lg:text-[1.65rem] mr-[6px]'>
              Welcome to
            </span>
            <span className='font-robotoflex font-semibold bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent lg:text-[1.65rem] text-[18px]'>
              Campus Mart
            </span>
          </h1>

          <div className="flex items-center justify-center text-[#828f9b] dark:text-[#D6D6D6] text-[13px] lg:text-[1.025rem] font-normal font-['Poppins'] mb-[3vh]">
            Enter your details to access Campus Mart.
          </div>

          <div className='w-3/4 mx-auto'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>

     
              <div className='mt-[3vh]'>
                <label htmlFor="email"></label>
                <div className="text-[#1e1e1e] dark:text-[#D6D6D6] text-[13.5px] lg:text-[16px] font-normal font-['Poppins'] lg:mb-[0.5vh]">
                  Email
                </div>
                <input
                  className='w-[77vw] h-[5.2vh] rounded-[3px] lg:w-[24.5vw] lg:h-[5.8vh] lg:rounded-[5px] font-normal lg:font-semibold border border-[#bbc2c9] pl-[4vw] dark:text-white dark:bg-[#1a1d20] lg:pl-[1.3vw] text-[12.5px] mb-[1.4vh]'
                  type='email'
                  name='email'
                  value={email}
                  placeholder='Enter your Email Address'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className='relative'>
                <div className="text-[#1e1e1e] dark:text-[#D6D6D6] text-[13.5px] lg:text-[16px] font-normal font-['Poppins'] mb-[0.5vh]">
                  Password
                </div>
                <label htmlFor="password"></label>

                <input
                  className='w-[77vw] h-[5vh] lg:w-[24.5vw] lg:h-[5.8vh] rounded-[3px] lg:rounded-[5px] font-normal lg:font-semibold border border-[#bbc2c9] pl-[4vw] lg:pl-[1.3vw] text-[12.5px] mb-[1.2vh] dark:text-white dark:bg-[#1a1d20]'
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your Password'
                  required
                />
                <button
                  type='button'
                  className="absolute top-[4.5vh] md:top-[4.7vh] lg:top-[5.5vh] right-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>

                <div className='flex justify-between items-center mt-[1vh]'>
                  <div className="text-[#848484] text-[12px] lg:text-sm lg:font-normal font-['Poppins']">
                    <input className="mr-[0.3vw]" type="checkbox" /> Remember me
                  </div>
                  <div className="text-[#2d3339] dark:text-[#BBC2C9] text-[12px] lg:text-sm font-normal font-['Poppins']">
                    Forgot Password
                  </div>
                </div>
              </div>

        
              <div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='text-white text-[14px] lg:text-[16.5px] font-medium font-poppins bg-[#1a1d20] rounded-[8px] border border-[#dbdbdb] lg:w-[24.5vw] lg:h-[5.8vh] w-[80vw] h-[5vh] mt-[2vh] mb-[2vh] transition-all duration-300 cursor-pointer hover:bg-[#0b0c0d] hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
              </div>

         
              <div className="justify-center items-center inline-flex gap-2">
                <div className="w-[7vw] h-[0px] border border-[#d6d6d6]"></div>
                <div className="text-[#64707d] dark:text-[#D6D6D6] text-[13px] lg:text-[14px] font-normal font-['Poppins']">
                  or continue with
                </div>
                <div className="w-[7vw] h-[0px] border border-[#d6d6d6]"></div>
              </div>

              <SignInwithGoogle />

              <div>
                <span className='text-[#848484] text-[13px] lg:text-[15px] font-normal font-poppins'>
                  Don't have an account?{" "}
                </span>
                <Link to={"/signup"}>
                  <span className='text-[#292929] dark:text-neutral-300 text-[13px] lg:text-[15.5px] font-normal font-poppins'>
                    Create account {'>'}
                  </span>
                </Link>
              </div>

            </form>
          </div>
        </div>

      
        <div className='lg:hidden flex justify-center items-center'>
          <img src={Image9} className="w-[89vw] h-[24vh]" alt="" />
        </div>

        <div className='flex flex-col justify-center items-center w-full absolute bottom-[2.2vh] lg:bottom-[2.9vh]'>
          <div className="text-center">
            <span className="text-zinc-500 text-[8px] lg:text-[12.5px] font-normal font-['Poppins']">
              By clicking "Create account" I acknowledge that <br />I agree to the{" "}
            </span>
            <span className="text-gray-700 dark:text-[#AAB9C5] text-[8px] lg:text-[13px] font-normal font-['Poppins']">
              Terms of Use
            </span>
            <span className="text-zinc-500 text-[8px] lg:text-[13px] font-normal font-['Poppins']">
              {" "}and{" "}
            </span>
            <span className="text-zinc-700 dark:text-[#AAB9C5] text-[8px] lg:text-[13px] font-normal font-['Poppins']">
              Privacy Policy
            </span>
            <span className="text-zinc-500 text-[11px] lg:text-sm font-normal font-['Poppins']">
              .
            </span>
          </div>
        </div>
      </div>

    
      <div className='h-screen w-[0%] lg:w-[62%] relative overflow-hidden bg-gradient-to-l from-[#364EF2] to-[#534ff2]'>

      
        <motion.div
          className="text-[#ffffd5] text-[28px] lg:text-[38px] font-extrabold font-['Figtree'] absolute top-[8%] left-[8%] lg:left-[18%]"
          variants={fadeSlideIn}
          initial="initial"
          animate="animate"
        >
          Find What You Need, <br />Sell What You Don't!
        </motion.div>

    
        <motion.div
          className='absolute top-[-19.3%] left-[-30%] scale-[62%]'
          variants={slowRotate}
          animate="animate"
        >
          <img src={Image6} alt="" />
        </motion.div>

       
        <motion.div
          className='absolute top-[3%] left-[-35%] scale-[62%]'
          animate={{ rotate: [-5, 5, -5] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <img src={Image5} alt="" />
        </motion.div>

      
        <motion.div
          className='absolute top-0 right-0 w-[11vw] h-[11vh]'
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <img src={Image4} alt="" />
        </motion.div>

       
        <motion.div
          className='absolute bottom-0 right-0 h-[73vh] w-[46vw] flex items-end justify-end'
          variants={floatUpDown}
          animate="animate"
        >
          <img className="h-full w-full" src={Image7} alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
