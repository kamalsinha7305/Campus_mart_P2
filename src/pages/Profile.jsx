import React from 'react'
//import Image1 from '../assets/plusicon.png'


import Profile_left_part from '../components/Profile_left_part';
import Header from '../components/Header'
import Image12 from '../assets/logout.png'
import Image11 from '../assets/profilepho.png'
import { Link } from "react-router-dom";
import Image13 from '../assets/Group_114.png'


function Profile(){

    return(
        <>
     <div>
    
        <div className='flex'>
           
            <Profile_left_part/>
            <div className=' h-screen w-[73%] flex'>
            
               <div className='bg-[#cde4ff] w-[27%] flex-col text-center relative'>
                <div className='w-[130px] h-[130px] bg-[#292929] rounded-[100px] shadow-[0px_20.200000762939453px_25px_0px_rgba(0,0,0,0.10)] mx-auto mt-[40px]'>
                    <img src={Image11} className='mx-auto w-[115px] h-[115px]' alt="" />
                </div>
                <div className='text-black text-[28px] font-medium font-robotoflex mt-[15px]'>Abinav Shukla</div>

                <div className='absolute bottom-0 left-0'><img src={Image13} alt="Error" /></div>
               </div>


               <div className='bg-gradient-to-b from-[#eaf1f9] to-[#e2efff] w-[73%] relative' >

                <div className='flex items-center justify-between mt-[3vh] mx-[2vh]'> 
                    <div className='text-black text-[26px] font-normal font-poppins ml-[15px]'>My Profile <button className='text-[#394ff1] text-[18px] font-normal font-poppins leading-normal ml-[1vw]' >Edit</button></div>
                    
                    <div className='text-[#bc0000] text-[18px] font-normal font-poppins leading-normal flex text-end mr-[1vw] ml-[6px]'> <img src={Image12} classNamealt=" h-[15px] w-[15px] " />Logout</div>
                </div>

               <div className='ml-[5vw] mt-[5vh]'> 
                    <div className='text-black text-[20.98px] font-normal  font-poppins mb-[1vh]'>Password </div>
                    <input className='rounded-md border border-[#c5c5c5]   w-[22vw] h-[6vh] mb-[3vh] px-[1vw]  bg-[#E3F0FF]' placeholder='***********' type="password "  />

                    <div className='text-black text-[20.98px] font-normal font-poppins mb-[1vh]'>Phone Number</div>
                    <input className='rounded-md border border-[#c5c5c5]    w-[22vw] h-[6vh] mb-[3vh] bg-[#E3F0FF] px-[1vw]  ' placeholder='+91458689568' type="number" />

                    <div className='text-black text-[20.98px] font-normal font-poppins mb-[1vh]'>Email Adddress: </div>
                    <input className='rounded-md border border-[#c5c5c5]    w-[22vw] h-[6vh] mb-[3vh] bg-[#E3F0FF] px-[1vw] ' placeholder='vedant.parth2024@vitstudent.ac.in' type="email" />

                    <div className='text-black text-[20.98px] font-normal font-poppins mb-[1vh] bg-[#E3F0FF]  '>Primary Address </div>
                    <textarea  className='w-[22vw] h-[9vh] bg-[#E3F0FF]  border-[#d14343]  px-[1vw]' placeholder='P Block - Mens Hostel , VIT Vellore,
Katpadi , INDIA - 632014' name="" id=""></textarea>
                </div>
 
                <button className='bg-[#bc0000] absolute bottom-7 left-8 ronded-[10px] text-white px-[29px] py-[7px] rounded-[8px]' >Delete Account</button> 
               </div>
         
            </div>




        </div>
        



     </div>
        
     </>
    )

    

}

export default  Profile



