// src/components/Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import Image4 from '../assets/upper_circle_1.png';
import Image5 from '../assets/rectangle_1.png';
import Image6 from '../assets/rectangle_2.png';
import Image7 from '../assets/Homepage.png';

import { auth } from "./firebase";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
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

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
 
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
       
        const idToken = await user.getIdToken();

     
        const response = await fetch('http://localhost:5001/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            firstName: fname,
            lastName: lname,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Backend signup failed');
        }
      }

      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });

      
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex overflow-hidden'>

   
      <div className='relative h-screen w-[100%] lg:w-[38%] bg-white shadow dark:bg-[#131313]'>

  
        <div className='flex items-center justify-center mt-[6vh]'>
          <svg width="22" height="22" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <span className='font-robotoflex text-black font-semibold text-[18px] lg:text-[1.5rem] mr-[6px] dark:text-[#F1F1F1]'>
              Create
            </span>
            <span className='font-robotoflex font-semibold bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent text-[18px] lg:text-[1.5rem] mr-[6px]'>
              Campus Mart
            </span>
            <span className='font-robotoflex text-black font-semibold lg:text-[1.65rem] text-[18px] mr-[6px] dark:text-[#F1F1F1]'>
              Account
            </span>
          </h1>

          <div className="flex items-center justify-center text-[#828f9b] dark:text-[#D6D6D6] text-[13px] lg:text-[1.025rem] font-normal font-['Poppins'] mb-[3vh]">
            Enter your details to access Campus Mart.
          </div>

          <div className='w-3/4 mx-auto'>
            <form className='flex flex-col items-center justify-center' onSubmit={handleRegister}>

             
              <div className='mt-[3vh]'>
                <div className="text-[#1e1e1e] dark:text-[#D6D6D6] text-[13.5px] lg:text-[16px] font-normal font-['Poppins'] lg:mb-[0.3vh]">
                  First Name
                </div>
                <input
                  className='form-control w-[77vw] h-[5.2vh] rounded-[3px] lg:w-[24.5vw] lg:h-[5.8vh] lg:rounded-[5px] font-normal lg:font-semibold border border-[#bbc2c9] mb-[1.2vh] pl-[4vw] lg:pl-[1.3vw] text-[13px] dark:text-white dark:bg-[#1a1d20]'
                  type='text'
                  placeholder='First Name'
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </div>

             
              <div>
                <div className="text-[#1e1e1e] dark:text-[#D6D6D6] text-[13.5px] lg:text-[16px] font-normal font-['Poppins'] lg:mb-[0.3vh]">
                  Last Name
                </div>
                <input
                  className='form-control w-[77vw] h-[5.2vh] rounded-[3px] lg:w-[24.5vw] lg:h-[5.8vh] lg:rounded-[5px] font-normal lg:font-semibold border border-[#bbc2c9] mb-[1.2vh] pl-[4vw] lg:pl-[1.3vw] text-[12.5px] dark:text-white dark:bg-[#1a1d20]'
                  type='text'
                  placeholder='Last Name'
                  onChange={(e) => setLname(e.target.value)}
                  required
                />
              </div>

              <div>
                <div className="text-[#1e1e1e] dark:text-[#D6D6D6] text-[13.5px] lg:text-[16px] font-normal font-['Poppins'] mb-[0.3vh]">
                  Email
                </div>
                <input
                  className='form-control w-[77vw] h-[5.2vh] rounded-[3px] lg:w-[24.5vw] lg:h-[5.8vh] lg:rounded-[5px] font-normal lg:font-semibold border border-[#bbc2c9] mb-[1.2vh] pl-[4vw] lg:pl-[1.3vw] text-[12.5px] dark:text-white dark:bg-[#1a1d20]'
                  type='email'
                  placeholder='Enter your Email Address'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              
              <div className='relative'>
                <div className="text-[#1e1e1e] dark:text-[#D6D6D6] text-[13.5px] lg:text-[16px] font-normal font-['Poppins'] lg:mb-[0.3vh]">
                  Password
                </div>
                <input
                  className='form-control w-[77vw] h-[5.2vh] rounded-[3px] lg:w-[24.5vw] lg:h-[5.8vh] lg:rounded-[5px] font-normal lg:font-semibold border border-[#bbc2c9] mb-[1.2vh] pl-[4vw] lg:pl-[1.3vw] text-[12.5px] dark:text-white dark:bg-[#1a1d20]'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Create your Password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type='button'
                  className="absolute top-[50%] right-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

          
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className='text-white text-[14px] lg:text-[16.5px] font-medium font-poppins bg-[#1a1d20] rounded-[8px] border border-[#dbdbdb] w-[80vw] h-[5vh] lg:w-[24.5vw] lg:h-[5.8vh] mt-[2vh] mb-[2vh] transition-all duration-300 cursor-pointer hover:bg-[#0b0c0d] hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? "Creating..." : "Create account"}
                </button>
              </div>

            
              <div>
                <span className='text-[#848484] text-[13px] lg:text-[15px] font-normal font-poppins'>
                  Already have an account?{" "}
                </span>
                <Link to={"/"}>
                  <span className='text-[#292929] dark:text-neutral-300 text-[13px] lg:text-[15.5px] font-normal font-poppins'>
                    Login {'>'}
                  </span>
                </Link>
              </div>
            </form>
          </div>
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
            <span className="text-zinc-500 text-[8px] lg:text-sm font-normal font-['Poppins']">
              .
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL – ANIMATED HERO */}
      <div className='h-screen w-[0%] lg:w-[62%] relative overflow-hidden bg-gradient-to-l from-[#364EF2] to-[#534FF2]'>

        {/* Heading – fade & slide in */}
        <motion.div
          className="text-[#ffffd5] text-[28px] lg:text-[38px] font-extrabold font-['Figtree'] absolute top-[8%] left-[8%] lg:left-[18%]"
          variants={fadeSlideIn}
          initial="initial"
          animate="animate"
        >
          Find What You Need, <br />Sell What You Don't!
        </motion.div>

        {/* Big background rectangle – slow rotation */}
        <motion.div
          className='absolute top-[-19.3%] left-[-30%] scale-[62%]'
          variants={slowRotate}
          animate="animate"
        >
          <img src={Image6} alt="" />
        </motion.div>

        {/* Second rectangle – subtle tilt */}
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

        {/* Top-right circle – float */}
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

        {/* Main homepage mockup – floatUpDown */}
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

export default Signup;
