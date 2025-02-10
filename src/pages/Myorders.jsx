import React from "react"
import Profile_left_part from '../components/Profile_left_part';
import Image12 from '../assets/logout.png'
import Image11 from '../assets/profilepho.png'
import { Link } from "react-router-dom";
import Image13 from '../assets/Group_114.png'
import Image14 from '../assets/mouse.png'
import Image15 from '../assets/ic-left.png'

function Myorders(){
    return(
        <>
        <div className='flex'>
        <Profile_left_part/>
        <div className=' h-screen w-[73%] flex'>
          <div className='bg-[#cde4ff] w-[27%] flex-col text-center relative'>
            
            <div className="text-black text-[24px] font-semibold font-['Roboto Flex'] mt-[2.7vh]"> My Orders</div>
            <div className="">
                <div className="my-[2.2vh]"><button className=" w-[17vw] h-[6vh] bg-[#95c5ff] rounded-xl text-black text-[20px] font-normal font-['Roboto Flex']">Listed Products</button></div>
                <div className="my-[2.2vh]"><button className="w-[17vw] h-[6vh] border border-[#b3b3b3] bg-[] rounded-xl text-black text-[20px] font-normal font-['Roboto Flex']">My order</button></div>
            </div>
            <div className='absolute bottom-0 left-0'><img src={Image13} alt="Error" /></div>
          </div>

          <div className='bg-gradient-to-b from-[#eaf1f9] to-[#e2efff] w-[73%] relative' >
     



          <div class="">
    <div class="  bg-white rounded-[15.63px] flex m-[20px] relative p-[8px]">

    <div class=" ">
        <img class="w-[9vw] h-[16vh]  rounded-md m-[10px]" src={Image14} />
        
    </div>


    <div className="flex flex-col ml-[2vw] mt-[3.4vh]">
    <div class="w-[5vw] h-[3vh] p-[13.90px] mb-[4px] bg-[#364ef2] rounded-md justify-center items-center gap-[13.90px] inline-flex">
            <div class="text-white text-[11px] font-semibold font-['Poppins']">Electronics</div>
     </div>
    <div class="w-[324px] h-[79.32px] ">
        <div class=" text-black text-[21.03px] font-semibold font-['Poppins'] leading-[38.93px]">Portonics Wireless Mouse</div>   
    </div>
    </div>
   
    <div class=" absolute right-[3vw] bottom-[2vh] text-[#364ef2] text-[16px]  font-extrabold font-['Roboto Flex']">Listed</div>
    <div className="absolute top-[2vh] right-[1.7vw] "> <img  className='w-[2.1vw] h-[4vh]' src={Image15} alt="" /></div>

    </div>
</div>




          </div>
        </div>

        
         

        </div>
        </>
    )
}

export default Myorders

