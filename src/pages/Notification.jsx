import React from "react"
 import Profile_left_part from '../components/Profile_left_part'; 
import Image1 from '../assets/command.png'
/* import Image2 from '../assets/delete.png' */
import Image3 from '../assets/tick.png'
function Notification(){

    return(
        <>
        <div className='flex'>
        <Profile_left_part/>
        
        <div className=' h-screen w-[73%] flex flex-col'>

            <div className="text-black text-[23px] font-medium font-['Roboto Flex'] h-[7vh] w-full flex items-center justify-center bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)]"> Your Notification </div>
            <div className="bg-gradient-to-b from-[#eaf1f9] to-[#e2f1ff] h-full w-full">

                <div className="flex my-[2vw] mx-[2vh] mr-[3vw] ml-[2vw] items-center relative mb-[4vh]">
                    <div className=" rounded-full h-[9px] w-[9px] bg-[#394ff1] mr-[2vw]"></div>
                    <div className=""><img src={Image1} alt="" /></div>
                    <div className="text-black text-xl font-medium font-['Poppins'] leading-[17.93px] ml-[2vw]">You have a new Offer. Check chats now</div>
                    <div className="text-[#898989] text-lg font-medium font-['Poppins'] leading-[17.93px] ml-[3vh]">11:40 am</div>
                    <div className="absolute right-0"><img src={Image2} alt="" /></div>
                </div>

                <div className="flex my-[1vw] mx-[2vh] mr-[3vw] ml-[2vw] items-center relative mb-[4vh] ">
                    <div className=" rounded-full h-[9px] w-[9px] bg-[#394ff1] mr-[2vw]"></div>
                    <div className=""><img src={Image1} alt="" /></div>
                    <div className="text-black text-xl font-medium font-['Poppins'] leading-[17.93px] ml-[2vw]">Arnav send you a new Message</div>
                    <div className="text-[#898989] text-lg font-medium font-['Poppins'] leading-[17.93px] ml-[3vh]">11:40 am</div>
                    <div className="absolute right-0"><img src={Image3} alt="" /></div>
                </div>

                <div className="flex my-[1vw] mx-[2vh] mr-[3vw] ml-[2vw] items-center relative mb-[4vh]">
                    <div className=" rounded-full h-[9px] w-[9px] bg-[#394ff1] mr-[2vw]"></div>
                    <div className=""><img src={Image1} alt="" /></div>
                    <div className="text-black text-xl font-medium font-['Poppins'] leading-[17.93px] ml-[2vw]">CHECKOUT NEW ITEM LISTED!!!! Don't miss the best deals.</div>
                    <div className="text-[#898989] text-lg font-medium font-['Poppins'] leading-[17.93px] ml-[3vh]">11:40 am</div>
                    <div className="absolute right-0"><img src={Image2} alt="" /></div>
                </div>

                <div className="flex my-[2vw] mx-[2vh] mr-[3vw] ml-[2vw] items-center relative mb-[4vh]">
                    <div className=" rounded-full h-[9px] w-[9px] bg-[#394ff1] mr-[2vw]"></div>
                    <div className=""><img src={Image1} alt="" /></div>
                    <div className="text-black text-xl font-medium font-['Poppins'] leading-[17.93px] ml-[2vw]">You have a new Offer. Check chats now</div>
                    <div className="text-[#898989] text-lg font-medium font-['Poppins'] leading-[17.93px] ml-[3vh]">11:40 am</div>
                    <div className="absolute right-0"><img src={Image2} alt="" /></div>
                </div>



                <div className="flex my-[1vw] mx-[2vh] mr-[3vw] ml-[2vw] items-center relative mb-[4vh] ">
                    <div className=" rounded-full h-[9px] w-[9px] bg-[#394ff1] mr-[2vw]"></div>
                    <div className=""><img src={Image1} alt="" /></div>
                    <div className="text-black text-xl font-medium font-['Poppins'] leading-[17.93px] ml-[2vw]">Arnav send you a new Message</div>
                    <div className="text-[#898989] text-lg font-medium font-['Poppins'] leading-[17.93px] ml-[3vh]">11:40 am</div>
                    <div className="absolute right-0"><img src={Image3} alt="" /></div>
                </div>



                <div className="flex my-[1vw] mx-[2vh] mr-[3vw] ml-[2vw] items-center relative mb-[4vh]">
                    <div className=" rounded-full h-[9px] w-[9px] bg-[#394ff1] mr-[2vw]"></div>
                    <div className=""><img src={Image1} alt="" /></div>
                    <div className="text-black text-xl font-medium font-['Poppins'] leading-[17.93px] ml-[2vw]">CHECKOUT NEW ITEM LISTED!!!! Don't miss the best deals.</div>
                    <div className="text-[#898989] text-lg font-medium font-['Poppins'] leading-[17.93px] ml-[3vh]">11:40 am</div>
                    <div className="absolute right-0"><img src={Image2} alt="" /></div>
                </div>




            </div>

        </div>

        </div>



        </>
    )
}

export default  Notification 