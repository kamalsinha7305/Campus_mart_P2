import Profile_left_part from '../components/Profile_left_part';
import Image1 from "../assets/earphone.png"
import TabSwitcher from "../components/manageorderanime";
import Header from "../components/Header";
import whitebag from "../assets/whitebag.png";
import {  ShoppingCart } from "lucide-react";
function ProductListed() {
    return (
        <>
            <div className='h-screen w-screen dark:bg-[#131313] overflow-x-hidden '>
                <Header bagUrl={whitebag} />
                <div className='lg:flex md:flex'>
                    <div className="hidden md:block md:w-[35%] lg:w-[28%] pt-[3.5vh] px-[2vw] pb-[2vh]  bg-[#FBFBFB]  dark:bg-[#131313]">
                        <Profile_left_part />
                    </div>
                    <div className='lg:w-[72%] md:w-[65%] bg-[#FBFBFB] dark:bg-[#131313]'>
                        <div className=" mx-[5.5vw] md:mr-[3vw] md:ml-[2vw] lg:mr-[3.2vw] lg:ml-[1.5vw]">
                            <div className="flex justify-between items-center">
                                <div className=" text-[1.1rem] mb-[2vh] mt-[3vh]  lg:mt-[5vh] lg:mb-[2vh] text-[#292929] dark:text-[#D6D6D6]  lg:text-[22px] lg:font-medium font-['Poppins'] flex justify-center items-center"> <p className='mr-[0.5vw]'><ShoppingCart/></p>  Product Listed</div>
                                <div class="">
                                    <TabSwitcher />
                                </div>
                            </div>
                            <div class="relative bg-white dark:bg-[#1A1D20] rounded-[15px]  lg:rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)]  overflow-hidden  pl-[3.4vw] pr-[3.5vw] pt-[1.8vh] pb-[1.8vh] lg:px-[1.8vw] lg:py-[1.9vh]">

                                <div className="flex justify-between items-center">
                                    <div class=" text-[#2d3339] dark:text-[#F1F1F1] text-[13px] lg:text-lg lg:font-medium font-['Poppins'] ">#Order id : 130525-01</div>
                                    <div class=" text-[#646464] dark:text-[#D6D6D6] text-[12px] lg:text-[16px] font-light font-['Poppins']">Placed on : 13-05-2025</div>
                                </div>
                                <div class="w-full h-[0px] border lg:border-1 border-[#cacaca] mt-[2vh] mb-[2.4vh] lg:my-[1.5vh]"></div>
                                <div className="lg:flex lg:justify-between  lg:mt-[2vh]  ">
                                    <div className="flex ml-[4vw] lg:ml-[0vw]">
                                        <img class="  w-[90px] h-[90px]  lg:w-[88px] lg:h-[88px]  rounded-[9.06px]" src={Image1} />
                                        <div className="flex flex-col ml-[4vw] lg:ml-[1.5vw] max-sm:mt-[1.2vh] ">
                                            <div class=" text-[#2d3339] dark:text-[#F1F1F1] text-[15px] font-medium lg:text-[19px] lg:font-medium font-['Poppins']">Ear Buds</div>
                                            <div class=" text-[#64707d] dark:text-[#848484] text-[13px] lg:text-[15px] font-light font-['Poppins'] mt-[-0.6vh]">Blue color | Wireless</div>

                                            <div class="lg:mt-[1.2vh] ">
                                                <div class=" bg-[#e5e8ff] rounded-[5px] lg:rounded-[7px] inline-block px-[2vw] py-[0.2vh] lg:py-[0.3vh] lg:px-[1vw] ">
                                                    <div class=" text-[#534ff2] text-[12px]  font-normal font-['Poppins'] lg:text-[14px] ">In progress</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:hidden mt-[2.4vh] w-full h-0 border border-[#cacaca] "></div>
                                    <div class="flex lg:flex lg:flex-col lg:justify-center lg:items-end mt-[3vh] lg:mt-[0px]">
                                        <div class=" text-[#555555] dark:text-[#BBC2C9] mr-[3vw] lg:mr-[0] text-[0.95rem] lg:text-[1.1rem] font-normal font-['Poppins']">Total</div>
                                        <div class=" text-black  dark:text-[#F1F1F1]  text-[0.9rem] lg:text-[18px] md:mb-[1.7vh] lg:font-medium font-['Poppins']  lg:mt-[-0.7vh]">₹750</div>
                                        <div data-svg-wrapper class=" max-sm:absolute bottom-[1.5vh] right-[4vw] lg:static md:absolute md:bottom-[1.5vh] md:right-[3.3vw]" >
                                            <svg className="max-sm:h-[25px] max-sm:w-[25px]" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="30" height="30" rx="15" transform="matrix(-1 0 0 1 30 0.253723)" fill="#534FF2" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2636 7.53034C11.6151 7.16152 12.1849 7.16152 12.5364 7.53034L19.7364 15.0859C20.0879 15.4547 20.0879 16.0527 19.7364 16.4215L12.5364 23.9771C12.1849 24.3459 11.6151 24.3459 11.2636 23.9771C10.9121 23.6083 10.9121 23.0103 11.2636 22.6415L17.8272 15.7537L11.2636 8.86599C10.9121 8.49716 10.9121 7.89917 11.2636 7.53034Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative bg-white dark:bg-[#1A1D20] rounded-[15px]  lg:rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)]  overflow-hidden  pl-[3.4vw] pr-[3.5vw] pt-[1.8vh] pb-[1.8vh] lg:px-[1.8vw] lg:py-[1.9vh] mt-[5vh]">

                                <div className="flex justify-between items-center">
                                    <div class=" text-[#2d3339] dark:text-[#F1F1F1] text-[13px] lg:text-lg lg:font-medium font-['Poppins'] ">#Order 23</div>
                                    <div class=" text-[#646464] dark:text-[#D6D6D6] text-[12px] lg:text-[16px] font-light font-['Poppins']">Ordered on 15 March 2024</div>
                                </div>
                                <div class="w-full h-[0px] border lg:border-1 border-[#cacaca] mt-[2vh] mb-[2.4vh] lg:my-[1.5vh]"></div>
                                <div className="lg:flex lg:justify-between  lg:mt-[2vh]  ">
                                    <div className="flex ml-[4vw] lg:ml-[0vw]">
                                        <img class="  w-[90px] h-[90px]  lg:w-[88px] lg:h-[88px]  rounded-[9.06px]" src={Image1} />
                                        <div className="flex flex-col ml-[4vw] lg:ml-[1.5vw] max-sm:mt-[1.2vh] ">
                                            <div class=" text-[#2d3339] dark:text-[#F1F1F1]  text-[15px] font-medium lg:text-[19px] lg:font-medium font-['Poppins']">Ear Buds</div>
                                            <div class=" text-[#64707d] dark:text-[#848484] text-[13px] lg:text-[15px] font-light font-['Poppins'] mt-[-0.6vh]">Blue color | Wireless</div>
                                            <div class="lg:mt-[1.2vh] ">
                                                <div class=" bg-green-100 rounded-[5px] lg:rounded-[7px] inline-block px-[2vw] py-[0.2vh] lg:py-[0.3vh] lg:px-[1vw] ">
                                                    <div class=" text-green-500 text-[12px]  font-normal font-['Poppins'] lg:text-[14px] ">Delivered</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:hidden mt-[2.4vh] w-full h-0 border border-[#cacaca] "></div>
                                    <div class="flex lg:flex lg:flex-col lg:justify-center items-end mt-[3vh] lg:mt-[0px]">
                                        <div class=" text-[#555555] dark:text-[#BBC2C9] mr-[3vw] lg:mr-[0] text-[0.95rem] lg:text-[1.1rem] font-normal font-['Poppins']">Total</div>
                                        <div class=" text-black dark:text-[#F1F1F1]  text-[0.9rem] lg:text-[18px] lg:font-medium font-['Poppins']  lg:mt-[-0.7vh] md:mb-[1.7vh]">₹750</div>
                                        <div data-svg-wrapper class=" max-sm:absolute bottom-[1.5vh] right-[4vw] lg:static md:absolute md:bottom-[1.5vh] md:right-[3.3vw] " >
                                            <svg className="max-sm:h-[25px] max-sm:w-[25px]" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="30" height="30" rx="15" transform="matrix(-1 0 0 1 30 0.253723)" fill="#534FF2" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2636 7.53034C11.6151 7.16152 12.1849 7.16152 12.5364 7.53034L19.7364 15.0859C20.0879 15.4547 20.0879 16.0527 19.7364 16.4215L12.5364 23.9771C12.1849 24.3459 11.6151 24.3459 11.2636 23.9771C10.9121 23.6083 10.9121 23.0103 11.2636 22.6415L17.8272 15.7537L11.2636 8.86599C10.9121 8.49716 10.9121 7.89917 11.2636 7.53034Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListed

