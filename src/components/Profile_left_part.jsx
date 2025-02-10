import React from "react"
import {Link} from 'react-router-dom'
import Image3 from '../assets/plusicon.png'
import Image8 from '../assets/mart.png'
import Image4 from '../assets/arrowr.png'
import Image6 from '../assets/heart.png'
import Image7 from '../assets/not.png'
import Image9 from '../assets/quetion.png'
import Image10 from '../assets/document.png'
import Image11 from '../assets/profilepho.png'
import Image14 from '../assets/arrort_profile.png'
import { Router } from "react-router-dom"

function Profile_left_part(){

    return(
        <>
           
         
           <div className=' h-screen w-[27%] relative'>
                

                <div className=" ">
       <div className="mt-[2.5vh] mb-[2vh] mx-[0.5vw]">
           <div className=" rounded-md border border-[#c2cdd6]   flex mx-[10px] my-[10px ]  p-[10px]"  >     
          
           <div className="w-[85.05px] h-[80.05px]    bg-[#364ef2] rounded-[9.42px] shadow-[0px_10.005365371704102px_25.01341438293457px_0px_rgba(0,0,0,0.15)] justify-center items-center inline-flex overflow-hidden">
               <img className=" w-[80px] h-[80px] mx-auto" src={Image11} />
           </div>
           <div className="w-[273px] h-[79.86px] pl-[15px] pt-[5px] ">
               <div className=" text-black text-base font-medium font-['Outfit']">Abhinaw Shukla</div>
               <div className="l text-[#64707d] text-base font-medium font-['Outfit']">Abhinaw.shukla2024@vitsudent.ac.in</div>
               <div className="text-[#64707d] text-base font-medium font-['Outfit']">+91 94587 45256</div>
           </div>
           <div className="">  
               <button className=""><img src={Image14} alt="" /></button> 
               
           </div>
           
   
           </div>
       </div>
   
   
   
   
   
        <div className='flex'>

        <div className="w-[180.89px] h-[75.58px] px-[4.71px] py-[10.59px] mx-[15px]  rounded-[7.06px] border border-black/10 border-[#a7a5a5]  flex-col justify-start items-center gap-[4.71px] inline-flex">
           <div className="w-[45.50px] h-[45.50px] bg-black/5 rounded-[28.25px] justify-center items-center inline-flex">
               <div className="w-[42.50px] self-stretch text-center text-black text-4xl font-normal font-['Roboto'] leading-[42.50px]">💬</div>
           </div>
           <div className="self-stretch h-[32.96px] text-center text-black text-xs font-normal font-['Roboto'] leading-none">Chat History</div>
       </div>
   
   
          
       <div className="w-[180.89px] h-[75.58px] px-[4.71px] py-[10.59px]  rounded-[7.06px] border border-black/10 border-[#a7a5a5]  flex-col justify-start items-center  inline-flex">
           <div className="w-[45.50px] h-[45.50px] bg-black/5 rounded-[28.25px] justify-center items-center inline-flex">
               <div className="w-[42.50px] self-stretch text-center text-black text-4xl font-normal font-['Roboto'] leading-[42.50px]">🛒</div>
           </div>
           <div className="self-stretch h-[32.96px] text-center text-black text-xs font-normal font-['Roboto'] leading-none">Orders</div>
       </div>
   
       </div>
   
   
        
       <div className="h-[119.08px] px-[14.13px]  flex-col justify-center items-center inline-flex ml-[0.8vw]">
           <div className="self-stretch pt-[18.83px] justify-start items-center gap-[14.13px] inline-flex">
               <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                   <div className="self-stretch text-black text-[20.19px] font-medium font-['Roboto'] leading-7">Saved Address</div>
               </div>
           </div>
           <div className="self-stretch py-[10.13px] justify-center items-center gap-[9.42px] inline-flex">
               <div className="w-[37.67px] h-[37.67px] bg-black/5 rounded-[18.83px] justify-center items-center flex">
                   <div className="w-[37.67px] self-stretch text-center text-black text-2xl font-normal font-['Roboto'] leading-[37.67px]">🏠</div>
               </div>
               <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                   <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal text-[14.5px]">P Block - Mens Hostel , VIT Vellore</div>
                   <div className="self-stretch text-black/50 text-sm font-normal font-['Roboto'] leading-[18.83px]">Vellore, India</div>
               </div>
           </div>
       </div>
   
   
     
     <div className='mx-[1.8vw] my-[25px] '>
    
       <div className="my-3">
           <div className="flex justify-between items-center">
               
               <div className=" text-black text-base font-medium font-['Poppins'] flex "><img className='h-[19px] w-[21px] mr-[20px]' src={Image6} alt="" /> Wishlist</div>
               <div className="text-end"><img src={Image4} className='w-[10px] h-[14px]' alt="" /></div>
           </div>
          
       </div>
   
   
       <Link to={"/notification"}><div className="my-3 ">
           <div className="flex justify-between items-center">
               <div className=" text-black text- font-medium font-['Poppins'] flex "><img className='w-[21px] h-[19px] mr-[20px]' src={Image7}  alt="" />Notification</div>
               <div className="text-end"><img src={Image4} className='w-[10px] h-[14px]' alt="" /></div>
           </div>
          
       </div></Link>
   
   
       <Link to={""}><div className="my-3  ">
           <div className=" flex justify-between items-center">
               <div className=" text-black text-base font-medium font-['Poppins'] flex"> <img className='w-[21px] h-[20px] mr-[20px]' src={Image9} alt="" />Contact Us</div>
               <div className=" text-end "><img src={Image4} className='w-[10px] h-[14px]' alt="" /></div>
           </div>
       </div></Link>
   
   
       <Link to={"/termscondition"}><div className="">
           <div className="flex justify-between ">
               
               <div className=" text-black text-base font-medium font-['Poppins'] flex"><img className='w-[20px] h-[21px] text-start mr-[20px]' src={Image10} alt="" />Terms & Condition</div>
               <div className="text-end"><img src={Image4} className='w-[10px] h-[14px]' alt=""/></div>
           </div>
       </div></Link>
       </div>
   

        <div className='flex justify-center items-center mt-[20px]'>
           <button class="w-[335.19px] h-[52.33px] bg-gradient-to-r from-[#4d4ef2] to-[#394ff1] rounded-[9.42px] border border-[#dbdbdb] flex justify-center items-center">
           <div  className=" flex justify-center items-center text-center">
               <div className=""> <img src={Image3} className="mx-[7px] h-[26px] w-[26px]" alt="" /></div>
               <div className=" text-white text-[18.83px] font-bold font-['Poppins']">Sell you Product</div>
           </div>
           </button>
        </div>


           <div className='absolute bottom-[17px] left-[5vw] '>
            <div className='flex  justify-center items-center text-center '> <img className='h-[20px] w-[20px] mx-[10px]'  src={Image8} alt="" />
                       <span className='text-[#012436] text-[20px] font-poppins font-semibold mr-[5px]' >Campus</span> <span className=' text-[#009ef3] text-[25px] font-poppins font-semibold'>Mart</span>
                       
           </div>
           </div>



   </div>
   
    </div>    
        </>
    )
}

export default  Profile_left_part