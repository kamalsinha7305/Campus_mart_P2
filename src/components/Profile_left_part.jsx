import React from "react"
import { Link } from 'react-router-dom'

import Image1 from "../assets/imageprofile.png"
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase"
import { MessageSquare, Bell, Heart, Mail } from "lucide-react";

function Profile_left_part() {

    const [activeItem, setActiveItem] = useState(null);
    const handleItemClick = (index) => {
        setActiveItem(index === activeItem ? null : index); // Toggle active state
    };
    const [userDetails, setUserDetails] = useState(null);
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);

            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
            } else {
                console.log("User is not logged in");
            }
        });
    };
    useEffect(() => {
        fetchUserData();
    }, []);


    return (
        <>
            <div className='hidden md:block h-screen w-[25%] relative bg-[#FBFBFB]'>
                <div class=" bg-white rounded-2xl shadow-[2px_4px_12px_0px_rgba(0,0,0,0.10)] ml-[1.5vw] mr-[1vw] mt-[25px] mb-[1vh] h-[92.5vh]  ">
                    <div className=" mr-[1.2vw] pl-[1vw] pt-[2.5vh] ">
                       
                       <Link to='/profile'>
                        <div className=" ">


                            <div class=" relative ">
                                <div class="bg-[#f6f7ff] rounded-lg flex items-center p-4 pl-[1.8vw] mb-[2vh] transition-all duration-300 cursor-pointer hover:bg-[#e9ecff] hover:scale-105">
                                    <img class=" rounded-[30.49px] w-[40px] h-[40spx] mr-[1vw]" src={Image1} />

                                    <div className="flex flex-col ">
                                        <div class="w-[177px]   text-black text-[16px] font-normal font-['Poppins']">Abhishek Sharma</div>
                                        <div class="w-[353px]  text-[#979797] text-[12px] font-normal font-['Poppins']">abhinav.sharma2022@vitstudet.ac.in</div>
                                    </div>

                                    <div data-svg-wrapper class=" absolute right-[1vw] top-[1vh] ">
                                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.92094 1.94591C4.22114 1.64571 4.70785 1.64571 5.00805 1.94591L11.1577 8.09553C11.4579 8.39572 11.4579 8.88244 11.1577 9.18263L5.00805 15.3322C4.70785 15.6324 4.22114 15.6324 3.92094 15.3322C3.62075 15.0321 3.62075 14.5453 3.92094 14.2451L9.527 8.63908L3.92094 3.03302C3.62075 2.73282 3.62075 2.24611 3.92094 1.94591Z" fill="#4F4F4F" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </Link>
                        <div class="w-[21.5vw] h-[0px] border border-[#e5e4ff]"></div>



                        <div class="  text-black text-[17px] font-medium font-['Poppins'] uppercase mt-[2vh] mb-[1vh]">Manage Orders</div>
                        <Link to='/myorders'>
                        <div class=" ">
                            <div class="   bg-[#e9ecff] rounded-[10px] border border-[#e5e4ff]  w-full">
                                <div class="flex  justify-normal items-center  py-[1.5vh] px-[0.5vw]">

                                    <div data-svg-wrapper class=" ">
                                        <svg width="24px" height="24px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.89735 9.23611V8.57639C9.89735 7.00166 10.5229 5.49144 11.6364 4.37794C12.7499 3.26444 14.2601 2.63889 15.8349 2.63889C17.4096 2.63889 18.9198 3.26444 20.0333 4.37794C21.1468 5.49144 21.7724 7.00166 21.7724 8.57639V9.23611H25.071C25.7993 9.23611 26.3904 9.82854 26.3904 10.5648V26.3994C26.3904 27.8508 25.2095 29.0278 23.7594 29.0278H7.91027C7.21295 29.0278 6.54415 28.7509 6.05082 28.2581C5.5575 27.7653 5.28 27.0968 5.2793 26.3994V10.5661C5.2793 9.82986 5.86645 9.23611 6.59874 9.23611H9.89735ZM11.8765 9.23611H19.7932V8.57639C19.7932 7.52657 19.3761 6.51975 18.6338 5.77742C17.8915 5.03509 16.8847 4.61805 15.8349 4.61805C14.785 4.61805 13.7782 5.03509 13.0359 5.77742C12.2936 6.51975 11.8765 7.52657 11.8765 8.57639V9.23611ZM9.89735 9.23611V14.5139H11.8765V9.23611H9.89735ZM19.7932 9.23611V14.5139H21.7724V9.23611H19.7932Z" fill="#313131" />
                                        </svg>
                                    </div>

                                    <div class="  text-[#292929] text-[17px] font-normal font-['Nirmala UI'] ml-[2vw]">Orders</div>
                                </div>
                            </div>
                        </div>
                        </Link>


                       <Link to='/productlisted'>
                        <div class=" ">
                            <div class="flex  py-[1.5vh] px-[0.8vw] justify-normal items-center">
                                <div data-svg-wrapper class=" ">
                                    <svg width="24px" height="24px" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.834 0.124268L24.709 6.98029V20.6924L12.834 27.5484L0.958984 20.6924V6.98029L12.834 0.124268ZM8.87559 12.9219L8.87565 22.216L11.5146 23.7397V14.4455L8.87559 12.9219ZM3.59789 9.87494V19.1688L6.23674 20.6924V11.3985L3.59789 9.87494ZM18.0287 6.17056L10.2619 10.6754L12.834 12.1604L20.6187 7.66588L18.0287 6.17056ZM12.834 3.17138L5.04924 7.66594L7.62599 9.15353L15.3929 4.64877L12.834 3.17138Z" fill="#313131" />
                                    </svg>
                                </div>
                                <div class=" text-[#292929] text-[17px] font-normal font-['Nirmala UI']  ml-[2vw]">Product Listed</div>
                            </div>
                        </div>
                        </Link>

                        <div class=" text-black text-[17px] font-medium font-['Poppins'] uppercase mt-[2vh] mb-[1vh]">Activity</div>

                        <div class=" pb-[0.2vh]">
                            <div className={`flex py-[1.2vh] px-[0.8vw] justify-normal items-center  relative rounded-lg transition-all duration-300 cursor-pointer bg-[#e9ecff] hover:bg-[#e9ecff] hover:scale-105 ${activeItem === 0 ? 'bg-gradient-to-r from-[#394ff1] to-[#4d4ef2] text-[#ffffff] ' : 'bg-white'}   `}
                                onClick={() => handleItemClick(0)}
                            >            <div data-svg-wrapper class="">
                                        <MessageSquare size={22} ccolor={activeItem === 0 ? "white" : "black"} />
                                    </div>
                                    <div class="text-[17px] font-normal font-['Nirmala UI'] ml-[2vw] ">Chats</div>
                                    <div class=" ">
                                        <div className=" p-2.5  justify-start items-center gap-2.5 inline-flex absolute right-[1vw] top-[0.5vh] ">
                                            <div className={` w-[22px] h-[22px]   ${activeItem===0? "bg-white":"bg-[#f10000]"} rounded-full  flex justify-center items-center`}>
                                                <div className={` text-[13px] font-normal font-['Roboto Flex'] ${activeItem===0?"text-black":"text-white"} `}>4</div>
                                            </div>
                                        </div>

                                    </div>
                               
                            </div>

                        </div>


                        <Link to='/notification'>
                        <div className="pb-[0.2vh] ">
                            <div
                                className={`flex py-[1.2vh] px-[0.8vw] justify-normal items-center relative rounded-lg  transition-all duration-300 cursor-pointer hover:bg-[#e9ecff] hover:scale-105 ${activeItem === 1 ? 'bg-gradient-to-r from-[#394ff1] to-[#4d4ef2] text-white' : 'bg-white'}`}
                                onClick={() => handleItemClick(1)}
                            >

                                <div data-svg-wrapper class=" ">
                                    <Bell size={22} color={activeItem === 1 ? "white" : "black"} />
                                </div>
                                <div className="text-[17px] font-normal font-['Nirmala UI']  ml-[2vw]">Notifications</div>
                                <div className=" ">
                                    <div className="h-[42px] p-2.5  justify-start items-center gap-2.5 inline-flex absolute right-[1vw] top-[0.2vh]">
                                        <div className={`w-[22px] h-[22px]  ${activeItem===1? "bg-white":"bg-[#f10000]"} rounded-full flex justify-center items-center`}>
                                            <div className={`text-[13px] font-normal font-['Roboto Flex'] ${activeItem===1?"text-black":"text-white"}`}>3</div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </Link>

                        <div class=" pb-[0.2vh]">
                            <div className={`py-[1.2vh] text-[#292929] px-[0.5vw] rounded-[10px] flex relative ${activeItem === 2 ? 'bg-gradient-to-r from-[#394ff1] to-[#4d4ef2] text-white' : 'bg-white'}  transition-all duration-300 cursor-pointer hover:bg-[#e9ecff] hover:scale-105`}
                                onClick={() => handleItemClick(2)}  >

                                <div data-svg-wrapper class=" ">
                                    <Heart size={22} color={activeItem === 2 ? "white" : "black"}/>
                                </div>
                                <div class="  text-[17px] font-normal font-['Nirmala UI']  ml-[2vw]">Wishlist</div>
                            </div>
                        </div>
                        <div class=" pb-[0.3vh]">
                            <div className={`flex text-[#292929] py-[1.2vh] px-[0.8vw] justify-normal items-center rounded-lg  transition-all duration-300 cursor-pointer hover:bg-[#e9ecff] hover:scale-105 ${activeItem === 3 ? 'bg-gradient-to-r from-[#394ff1] to-[#4d4ef2] text-white' : 'bg-white'}`}
                                onClick={() => handleItemClick(3)}>

                                <div data-svg-wrapper class=" ">
                                    <Mail size={22} color={activeItem === 3 ? "white" : "black"} />
                                </div>
                                <div class="   text-[17px] font-normal font-['Nirmala UI']  ml-[2vw]">Contact Us</div>
                            </div>
                        </div>
                        <Link to='/termscondition'>
                        <div class=" pb-[0.2vh]">
                            <div className={`flex text-[#292929] py-[1.2vh] px-[0.8vw] justify-normal items-center rounded-lg  transition-all duration-300 cursor-pointer hover:bg-[#e9ecff] hover:scale-105 ${activeItem === 4 ? 'bg-gradient-to-r from-[#394ff1] to-[#4d4ef2] text-white' : 'bg-white'}`}
                                onClick={() => handleItemClick(4)}>

                                <div data-svg-wrapper class=" ">
                                    <Mail size={22} color={activeItem === 4 ? "white" : "black"} />
                                </div>
                                <div class="   text-[17px] font-normal font-['Nirmala UI']  ml-[2vw]">Terms and Condition</div>
                            </div>
                        </div>
                        </Link>

                        <div className=' absolute bottom-[5.5vh] left-[7vw] '>
                            <div className='flex  justify-center items-center text-center p-15px '>
                                <div data-svg-wrapper className="">
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.2247 7.41068C16.2247 9.57227 14.1166 11.3246 11.955 11.3246C9.79341 11.3246 7.68528 9.57227 7.68528 7.41068C7.68528 5.24909 5.52377 2.78516 7.68537 2.78516C9.84696 2.78516 16.2247 5.24909 16.2247 7.41068Z" stroke="#534FF2" stroke-width="1.42324" />
                                        <path d="M17.1859 8.12239C17.1859 10.284 15.0778 12.0363 12.9162 12.0363C10.7546 12.0363 8.64648 10.284 8.64648 8.12239C8.64648 5.9608 13.7078 1.0062 15.8694 1.0062C18.0309 1.0062 17.1859 5.9608 17.1859 8.12239Z" stroke="#5383AB" stroke-width="1.42324" />
                                        <path d="M4.42222 8.64887C4.66816 7.70981 5.51669 7.0549 6.48742 7.0549H17.6707C18.6353 7.0549 19.4801 7.7018 19.7317 8.63308L22.6148 19.3074C22.9813 20.6642 21.9593 21.9989 20.5538 21.9989H3.69177C2.29304 21.9989 1.27219 20.6763 1.62657 19.3232L4.42222 8.64887Z" fill="#012436" />
                                    </svg>
                                </div>
                                <span className='text-[#012436] text-[20px] font-poppins font-semibold mr-[5px]' >Campus</span> <span className=' text-[#009ef3] text-[22px] font-poppins font-semibold'>Mart</span>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile_left_part