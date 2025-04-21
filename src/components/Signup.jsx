import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Image2 from '../assets/mart.png'
import Image3 from '../assets/circle_new.png'
import Image4 from '../assets/upper_circle_1.png'
import Image5 from '../assets/rectangle_1.png'
import Image6 from '../assets/rectangle_2.png'
import Image7 from '../assets/Homepage.png'
import { auth, db } from "./firebase";
import { toast } from "react-toastify"
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
function Signup() {

  /* 
  
    const [signupInfo, setSignupInfo] = useState({
      name: '',
      email: '',
      password: ''
  })
  
  const navigate = useNavigate();
  const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
      const copySignupInfo = { ...signupInfo };
      copySignupInfo[name] = value;
      setSignupInfo(copySignupInfo);
  }
  
  const handleSignup = async (e) => {
      e.preventDefault();
      const { name, email, password } = signupInfo;
      if (!name || !email || !password) {
          return handleError('name, email and password are required')
      }
      try {
          const url = `https://deploy-mern-app-1-api.vercel.app/auth/signup`;
          const response = await fetch(url, {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(signupInfo)
          });
          const result = await response.json();
          const { success, message, error } = result;
          if (success) {
              handleSuccess(message);
              setTimeout(() => {
                  navigate('/login')
              }, 1000)
          } else if (error) {
              const details = error?.details[0].message;
              handleError(details);
          } else if (!success) {
              handleError(message);
          }
          console.log(result);
      } catch (err) {
          handleError(err);
      }
  }
  
  
   */



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
          phone:"",
        
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      navigate('/profile');

    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };



  return (
    <div className='flex overflow-hidden'>

      <div className=' relative h-screen w-[100%] lg:w-[38%] bg-white shadow '>


        <div className='flex items-center justify-center  mt-[6vh] '> <svg width="22" height="22" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.05 8.79119C18.05 11.3414 15.5629 13.4088 13.0126 13.4088C10.4624 13.4088 7.9752 11.3414 7.9752 8.79119C7.9752 6.24094 5.42505 3.33398 7.9753 3.33398C10.5256 3.33398 18.05 6.24094 18.05 8.79119Z" stroke="#4D4EF2" stroke-width="1.67914" />
          <path d="M19.1842 9.63082C19.1842 12.1811 16.6971 14.2485 14.1468 14.2485C11.5965 14.2485 9.10938 12.1811 9.10938 9.63082C9.10938 7.08056 15.0807 1.23511 17.6309 1.23511C20.1812 1.23511 19.1842 7.08056 19.1842 9.63082Z" stroke="#534FF2" stroke-width="1.67914" />
          <path d="M4.12511 10.2522C4.41527 9.14425 5.41637 8.37158 6.56164 8.37158H19.7557C20.8938 8.37158 21.8905 9.13479 22.1872 10.2335L25.5888 22.8271C26.0212 24.4279 24.8154 26.0026 23.1572 26.0026H3.26333C1.6131 26.0026 0.408693 24.4421 0.826795 22.8457L4.12511 10.2522Z" fill="#394FF1" />
        </svg>
          <span className='text-[#012436] text-[18px] lg:text-[1.5rem] font-poppins font-semibold ml-[0.3vw] ' >Campus Mart</span>
        </div>
        <div className=''>

          <h1 className=' flex items-center justify-center mt-[3vh] lg:mt-[4vh]'> <span className='font-robotoflex text-black font-semibold text-[18px] lg:text-[1.5rem] mr-[6px]'>Create</span> <span className='font-robotoflex font-semibold text-[#005df5] text-[18px] lg:text-[1.5rem] mr-[6px]'> Campus Mart </span> <span className='font-robotoflex text-black font-semibold lg:text-[1.65rem] text-[18px] mr-[6px]'> Account</span>
          </h1>
          <div class="flex items-center justify-center text-[#828f9b] text-[13px] lg:text-[1.025rem]  font-normal font-['Poppins'] mb-[3vh]">Enter your details to access Campus Mart.</div>
          <div className='w-3/4  mx-auto'  ></div>
          <div className='w-3/4  mx-auto'  >
            <form className='flex flex-col items-center justify-center' onSubmit={handleRegister}>
              {/* <div className=''>F
            <button className='text-black text-[18px] font-bold font-Poppins my-[20px] rounded-[12px] border border-[#dbdbdb] w-[412px] flex justify-center items-center h-[50px] '> <img src={Image1} alt="" className='h-[40px] w-[40px] mx-[10px]' />Continue with Google </button>
         </div> */}
              {/* <div className='text-[#64707d] text-[25px] font-semibold font-Poppins my-[5px]'>or</div> */}

              <div className='mt-[3vh]'>
                <label htmlFor="text"></label>
                <div className="text-[#1e1e1e] text-[13.5px]  lg:text-[16px] font-normal font-['Poppins'] lg:mb-[0.3vh]">First Name</div>
                <input className='form-control w-[77vw] h-[5.2vh] rounded-[3px] lg:w-[24.5vw] lg:h-[5.8vh] lg:rounded-[5px]  font-normal lg:font-semibold border border-[#bbc2c9] mb-[1.2vh] pl-[4vw] lg:pl-[1.3vw] text-[13px]'
                  type='text'
                  name='text'
                  autoFocus
                  placeholder='First Name'
                  onChange={(e) => setFname(e.target.value)}
                  required
                ></input>
              </div>

              <div>
                <label htmlFor="text"></label>
                <div className="text-[#1e1e1e] text-[13.5px] lg:text-[16px] font-normal font-['Poppins'] lg:mb-[0.3vh] ">Last Name</div>
                <input className='form-control w-[77vw] h-[5.2vh] rounded-[3px]  lg:w-[24.5vw] lg:h-[5.8vh] lg:rounded-[5px] font-normal lg:font-semibold border border-[#bbc2c9] mb-[1.2vh] pl-[4vw] lg:pl-[1.3vw] text-[12.5px]'
                  type='text'
                  name='text'
                  autoFocus
                  placeholder='Last Name'
                  onChange={(e) => setLname(e.target.value)}
                  required
                ></input>
              </div>

              <div className=''>
                <label htmlFor="email"></label>
                <div className="text-[#1e1e1e] text-[13.5px] lg:text-[16px] font-normal font-['Poppins'] mb-[0.3vh] ">Email</div>
                <input className='form-control  w-[77vw] h-[5.2vh] rounded-[3px]  lg:w-[24.5vw] lg:h-[5.8vh] lg:rounded-[5px] font-normal lg:font-semibold  border border-[#bbc2c9]  mb-[1.2vh] pl-[4vw] lg:pl-[1.3vw] text-[12.5px]'
                  type='email'
                  name='email'
                  placeholder='Enter your Email Address'
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  required

                ></input>
              </div>

              <div className='relative'>
                <label htmlFor="passsword"></label>
                <div className="text-[#1e1e1e] text-[13.5px] lg:text-[16px] font-normal font-['Poppins'] lg:mb-[0.3vh] ">Password</div>
                <input className='form-control  w-[77vw] h-[5.2vh] rounded-[3px]  lg:w-[24.5vw] lg:h-[5.8vh] lg:rounded-[5px] font-normal lg:font-semibold border border-[#bbc2c9]  mb-[1.2vh] pl-[4vw] lg:pl-[1.3vw] text-[12.5px]'
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  autoFocus
                  placeholder='Create your  Password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
                <button type='button' className="absolute top-[50%] right-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
              </div>


         
              <div>

                <button type="submit" className='text-white text-[14px] lg:text-[16.5px] font-medium font-poppins  bg-[#1a1d20]  rounded-[8px] border border-[#dbdbdb] w-[80vw] h-[5vh] lg:w-[24.5vw] lg:h-[5.8vh] mt-[2vh] mb-[2vh] transition-all duration-300 cursor-pointer hover:bg-[#0b0c0d] hover:scale-105'>Create account</button>

              </div>
          
              <div><span className='text-[#848484] text-[13px]  lg:text-[15px] font-normal font-poppins'>Already have a account? </span><Link to={"/"}><span className=' text-[#292929] text-[13px] lg:text-[15.5px] font-normal font-poppins'> Login {'>'} </span></Link></div>

            </form>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center w-full bottom-[1.9vh] absolute lg:bottom-[2vh]   '>
          <div class="text-center"><span class="text-zinc-500  text-[11px] lg:text-[12.5px] font-normal font-['Poppins']">By clicking "Create account" I acknowledge that <br />I agree to the </span><span class="text-[#848484]  text-[11px] lg:text-[13px] font-normal font-['Poppins'] underline">Terms of Use</span><span class="text-zinc-500  text-[11px] lg:text-[13px] font-normal font-['Poppins']"> and </span><span class="text-zinc-500  text-[11px] lg:text-sm font-normal font-['Poppins'] underline">Privacy Policy</span><span class="text-zinc-500  text-[11px] lg:text-sm font-normal font-['Poppins']">.</span></div>
        </div>

      </div>




      <div className='h-screen w-[0%] lg:w-[62%]  relative overflow-hidden bg-gradient-to-l from-[#364EF2] to-[#534ff2]'>


        {/* 
       
       <div className='absolute w-[800px] h-[80px] rotate-[88deg] top-[vh] right-[20vw] rounded-full border-2 border-[#828f9b] '></div>

       <div className= 'absolute top-[19vh] left-[4.5vw] w-[600px] h-[600px] rounded-full border-2 border-[#009ef3]'></div>

       <div className='absolute top-[28vh] left-[11vw] w-[400px] h-[400px] rounded-full border-2 border-[#009ef3]'></div>

       <div className=' absolute w-[250px] h-[250px] rounded-full border-2 border-[#009ef3] flex justify-center items-center top-[36vh] left-[16vw] '>

       <div className='  text-center text-black text-[15px] font-normal font-poppins'>Connecting Students,<br/> Simplifying Campus Trades!</div>

       </div> */}


        {/* 
       <div className='absolute bottom-0  '> <img className="max-w-[115%] h-[89vh]" src={Image3} alt="error" /></div> */}


        <div class=" text-[#ffffd5] text-[38px] font-extrabold font-['Figtree'] absolute top-[6%] left-[30%]">Find What You Need, <br />Sell What You Don't!</div>
        <div className='absolute top-[-19.3%] left-[-30%] scale-[62%]'><img src={Image6} alt="" /></div>
        <div className='absolute top-[3%] left-[-35%] scale-[62%]'><img src={Image5} alt="" /></  div>

        <div className='absolute top-0 right-0 w-[11vw] h-[11vh]'> <img src={Image4} className='' alt="" /></div>
        <div className='absolute bottom-0 right-0 h-[73vh] w-[46vw]'> <img className="h-full w-full" src={Image7} alt="" /></div>




      </div>






    </div>
  )
}

export default Signup
