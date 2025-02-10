import React from 'react'
//import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import { ToastContainer } from 'react-toastify';

import Image2 from '../assets/mart.png'
import Image3 from '../assets/circle_new.png'

function Login(){



 /*  
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
})

const navigate = useNavigate();

const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
}

const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
        return handleError('email and password are required')
    }
    try {
        const url = `https://deploy-mern-app-1-api.vercel.app/auth/login`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        });
        const result = await response.json();
        const { success, message, jwtToken, name, error } = result;
        if (success) {
            handleSuccess(message);
            localStorage.setItem('token', jwtToken);
            localStorage.setItem('loggedInUser', name);
            setTimeout(() => {
                navigate('/home')
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


return(
    <div className='flex overflow-hidden'>
      <div className='bg-white h-screen w-[53%]  relative overflow-hidden'>


      {/* 
       
       <div className='absolute w-[800px] h-[80px] rotate-[88deg] top-[vh] right-[20vw] rounded-full border-2 border-[#828f9b] '></div>

       <div className= 'absolute top-[19vh] left-[4.5vw] w-[600px] h-[600px] rounded-full border-2 border-[#009ef3]'></div>

       <div className='absolute top-[28vh] left-[11vw] w-[400px] h-[400px] rounded-full border-2 border-[#009ef3]'></div>

       <div className=' absolute w-[250px] h-[250px] rounded-full border-2 border-[#009ef3] flex justify-center items-center top-[36vh] left-[16vw] '>

       <div className='  text-center text-black text-[15px] font-normal font-poppins'>Connecting Students,<br/> Simplifying Campus Trades!</div>

       </div> */}



       <div className='absolute bottom-0 '> <img className="max-w-[115%] h-[89vh]" src={Image3} alt="error" /></div>



      </div>
      <div className=' relative h-screen w-[47%] bg-white shadow '>
      <div className='flex my-[25px] mb-[10vh] mt-[3.5vh] ml-[1.5vw]'> <img className='h-[25px] w-[25px] mx-[10px]'  src={Image2} alt="" />
        <span className='text-[#012436] text-[25px] font-poppins font-semibold mr-[5px]' >Campus</span> <span className='text-[#364ef2] text-[25px] font-poppins font-semibold'>Mart</span></div>
      <div className=''>

      <h1 className=' flex items-center justify-center '> <span className='font-robotoflex text-black font-bold text-[48px] mr-[6px]'>Welcome to </span> <span className='font-robotoflex font-bold text-[#005df5] text-[48px]'> Campus Mart</span></h1>
      <div className='w-3/4  mx-auto'  >
      <form className='flex flex-col items-center justify-center'>
        {/* <div className=''>
            <button className='text-black text-[18px] font-bold font-Poppins my-[20px] rounded-[12px] border border-[#dbdbdb] w-[412px] flex justify-center items-center h-[50px] '> <img src={Image1} alt="" className='h-[40px] w-[40px] mx-[10px]' />Continue with Google </button>
         </div> */}
         {/* <div className='text-[#64707d] text-[25px] font-semibold font-Poppins my-[5px]'>or</div> */}
         <div className='mt-[3vh]'>
            <label htmlFor="email"></label>
            <input className='w-[412px] h-[50px] rounded-[5px] font-semibold border border-[#bbc2c9] my-[15px] pl-[10px] text-[16px]'
              type='email'
              name='email'
              autoFocus
              placeholder='Email'
              ></input>
         </div>
         
         <div>
            <label htmlFor="passsword"></label>
            <input className='w-[412px] h-[50px] rounded-[5px] font-semibold border border-[#bbc2c9] my-[15px] pl-[10px] text-[16px]'
              type='password'
              name='password'
              autoFocus
              placeholder='Password'
            ></input>
         </div>

         <div> 

          <button className='text-white text-[18px] font-bold font-poppins  bg-gradient-to-r from-[#4d4ef2] to-[#364ef2] rounded-[12px] border border-[#dbdbdb] w-[412px] h-[50px] mt-[3vh] mb-[1.5vh]'>Continue</button>
          
          </div>

         <div><span className='text-[#637d92] text-[15px] font-medium font-poppins'>Don't have a account ? </span><Link to={"/signup"}><span className=' text-[#4d4ef2] text-[15px] font-medium font-poppins'> Sign up {'>'} </span></Link></div>
         
        </form>
        </div>
        </div>

        <div className='flex flex-col justify-center items-center w-full  absolute bottom-[7vh] md-[5px]'>
          <div className='w-[85%] h-[0px] border border-[#92a5b5]'></div>
          <div className=''><span className='text-[#64707d]  text-[15px] font-medium font-Poppins w-full absolute left-[3.5vw]'>@ Copyright Reserved</span> <span className='text-[#64707d] text-[15px] font-medium font-Poppins absolute right-[3.5vw] '>Login issues? Contact us.</span></div>
       </div>

    </div>
    </div>
)
}

export default Login
