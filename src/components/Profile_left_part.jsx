import React from "react"
import { Link } from 'react-router-dom'
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
import Image1 from "../assets/imageprofile.png"

function Profile_left_part() {
     return (
        <>
            <div className=' h-screen w-[25%] relative'>
                <div class=" bg-white rounded-2xl shadow-[2px_4px_12px_0px_rgba(0,0,0,0.10)] ml-[18px] mt-[25px] mb-[1vh] h-[92.5vh] ">
                    <div className=" mr-[1.2vw] pl-[1vw] pt-[2.5vh]">
                    <div className=" ">
                        
             
                            <div class=" relative ">
                                <div class="bg-[#f6f7ff] rounded-lg flex items-center p-4 pl-[1.8vw] mb-[2vh]">
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
                        <div class="w-[21.5vw] h-[0px] border border-[#e5e4ff]"></div>



                        <div class="  text-black text-lg font-medium font-['Poppins'] uppercase mt-[2vh] mb-[1vh]">Manage Orders</div>

                        <div class=" ">
                            <div class="   bg-[#e9ecff] rounded-[10px] border border-[#e5e4ff]  w-full">
                                <div class="flex  justify-normal items-center  py-[1.5vh] px-[0.5vw]">

                                    <div data-svg-wrapper class=" ">
                                        <svg width="28px" height="28px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.89735 9.23611V8.57639C9.89735 7.00166 10.5229 5.49144 11.6364 4.37794C12.7499 3.26444 14.2601 2.63889 15.8349 2.63889C17.4096 2.63889 18.9198 3.26444 20.0333 4.37794C21.1468 5.49144 21.7724 7.00166 21.7724 8.57639V9.23611H25.071C25.7993 9.23611 26.3904 9.82854 26.3904 10.5648V26.3994C26.3904 27.8508 25.2095 29.0278 23.7594 29.0278H7.91027C7.21295 29.0278 6.54415 28.7509 6.05082 28.2581C5.5575 27.7653 5.28 27.0968 5.2793 26.3994V10.5661C5.2793 9.82986 5.86645 9.23611 6.59874 9.23611H9.89735ZM11.8765 9.23611H19.7932V8.57639C19.7932 7.52657 19.3761 6.51975 18.6338 5.77742C17.8915 5.03509 16.8847 4.61805 15.8349 4.61805C14.785 4.61805 13.7782 5.03509 13.0359 5.77742C12.2936 6.51975 11.8765 7.52657 11.8765 8.57639V9.23611ZM9.89735 9.23611V14.5139H11.8765V9.23611H9.89735ZM19.7932 9.23611V14.5139H21.7724V9.23611H19.7932Z" fill="#313131" />
                                        </svg>
                                    </div>

                                    <div class="  text-[#292929] text-lg font-normal font-['Nirmala UI'] ml-[2vw]">Orders</div>
                                </div>
                            </div>
                        </div>

                        <div class=" ">
                            <div class="flex  py-[1.5vh] px-[0.5vw] justify-normal items-center">
                                <div data-svg-wrapper class=" ">
                                    <svg width="28px" height="28px" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.834 0.124268L24.709 6.98029V20.6924L12.834 27.5484L0.958984 20.6924V6.98029L12.834 0.124268ZM8.87559 12.9219L8.87565 22.216L11.5146 23.7397V14.4455L8.87559 12.9219ZM3.59789 9.87494V19.1688L6.23674 20.6924V11.3985L3.59789 9.87494ZM18.0287 6.17056L10.2619 10.6754L12.834 12.1604L20.6187 7.66588L18.0287 6.17056ZM12.834 3.17138L5.04924 7.66594L7.62599 9.15353L15.3929 4.64877L12.834 3.17138Z" fill="#313131" />
                                    </svg>
                                </div>
                                <div class=" text-[#292929] text-lg font-normal font-['Nirmala UI']  ml-[2vw]">Product Listed</div>
                            </div>
                        </div>

                        <div class="left-[20px] top-[369px]  text-black text-lg font-medium font-['Poppins'] uppercase mt-[2vh] mb-[1vh]">Activity</div>

                        <div class="  ">
                            <div class="bg-gradient-to-r from-[#394ff1] to-[#4d4ef2]  rounded-[10px] flex relative">
                                <div class="flex  py-[1.5vh] px-[0.5vw] justify-normal items-center">

                                    <div data-svg-wrapper class="">
                                        <svg width="28px" height="28px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.55101 23.3023L5.59502 26.2583C5.18804 26.6653 4.72193 26.7565 4.19671 26.532C3.67148 26.3075 3.4093 25.9057 3.41016 25.3265V5.30932C3.41016 4.60245 3.66206 3.99754 4.16586 3.4946C4.66967 2.99165 5.27457 2.73975 5.98058 2.73889H26.544C27.2508 2.73889 27.8562 2.99079 28.36 3.4946C28.8638 3.9984 29.1153 4.60331 29.1144 5.30932V20.7319C29.1144 21.4387 28.8629 22.0441 28.36 22.5479C27.857 23.0517 27.2517 23.3031 26.544 23.3023H8.55101ZM9.83622 18.1614H17.5475C17.9116 18.1614 18.2171 18.0381 18.4639 17.7913C18.7106 17.5445 18.8336 17.2395 18.8327 16.8762C18.8319 16.5129 18.7085 16.2079 18.4626 15.9612C18.2167 15.7144 17.9116 15.591 17.5475 15.591H9.83622C9.47208 15.591 9.16705 15.7144 8.92115 15.9612C8.67524 16.2079 8.55186 16.5129 8.55101 16.8762C8.55015 17.2395 8.67353 17.545 8.92115 17.7926C9.16877 18.0402 9.47379 18.1632 9.83622 18.1614ZM9.83622 14.3058H22.6883C23.0525 14.3058 23.3579 14.1824 23.6047 13.9357C23.8515 13.6889 23.9744 13.3839 23.9736 13.0206C23.9727 12.6573 23.8493 12.3523 23.6034 12.1055C23.3575 11.8588 23.0525 11.7354 22.6883 11.7354H9.83622C9.47208 11.7354 9.16705 11.8588 8.92115 12.1055C8.67524 12.3523 8.55186 12.6573 8.55101 13.0206C8.55015 13.3839 8.67353 13.6893 8.92115 13.9369C9.16877 14.1846 9.47379 14.3075 9.83622 14.3058ZM9.83622 10.4502H22.6883C23.0525 10.4502 23.3579 10.3268 23.6047 10.08C23.8515 9.83326 23.9744 9.52824 23.9736 9.16495C23.9727 8.80167 23.8493 8.49664 23.6034 8.24988C23.3575 8.00312 23.0525 7.87974 22.6883 7.87974H9.83622C9.47208 7.87974 9.16705 8.00312 8.92115 8.24988C8.67524 8.49664 8.55186 8.80167 8.55101 9.16495C8.55015 9.52824 8.67353 9.83369 8.92115 10.0813C9.16877 10.3289 9.47379 10.4519 9.83622 10.4502Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div class="  text-[#ebebeb] text-lg font-normal font-['Nirmala UI'] ml-[2vw]">Chats</div>
                                    <div class=" ">
                                        <div class=" p-2.5  justify-start items-center gap-2.5 inline-flex absolute right-[1vw] top-[0.5vh] ">
                                            <div class=" w-[22px] h-[22px] bg-[#fff9f9] rounded-full  flex justify-center items-center">
                                                <div class=" text-black text-[13px] font-normal font-['Roboto Flex']">4</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>



                        <div class=" ">
                            <div class="flex py-[1.5vh] px-[0.5vw] justify-normal items-center relative">

                                <div data-svg-wrapper class=" ">
                                    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM12 2C16.97 2 21 6.043 21 11.031V20H3V11.031C3 6.043 7.03 2 12 2ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z" fill="black" />
                                    </svg>
                                </div>
                                <div class="  text-[#292929] text-lg font-normal font-['Nirmala UI']  ml-[2vw]">Notifications</div>
                                <div class=" ">
                                    <div class="h-[42px] p-2.5  justify-start items-center gap-2.5 inline-flex absolute right-[1vw] top-[0.2vh]">
                                        <div class="w-[22px] h-[22px] bg-[#f10000] rounded-full flex justify-center items-center">
                                            <div class=" text-white text-[13px] font-normal font-['Roboto Flex']">3</div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class=" ">
                            <div class="flex  py-[1.5vh] px-[0.5vw] justify-normal items-center">

                                <div data-svg-wrapper class=" ">
                                    <svg width="28px" height="28px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7056 6.28172L13.0889 6.87562C13.1688 6.95853 13.2646 7.02447 13.3706 7.06951C13.4765 7.11455 13.5905 7.13776 13.7056 7.13776C13.8208 7.13776 13.9347 7.11455 14.0407 7.06951C14.1467 7.02447 14.2425 6.95853 14.3224 6.87562L13.7056 6.28172ZM10.7658 20.9261C9.03432 19.5613 7.14181 18.2284 5.63991 16.538C4.16885 14.8797 3.14093 12.946 3.14093 10.4356H1.42773C1.42773 13.4806 2.6955 15.8037 4.35958 17.6756C5.99283 19.5144 8.07608 20.9878 9.70475 22.2715L10.7658 20.9261ZM3.14093 10.4356C3.14093 7.98006 4.52862 5.91966 6.42341 5.05278C8.26453 4.21103 10.7384 4.43375 13.0889 6.87562L14.3224 5.68895C11.5356 2.79137 8.29651 2.31281 5.71072 3.49492C3.18205 4.6519 1.42773 7.33819 1.42773 10.4356H3.14093ZM9.70475 22.2715C10.2907 22.733 10.9188 23.2241 11.555 23.5964C12.1912 23.9687 12.9176 24.2703 13.7056 24.2703V22.5571C13.3516 22.5571 12.9358 22.42 12.4196 22.1174C11.9022 21.8158 11.3666 21.4001 10.7658 20.9261L9.70475 22.2715ZM17.7065 22.2715C19.3352 20.9866 21.4184 19.5156 23.0517 17.6756C24.7158 15.8025 25.9835 13.4806 25.9835 10.4356H24.2703C24.2703 12.946 23.2424 14.8797 21.7714 16.538C20.2695 18.2284 18.3769 19.5613 16.6455 20.9261L17.7065 22.2715ZM25.9835 10.4356C25.9835 7.33819 24.2304 4.6519 21.7005 3.49492C19.1148 2.31281 15.878 2.79137 13.0889 5.68781L14.3224 6.87562C16.6729 4.43489 19.1467 4.21103 20.9879 5.05278C22.8827 5.91966 24.2703 7.97892 24.2703 10.4356H25.9835ZM16.6455 20.9261C16.0447 21.4001 15.5091 21.8158 14.9917 22.1174C14.4743 22.4189 14.0597 22.5571 13.7056 22.5571V24.2703C14.4937 24.2703 15.2201 23.9676 15.8563 23.5964C16.4936 23.2241 17.1206 22.733 17.7065 22.2715L16.6455 20.9261Z" fill="black" />
                                    </svg>
                                </div>
                                <div class=" text-[#292929] text-lg font-normal font-['Nirmala UI']  ml-[2vw]">Wishlist</div>
                            </div>
                        </div>
                        <div class=" ">
                            <div class="flex  py-[1.5vh] px-[0.5vw] justify-normal items-center">

                                <div data-svg-wrapper class=" ">
                                    <svg width="28px" height="28px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.0026 8.00002H8.0026C6.52984 8.00002 5.33594 9.19392 5.33594 10.6667V21.3333C5.33594 22.8061 6.52984 24 8.0026 24H24.0026C25.4754 24 26.6693 22.8061 26.6693 21.3333V10.6667C26.6693 9.19392 25.4754 8.00002 24.0026 8.00002Z" stroke="black" stroke-width="1.44" />
                                        <path d="M5.33594 12L14.8106 16.7373C15.1807 16.9223 15.5888 17.0186 16.0026 17.0186C16.4164 17.0186 16.8245 16.9223 17.1946 16.7373L26.6693 12" stroke="black" stroke-width="1.44" />
                                    </svg>
                                </div>
                                <div class="  text-[#292929] text-lg font-normal font-['Nirmala UI']  ml-[2vw]">Contact Us</div>
                            </div>
                        </div>

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