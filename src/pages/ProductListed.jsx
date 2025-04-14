import React from "react"
import Profile_left_part from '../components/Profile_left_part';

import { Link } from "react-router-dom";
import Image1 from "../assets/earphone.png"
import TabSwitcher from "../components/manageorderanime";
function ProductListed() {
    return (
        <>
            <div className='lg:flex'>
                <Profile_left_part />
                <div className=' h-screen lg:w-[75%]  bg-[#FBFBFB]'>


                    <div className=" mx-[4vw] lg:mx-[3vw]">

                        <div className="flex justify-between items-center">
                            <div className=" text-[1.1rem] mb-[2vh] mt-[3vh]  lg:mt-[5vh] lg:mb-[2vh] text-[#292929] lg:text-[22px] lg:font-medium font-['Poppins'] ">Product Listed</div>


                            <div class="">
                                {/* 
                                <div class=" bg-white rounded-[9.61px] shadow-[0px_3.2039802074432373px_6.407960414886475px_0px_rgba(0,0,0,0.06)] px-[0.5vw] py-[0.4vh] flex items-center">

                                    <div class="bg-[#394ff1] rounded-[5px] py-[0.3vh] px-[0.7vw]">
                                        <div class=" text-white text-[0.85rem] font-light font-['Poppins']">All</div>
                                    </div>
                                    <div class=" text-[#292929] text-[0.85rem] font-light font-['Poppins'] mx-[0.8vw]">In progress</div>
                                    <div class="text-[#292929] text-[0.85rem] font-light font-['Poppins']">Delivered</div>
                                </div>
                                 */}

                                <TabSwitcher />

                            </div>


                        </div>





                        <div class="relative bg-white rounded-[15px]  lg:rounded-[22px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)]  overflow-hidden  pl-[3.4vw] pr-[3.5vw] pt-[1.8vh] pb-[1.8vh] lg:px-[1.8vw] lg:py-[1.8vh]">

                            <div className="flex justify-between items-center">
                                <div class=" text-[#2d3339] text-[13px] lg:text-xl lg:font-medium font-['Poppins'] ">#Order 23</div>
                                <div class=" text-[#646464] text-[12px] lg:text-[16px] font-light font-['Poppins']">Ordered on 15 March 2024</div>
                            </div>



                            <div class="w-full h-[0px] border lg:border-2 border-[#cacaca] mt-[2vh] mb-[3.5vh] lg:my-[1.5vh]"></div>


                            <div className="lg:flex lg:justify-between  lg:mt-[2vh]  ">

                                <div className="flex ml-[4vw] lg:ml-[0vw]">
                                    <img class="  w-[22vw] h-[12vh]  lg:w-[88px] lg:h-[88px]  rounded-[9.06px]" src={Image1} />




                                    <div className="flex flex-col ml-[4vw] lg:ml-[1.5vw] ">
                                        <div class=" text-[#2d3339] text-[15px] font-medium lg:text-[19px] lg:font-medium font-['Poppins']">Ear Buds</div>
                                        <div class=" text-[#64707d] text-[13px] lg:text-[15px] font-light font-['Poppins'] mt-[-0.6vh]">Blue color | Wireless</div>

                                        

                                        <div class="lg:mt-[0.9vh] ">
                                            <div class=" bg-[#e5e8ff] rounded-[5px] lg:rounded-[7px] inline-block px-[2vw] py-[0.2vh] lg:py-[0.3vh] lg:px-[1vw] ">
                                                <div class=" text-[#534ff2] text-[12px]  font-normal font-['Poppins'] lg:text-[14px] ">In progress</div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="lg:hidden mt-[3.5vh] w-full h-0 border border-[#cacaca] "></div>


                                <div class="flex lg:flex lg:flex-col lg:justify-center mt-[3vh] lg:mt-[0px]">
                                    <div class=" text-[#555555] mr-[3vw] lg:mr-[0] text-[0.95rem] lg:text-[1.1rem] font-normal font-['Poppins']">Total</div>
                                    <div class=" text-black text-[0.9rem] lg:text-[20px] lg:font-medium font-['Poppins']  lg:mt-[-0.7vh]">₹750</div>
                                    <div data-svg-wrapper class=" max-sm:absolute bottom-[1.5vh] right-[4vw]" >
                                        <svg className="max-sm:h-[25px] max-sm:w-[25px]" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="30" height="30" rx="15" transform="matrix(-1 0 0 1 30 0.253723)" fill="#534FF2" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2636 7.53034C11.6151 7.16152 12.1849 7.16152 12.5364 7.53034L19.7364 15.0859C20.0879 15.4547 20.0879 16.0527 19.7364 16.4215L12.5364 23.9771C12.1849 24.3459 11.6151 24.3459 11.2636 23.9771C10.9121 23.6083 10.9121 23.0103 11.2636 22.6415L17.8272 15.7537L11.2636 8.86599C10.9121 8.49716 10.9121 7.89917 11.2636 7.53034Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>

                            </div>



                        </div> 










                        <div class="relative bg-white rounded-[15px]  lg:rounded-[22px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)]  overflow-hidden  pl-[3.4vw] pr-[3.5vw] pt-[1.8vh] pb-[1.8vh] lg:px-[1.8vw] lg:py-[1.8vh] mt-[4vh]">

                            <div className="flex justify-between items-center">
                                <div class=" text-[#2d3339] text-[13px] lg:text-xl lg:font-medium font-['Poppins'] ">#Order 23</div>
                                <div class=" text-[#646464] text-[12px] lg:text-[16px] font-light font-['Poppins']">Ordered on 15 March 2024</div>
                            </div>



                            <div class="w-full h-[0px] border lg:border-2 border-[#cacaca] mt-[2vh] mb-[3.5vh] lg:my-[1.5vh]"></div>


                            <div className="lg:flex lg:justify-between  lg:mt-[2vh]  ">

                                <div className="flex ml-[4vw] lg:ml-[0vw]">
                                    <img class="  w-[22vw] h-[12vh]  lg:w-[88px] lg:h-[88px]  rounded-[9.06px]" src={Image1} />




                                    <div className="flex flex-col ml-[4vw] lg:ml-[1.5vw] ">
                                        <div class=" text-[#2d3339] text-[15px] font-medium lg:text-[19px] lg:font-medium font-['Poppins']">Ear Buds</div>
                                        <div class=" text-[#64707d] text-[13px] lg:text-[15px] font-light font-['Poppins'] mt-[-0.6vh]">Blue color | Wireless</div>

                                      

                                        <div class="lg:mt-[0.9vh] ">
                                            <div class=" bg-green-100 rounded-[5px] lg:rounded-[7px] inline-block px-[2vw] py-[0.2vh] lg:py-[0.3vh] lg:px-[1vw] ">
                                                <div class=" text-green-700 text-[12px]  font-normal font-['Poppins'] lg:text-[14px] ">Delivered</div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="lg:hidden mt-[3.5vh] w-full h-0 border border-[#cacaca] "></div>


                                <div class="flex lg:flex lg:flex-col lg:justify-center mt-[3vh] lg:mt-[0px]">
                                    <div class=" text-[#555555] mr-[3vw] lg:mr-[0] text-[0.95rem] lg:text-[1.1rem] font-normal font-['Poppins']">Total</div>
                                    <div class=" text-black text-[0.9rem] lg:text-[20px] lg:font-medium font-['Poppins']  lg:mt-[-0.7vh]">₹750</div>
                                    <div data-svg-wrapper class=" max-sm:absolute bottom-[1.5vh] right-[4vw]" >
                                        <svg className="max-sm:h-[25px] max-sm:w-[25px]" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="30" height="30" rx="15" transform="matrix(-1 0 0 1 30 0.253723)" fill="#534FF2" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2636 7.53034C11.6151 7.16152 12.1849 7.16152 12.5364 7.53034L19.7364 15.0859C20.0879 15.4547 20.0879 16.0527 19.7364 16.4215L12.5364 23.9771C12.1849 24.3459 11.6151 24.3459 11.2636 23.9771C10.9121 23.6083 10.9121 23.0103 11.2636 22.6415L17.8272 15.7537L11.2636 8.86599C10.9121 8.49716 10.9121 7.89917 11.2636 7.53034Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>

                            </div>



                        </div>













                        {/*  <div class="relative bg-white rounded-[22px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)]  overflow-hidden px-[1.8vw] py-[1.8vh] mt-[4vh]">

                            <div className="flex justify-between items-center">
                                <div class=" text-[#2d3339] text-xl font-medium font-['Poppins'] ">#Order 23</div>
                                <div class=" text-[#646464] text-[16px] font-light font-['Poppins'] ">Ordered on 15 March 2024</div>
                            </div>



                            <div class="w-[65vw] h-[0px] border-2 border-[#cacaca] my-[1.5vh]"></div>


                            <div className="flex justify-between mt-[2vh]">

                                <div className="flex ">
                                    <img class="w-[88px] h-[88px]  rounded-[9.06px]" src={Image1} />




                                    <div className="flex flex-col ml-[1.5vw]">
                                        <div class=" text-[#2d3339] text-[19px] font-medium font-['Poppins']">Ear Buds</div>
                                        <div class=" text-[#64707d] text-[15px] font-light font-['Poppins'] mt-[-0.6vh]">Blue color | Wireless</div>

                                        <div class="mt-[0.9vh]">
                                            <div class=" bg-[#E6FFEB] rounded-[7px] inline-block py-[0.3vh] px-[1vw] ">
                                                <div class=" text-[#008526] text-base font-normal font-['Poppins'] text-[14px] ">Delivered</div>
                                            </div>
                                        </div>
                                    </div>


                                </div>




                                <div class="flex flex-col justify-center">
                                    <div class=" text-[#555555] text-[1.1rem] font-normal font-['Poppins']">Total</div>
                                    <div class=" text-black text-[20px] font-medium font-['Poppins'] mt-[-0.7vh]">₹750</div>
                                    <div data-svg-wrapper class="">
                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="30" height="30" rx="15" transform="matrix(-1 0 0 1 30 0.253723)" fill="#534FF2" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2636 7.53034C11.6151 7.16152 12.1849 7.16152 12.5364 7.53034L19.7364 15.0859C20.0879 15.4547 20.0879 16.0527 19.7364 16.4215L12.5364 23.9771C12.1849 24.3459 11.6151 24.3459 11.2636 23.9771C10.9121 23.6083 10.9121 23.0103 11.2636 22.6415L17.8272 15.7537L11.2636 8.86599C10.9121 8.49716 10.9121 7.89917 11.2636 7.53034Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>

                            </div>



                        </div> */}





                    </div>





                </div>




            </div>
        </>
    )
}

export default ProductListed

