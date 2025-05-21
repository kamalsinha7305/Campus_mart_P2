import { Link, useLocation } from 'react-router-dom'
import Image1 from "../assets/imageprofile.png"
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase"
import { MessageSquare, Bell, Heart, Mail, ReceiptText, ShoppingBag, ShoppingCart } from "lucide-react";
import whitebag from "../assets/whitebag.png";
import { useTheme } from "./ThemeContext";
function Profile_left_part() {
      const { darkMode, toggleDarkMode } = useTheme();
    /* 
        const [activeItem, setActiveItem] = useState(null); */
    const menu = [
        { path: "/", label: "Chats", icon: MessageSquare, badge: 4 },
        { path: "/notification", label: "Notifications", icon: Bell, badge: 3 },
        { path: "/wishlist", label: "Wishlist", icon: Heart },
        { path: "/", label: "Contact Us", icon: Mail },
        { path: "/termscondition", label: "Terms & Cond.", icon: ReceiptText },

    ];
    const { pathname } = useLocation();
    const itemClasses = active => `
    relative flex items-center px-[4vw] py-[1.2vh] md:px-[1.4vw] lg:px-[0.8vw] lg:py-[1.2vh] md:py-[1.2vh]  rounded-lg transition-all duration-300 cursor-pointer
    hover:bg-[#E9ECFF] dark:hover:bg-[#131313] hover:scale-105  font-['Poppins']
    ${active
            ? "bg-gradient-to-r from-[#394ff1] to-[#4d4ef2] text-white"
            : " text-[#292929]  dark:text-white"}
  `;
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
         
                <div class="bg-white  dark:bg-[#1A1D20] md:rounded-2xl md:shadow-[2px_4px_12px_0px_rgba(0,0,0,0.10)] h- md:h-[82.5vh]  ">
                    <div className=" px-[4.2vw]  md:pl-[1.2vw] md:pr-[1.3vw]   md:pt-[2.5vh] relative">
                        <Link to='/profile'>
                            <div className=" ">
                                <div class=" relative ">
                                    <div class="bg-[#f6f7ff] dark:bg-[#282A2C] rounded-lg flex items-center p-5 md:p-4  pl-[3.5vw] md:pl-[1.8vw] lg:pl-[1.4vw]  md:mx-0 mb-[2vh] md:mb-[2vh] transition-all duration-300 cursor-pointer hover:bg-[#e9ecff] hover:scale-105 ">
                                        <img class=" rounded-full w-[47px] h-[47px] lg:w-[55px] lg:h-[55px] md:mr-[1vw] mr-[2.5vw] " src={Image1} />
                                        <div className="flex flex-col ">
                                            <div class=" text-black dark:text-white  text-[13px] md:text-[14px] lg:text-[16px] font-normal font-['Poppins']">Kamal Sinha</div>
                                            <div class=" text-[#979797] text-[10px] md:text-[9px] lg:text-[0.8rem] font-normal font-['Poppins']">Kamal.sinha2022@vitstudent.ac.in</div>
                                        </div>
                                       {/*  <div data-svg-wrapper class="  hidden md:block absolute right-[1vw] top-[1vh] ">
                                            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.92094 1.94591C4.22114 1.64571 4.70785 1.64571 5.00805 1.94591L11.1577 8.09553C11.4579 8.39572 11.4579 8.88244 11.1577 9.18263L5.00805 15.3322C4.70785 15.6324 4.22114 15.6324 3.92094 15.3322C3.62075 15.0321 3.62075 14.5453 3.92094 14.2451L9.527 8.63908L3.92094 3.03302C3.62075 2.73282 3.62075 2.24611 3.92094 1.94591Z" fill="#4F4F4F" />
                                            </svg>
                                        </div> */}
                                    </div>

                                </div>
                            </div>
                        </Link>
                        <div class="w-full h-[0px]  border border-[#e5e4ff]"></div>
                        <div class="  text-black dark:text-[#F2F3FF]   md:text-[0.9rem] lg:text-[17px] font-medium font-['Poppins'] uppercase mt-[2vh] mb-[1vh]">Manage Orders</div>
                        <Link to="/myorders" className="block pb-[0.2vh]">
                            <div className={itemClasses(pathname === "/myorders")}>
                                <div
                                    data-svg-wrapper
                                    className={pathname === "/myorders" ? "text-white" : "text-black dark:text-white"}>
                                    <ShoppingBag size={22} />
                                </div>
                                <span className="md:ml-[2vw] ml-[3vw] md:text-[0.93rem] lg:text-[17px] font-normal font-['Nirmala UI']">
                                    Orders
                                </span>
                            </div>
                        </Link>
                        <Link to="/productlisted" className="block pb-[0.2vh]">
                            <div className={itemClasses(pathname === "/productlisted")}>
                                <div
                                    data-svg-wrapper
                                    className={pathname === "/productlisted" ? "text-white" : "text-black dark:text-white"}>
                                    <ShoppingCart size={22} />
                                </div>
                                <span className="md:ml-[2vw] ml-[3vw]  md:text-[0.93rem] lg:text-[17px] font-normal font-['Nirmala UI']">
                                    Product Listed
                                </span>
                            </div>
                        </Link>
                        <div class=" text-black dark:text-[#F2F3FF]   text-[17px] font-medium font-['Poppins'] uppercase mt-[2vh] mb-[1vh]">Activity</div>
                        <nav className="w-full  md:px-0">
                            {menu.map(({ path, label, icon: Icon, badge }) => {
                                const active = pathname === path;
                                return (
                                    <Link key={path} to={path} className="block pb-[0.2vh]">
                                        <div
                                            className={`relative flex items-center px-[3vw] py-[1.2vh] md:px-[1.4vw] lg:px-[0.8vw] md:py-[1.2vh] font-['Poppins'] rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#e9ecff] dark:hover:bg-[#131313]  hover:scale-105 ${active
                                                ? "bg-gradient-to-r from-[#394ff1] to-[#4d4ef2] text-white"
                                                : " text-[#292929]  dark:text-white"}`}>
                                            <div
                                                data-svg-wrapper
                                                className={active ? "text-white" : "text-black dark:text-white"}>
                                                <Icon size={22} />
                                            </div>
                                            <span className="md:ml-[2vw] ml-[3vw] md:text-[0.93rem] lg:text-[17px] font-normal font-['Nirmala UI']">
                                                {label}
                                            </span>
                                            {badge !== undefined && (
                                                <span
                                                    className={`absolute right-[1vw] top-[1.3vh] flex h-[22px] w-[22px] items-center justify-center rounded-full text-[13px] font-['Roboto Flex'] ${active
                                                        ? "bg-white text-black dark:text-white"
                                                        : "bg-[#f10000] text-white"}`}
                                                >
                                                    {badge}
                                                </span>
                                            )}
                                        </div>
                                    </Link>
                                );
                            })}
                        </nav>
                        <div className=' absolute bottom-[-9vh] left-[20vw]  lg:bottom-[-10vh]  lg:left-[6vw] md:bottom-[-8vh] md:left-[5.5vw] '>
                            <div className='flex items-end'>
                                <div data-svg-wrapper className="mr-[0.5vw] lg:mr-[0.4vw] mb-[1vh]">
                                   
                                    {darkMode ? (
                                               <img src={whitebag} className="size-3 lg:size-5" />
                                            ) : (
                                             
                                               <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.2247 7.41068C16.2247 9.57227 14.1166 11.3246 11.955 11.3246C9.79341 11.3246 7.68528 9.57227 7.68528 7.41068C7.68528 5.24909 5.52377 2.78516 7.68537 2.78516C9.84696 2.78516 16.2247 5.24909 16.2247 7.41068Z" stroke="#534FF2" stroke-width="1.42324" />
                                        <path d="M17.1859 8.12239C17.1859 10.284 15.0778 12.0363 12.9162 12.0363C10.7546 12.0363 8.64648 10.284 8.64648 8.12239C8.64648 5.9608 13.7078 1.0062 15.8694 1.0062C18.0309 1.0062 17.1859 5.9608 17.1859 8.12239Z" stroke="#5383AB" stroke-width="1.42324" />
                                        <path d="M4.42222 8.64887C4.66816 7.70981 5.51669 7.0549 6.48742 7.0549H17.6707C18.6353 7.0549 19.4801 7.7018 19.7317 8.63308L22.6148 19.3074C22.9813 20.6642 21.9593 21.9989 20.5538 21.9989H3.69177C2.29304 21.9989 1.27219 20.6763 1.62657 19.3232L4.42222 8.64887Z" fill="#012436" />
                                    </svg>
                                            )}
                                </div>
                                <span className='text-[#012436] dark:text-[#F2F3FF] md:text-[16px] lg:text-[20px] font-poppins font-semibold mr-[5px]' >Campus</span> <span className=' text-[#009ef3] dark:text-[#FFFFFF]  md:text-[16px] lg:text-[22px] font-poppins font-semibold'>Mart</span>
                            </div>
                        </div>
                    </div>
                </div>
         
        </>
    )
}
export default Profile_left_part