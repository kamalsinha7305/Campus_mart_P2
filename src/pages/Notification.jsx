import React from "react"
import Profile_left_part from '../components/Profile_left_part';
import Image1 from '../assets/command.png'
import Image3 from '../assets/tick.png'
function Notification() {

    return (
        <>
            <div className='flex'>
                <Profile_left_part />

                <div className=' h-screen w-[73%] flex flex-col '>

                    <div className="ml-[3vw]">
                        <div className="mt-[5vh] mb-[2vh] ">
                            <div class="text-[#292929] text-[28px] font-medium font-['Poppins']">Notifications</div>
                        </div>




                        <div className="flex items-center gap-[2vw]">




                            <div class="relative bg-[#ebeeff] rounded-[12px]  overflow-hidden flex   items-center px-[0.7vw] py-[1.8vh] w-[64vw]">

                                <div class="bg-[#534ff2] rounded-[5px] p-[5px] ml-[1vw] flex justify-center items-center relative ">
                                    <div data-svg-wrapper class=" ">
                                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.17217 19.3608L3.80574 21.7272C3.47993 22.053 3.10679 22.1261 2.68632 21.9464C2.26585 21.7667 2.05596 21.445 2.05664 20.9813V4.95645C2.05664 4.39056 2.2583 3.9063 2.66163 3.50366C3.06495 3.10103 3.54921 2.89937 4.11441 2.89868H20.5765C21.1424 2.89868 21.627 3.10034 22.0303 3.50366C22.4337 3.90699 22.635 4.39125 22.6343 4.95645V17.303C22.6343 17.8689 22.433 18.3535 22.0303 18.7568C21.6277 19.1602 21.1431 19.3615 20.5765 19.3608H6.17217ZM5.29762 17.303H20.5765V4.95645H4.11441V18.4605L5.29762 17.303ZM7.20105 15.2453H13.3744C13.6659 15.2453 13.9104 15.1465 14.1079 14.949C14.3055 14.7514 14.4039 14.5072 14.4032 14.2164C14.4025 13.9256 14.3038 13.6814 14.1069 13.4838C13.9101 13.2863 13.6659 13.1875 13.3744 13.1875H7.20105C6.90954 13.1875 6.66535 13.2863 6.46849 13.4838C6.27163 13.6814 6.17286 13.9256 6.17217 14.2164C6.17149 14.5072 6.27026 14.7518 6.46849 14.95C6.66672 15.1482 6.91091 15.2466 7.20105 15.2453ZM7.20105 12.1586H17.4899C17.7814 12.1586 18.0259 12.0599 18.2235 11.8623C18.421 11.6648 18.5194 11.4206 18.5188 11.1297C18.5181 10.8389 18.4193 10.5947 18.2224 10.3972C18.0256 10.1996 17.7814 10.1009 17.4899 10.1009H7.20105C6.90954 10.1009 6.66535 10.1996 6.46849 10.3972C6.27163 10.5947 6.17286 10.8389 6.17217 11.1297C6.17149 11.4206 6.27026 11.6651 6.46849 11.8633C6.66672 12.0616 6.91091 12.16 7.20105 12.1586ZM7.20105 9.07198H17.4899C17.7814 9.07198 18.0259 8.9732 18.2235 8.77566C18.421 8.57811 18.5194 8.33393 18.5188 8.04309C18.5181 7.75226 18.4193 7.50808 18.2224 7.31053C18.0256 7.11299 17.7814 7.01421 17.4899 7.01421H7.20105C6.90954 7.01421 6.66535 7.11299 6.46849 7.31053C6.27163 7.50808 6.17286 7.75226 6.17217 8.04309C6.17149 8.33393 6.27026 8.57846 6.46849 8.77669C6.66672 8.97492 6.91091 9.07335 7.20105 9.07198Z" fill="white" fill-opacity="0.72" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-col ml-[2vw]">
                                    <div class="  text-black text-lg font-medium font-['Poppins']">New Message</div>
                                    <div class=" text-black text-sm font-light font-['Poppins']">Rahul sent you a message about MacBook Pro</div>
                                </div>

                                <div className=" flex flex-row absolute right-[2.5vw] gap-[4.3vw]">
                                    <div class="">
                                        <div class=" bg-white rounded-[4px]">
                                            <button class=" text-[#534ff2] text-base font-normal font-['Poppins'] py-[0.3vh] px-[1.5vw]">Reply</button>
                                        </div>
                                    </div>
                                    <div class=" text-[#1e1e1e] text-base font-normal font-['Poppins']">2 hours ago</div>
                                </div>
                            </div>


                            <div class=" ">
                                <div class="w-10 h-10  bg-[#534ff2] rounded-md flex justify-center items-center">
                                    <div data-svg-wrapper class="">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.75 8.75L6.25 12.25L13.25 4.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>




                        </div>



                        <div className="flex items-center gap-[2vw] mt-[2.4vh]">

                            <div class="relative bg-[#ebeeff] rounded-[12px]  overflow-hidden flex   items-center px-[0.7vw] py-[1.8vh] w-[64vw]">

                                <div class="bg-[#534ff2] rounded-[5px] p-[5px] ml-[1vw] flex justify-center items-center relative ">
                                    <div data-svg-wrapper class=" ">
                                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.17217 19.3608L3.80574 21.7272C3.47993 22.053 3.10679 22.1261 2.68632 21.9464C2.26585 21.7667 2.05596 21.445 2.05664 20.9813V4.95645C2.05664 4.39056 2.2583 3.9063 2.66163 3.50366C3.06495 3.10103 3.54921 2.89937 4.11441 2.89868H20.5765C21.1424 2.89868 21.627 3.10034 22.0303 3.50366C22.4337 3.90699 22.635 4.39125 22.6343 4.95645V17.303C22.6343 17.8689 22.433 18.3535 22.0303 18.7568C21.6277 19.1602 21.1431 19.3615 20.5765 19.3608H6.17217ZM5.29762 17.303H20.5765V4.95645H4.11441V18.4605L5.29762 17.303ZM7.20105 15.2453H13.3744C13.6659 15.2453 13.9104 15.1465 14.1079 14.949C14.3055 14.7514 14.4039 14.5072 14.4032 14.2164C14.4025 13.9256 14.3038 13.6814 14.1069 13.4838C13.9101 13.2863 13.6659 13.1875 13.3744 13.1875H7.20105C6.90954 13.1875 6.66535 13.2863 6.46849 13.4838C6.27163 13.6814 6.17286 13.9256 6.17217 14.2164C6.17149 14.5072 6.27026 14.7518 6.46849 14.95C6.66672 15.1482 6.91091 15.2466 7.20105 15.2453ZM7.20105 12.1586H17.4899C17.7814 12.1586 18.0259 12.0599 18.2235 11.8623C18.421 11.6648 18.5194 11.4206 18.5188 11.1297C18.5181 10.8389 18.4193 10.5947 18.2224 10.3972C18.0256 10.1996 17.7814 10.1009 17.4899 10.1009H7.20105C6.90954 10.1009 6.66535 10.1996 6.46849 10.3972C6.27163 10.5947 6.17286 10.8389 6.17217 11.1297C6.17149 11.4206 6.27026 11.6651 6.46849 11.8633C6.66672 12.0616 6.91091 12.16 7.20105 12.1586ZM7.20105 9.07198H17.4899C17.7814 9.07198 18.0259 8.9732 18.2235 8.77566C18.421 8.57811 18.5194 8.33393 18.5188 8.04309C18.5181 7.75226 18.4193 7.50808 18.2224 7.31053C18.0256 7.11299 17.7814 7.01421 17.4899 7.01421H7.20105C6.90954 7.01421 6.66535 7.11299 6.46849 7.31053C6.27163 7.50808 6.17286 7.75226 6.17217 8.04309C6.17149 8.33393 6.27026 8.57846 6.46849 8.77669C6.66672 8.97492 6.91091 9.07335 7.20105 9.07198Z" fill="white" fill-opacity="0.72" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-col ml-[2vw]">
                                    <div class="  text-black text-lg font-medium font-['Poppins']">New Message</div>
                                    <div class=" text-black text-sm font-light font-['Poppins']">Rahul sent you a message about MacBook Pro</div>
                                </div>

                                <div className=" flex flex-row absolute right-[2.5vw] gap-[4.3vw]">
                                    <div class="">
                                        <div class=" bg-white rounded-[4px]">
                                            <button class=" text-[#534ff2] text-base font-normal font-['Poppins'] py-[0.3vh] px-[1.5vw]">Reply</button>
                                        </div>
                                    </div>
                                    <div class=" text-[#1e1e1e] text-base font-normal font-['Poppins']">2 hours ago</div>
                                </div>
                            </div>


                            <div class=" ">
                                <div class="w-10 h-10  bg-[#534ff2] rounded-md flex justify-center items-center">
                                    <div data-svg-wrapper class="">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.75 8.75L6.25 12.25L13.25 4.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>




                        </div>




                        <div className="flex items-center gap-[2vw] mt-[2.4vh]">

                            <div class="relative bg-[#ebeeff] rounded-[12px]  overflow-hidden flex   items-center px-[0.7vw] py-[1.8vh] w-[64vw]">

                                <div class="bg-[#08c612] rounded-[5px] p-[5px] ml-[1vw] flex justify-center items-center relative ">
                                    <div data-svg-wrapper class=" ">
                                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.17217 19.3608L3.80574 21.7272C3.47993 22.053 3.10679 22.1261 2.68632 21.9464C2.26585 21.7667 2.05596 21.445 2.05664 20.9813V4.95645C2.05664 4.39056 2.2583 3.9063 2.66163 3.50366C3.06495 3.10103 3.54921 2.89937 4.11441 2.89868H20.5765C21.1424 2.89868 21.627 3.10034 22.0303 3.50366C22.4337 3.90699 22.635 4.39125 22.6343 4.95645V17.303C22.6343 17.8689 22.433 18.3535 22.0303 18.7568C21.6277 19.1602 21.1431 19.3615 20.5765 19.3608H6.17217ZM5.29762 17.303H20.5765V4.95645H4.11441V18.4605L5.29762 17.303ZM7.20105 15.2453H13.3744C13.6659 15.2453 13.9104 15.1465 14.1079 14.949C14.3055 14.7514 14.4039 14.5072 14.4032 14.2164C14.4025 13.9256 14.3038 13.6814 14.1069 13.4838C13.9101 13.2863 13.6659 13.1875 13.3744 13.1875H7.20105C6.90954 13.1875 6.66535 13.2863 6.46849 13.4838C6.27163 13.6814 6.17286 13.9256 6.17217 14.2164C6.17149 14.5072 6.27026 14.7518 6.46849 14.95C6.66672 15.1482 6.91091 15.2466 7.20105 15.2453ZM7.20105 12.1586H17.4899C17.7814 12.1586 18.0259 12.0599 18.2235 11.8623C18.421 11.6648 18.5194 11.4206 18.5188 11.1297C18.5181 10.8389 18.4193 10.5947 18.2224 10.3972C18.0256 10.1996 17.7814 10.1009 17.4899 10.1009H7.20105C6.90954 10.1009 6.66535 10.1996 6.46849 10.3972C6.27163 10.5947 6.17286 10.8389 6.17217 11.1297C6.17149 11.4206 6.27026 11.6651 6.46849 11.8633C6.66672 12.0616 6.91091 12.16 7.20105 12.1586ZM7.20105 9.07198H17.4899C17.7814 9.07198 18.0259 8.9732 18.2235 8.77566C18.421 8.57811 18.5194 8.33393 18.5188 8.04309C18.5181 7.75226 18.4193 7.50808 18.2224 7.31053C18.0256 7.11299 17.7814 7.01421 17.4899 7.01421H7.20105C6.90954 7.01421 6.66535 7.11299 6.46849 7.31053C6.27163 7.50808 6.17286 7.75226 6.17217 8.04309C6.17149 8.33393 6.27026 8.57846 6.46849 8.77669C6.66672 8.97492 6.91091 9.07335 7.20105 9.07198Z" fill="white" fill-opacity="0.72" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-col ml-[2vw]">
                                    <div class="  text-black text-lg font-medium font-['Poppins']">New Message</div>
                                    <div class=" text-black text-sm font-light font-['Poppins']">Rahul sent you a message about MacBook Pro</div>
                                </div>

                                <div className=" flex flex-row absolute right-[2.5vw] gap-[4.3vw]">
                                    <div class="">
                                        <div class=" bg-white rounded-[4px]">
                                            <button class=" text-[#534ff2] text-base font-normal font-['Poppins'] py-[0.3vh] px-[1.5vw]">Reply</button>
                                        </div>
                                    </div>
                                    <div class=" text-[#1e1e1e] text-base font-normal font-['Poppins']">2 hours ago</div>
                                </div>
                            </div>


                            <div class=" ">
                                <div class="w-10 h-10  bg-[#534ff2] rounded-md flex justify-center items-center">
                                    <div data-svg-wrapper class="">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.75 8.75L6.25 12.25L13.25 4.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
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

export default Notification 