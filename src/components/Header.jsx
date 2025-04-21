import React, { useState } from 'react'
import { RiShoppingCartFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { RiNotificationFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MessageSquare, Bell, Heart, Mail } from "lucide-react";

const Header = ({ color,textColor }) => {

    const [search, setSearch] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [notification, setNotification] = useState(1);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const handleSearchBar = (e) => {
        setSearch(e.target.value);
    }
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      }
    return (
        <nav style={{ backgroundColor: color, color: textColor }} className={`flex text-black items-center justify-between pt-5 pb-3 sm:pl-10 md:pr-10`}>
            <div className='flex justify-around w-full items-center sm:hidden'>
                <Link to="/"><IoChevronBackOutline size={22} /></Link>
                <div className="flex items-center font-bold text-lg gap-[0.4vw] ">
                    <RiShoppingCartFill />
                    <Link to="/"> <h1>Campus Mart</h1></Link>
                </div>
                {/* <IoIosMenu size={25}/> */}
                <button onClick={toggleSidebar} className="p-2 bg-transparent text-black">
                {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
            </div>
            <motion.div
        initial={{ x: 250 }}
        animate={{ x: isOpen ? 0 : 250 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 right-0 h-full w-64 bg-[#FBFBFB] text-black shadow-lg z-40 p-5 sm:hidden"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={toggleSidebar}><X size={24} /></button>
        </div>
        <ul className="space-y-2">
          <li><Link to="#" ></Link>
          <div className="hover:text-blue-400 font-medium font-['Poppins'] text-[15px] flex justify-center bg-gray-100 py-[1.2vh] rounded-sm my-[0.2vh]"> Home
          </div>
          </li>
          <li><Link to="/profile" >
          <div className="hover:text-blue-400 font-medium font-['Poppins'] text-[15px] flex justify-center bg-gray-100 py-[1.2vh] rounded-sm my-[0.2vh]"> Profile
          </div></Link></li>
          <li><Link to="#" >
          <div className="hover:text-blue-400 font-medium font-['Poppins'] text-[15px] flex justify-center bg-gray-100 py-[1.2vh] rounded-sm my-[0.2vh]"> Chats
          </div></Link></li>
          <li><Link to="/myorders" >
          <div className="hover:text-blue-400 font-medium font-['Poppins'] text-[15px] flex justify-center bg-gray-100 py-[1.2vh] rounded-sm my-[0.2vh]"> My Order
          </div></Link></li>
          <li><Link to="/productlisted" >
          <div className="hover:text-blue-400 font-medium font-['Poppins'] text-[15px] flex justify-center bg-gray-100 py-[1.2vh] rounded-sm my-[0.2vh]"> Product Listed
          </div></Link></li>
          <li><Link to="/notification" >
          <div className="hover:text-blue-400 font-medium font-['Poppins'] text-[15px] flex justify-center bg-gray-100 py-[1.2vh] rounded-sm my-[0.2vh]">Notification
          </div></Link></li>
          <li><Link to="#" >
          <div className="hover:text-blue-400 font-medium font-['Poppins'] text-[15px] flex justify-center bg-gray-100 py-[1.2vh] rounded-sm my-[0.2vh]"> Contact Us
          </div></Link></li>
          <li><Link to="/termscondition" >
          <div className="hover:text-blue-400 font-medium font-['Poppins'] text-[15px] flex justify-center bg-gray-100 py-[1.2vh] rounded-sm my-[0.2vh]"> Terms and Condition
          </div></Link></li>
        </ul>
        </motion.div>
            <div className="hidden items-center font-bold text-lg gap-[0.4vw] sm:flex lg:text-xl xl:text-[1.4vw]">
                <RiShoppingCartFill />
                <Link to="/"> <h1>Campus Mart</h1></Link>
            </div>

            
            
            <div className="items-center bg-white rounded-md border border-slate-300 pr-2 shadow-sm shadow-slate-200 hover:shadow-md transition ease-in-out duration-200 hidden sm:flex">
                <input
                    className="rounded-md px-3 outline-none w-[25vw] placeholder:text-slate-600 text-black sm:py-[0.4vh] lg:py-[0.7vh] xl:py-[0.6vh] text-base"
                    placeholder="Search Product"
                    type="text"
                    name="search"
                    id="search"
                    value={search}
                    onChange={handleSearchBar}
                    aria-label="Search products"
                />
                <CiSearch size={22} className='sm:text-black size-4 lg:size-5'/>
            </div>

            <div className="hidden items-center text-[1.9vw] sm:flex gap-8 lg:gap-11 font-medium xl:gap-14">
                <div className="flex justify-center items-center text-[1.5vw] sm:gap-5 lg:gap-8 xl:gap-10">
                    <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
                        <MdDarkMode className={darkMode ? 'text-yellow-400  sm:size-4 lg:size-5' : 'text-black sm:size-4 lg:size-5'} />
                    </button>
                    <button className='relative' aria-label="Notifications">
                        <RiNotificationFill className='sm:size-4 lg:size-5'/>
                        {notification > 0 && (
                            <span className="absolute bg-red-500 text-white flex items-center justify-center rounded-full sm:size-2 text-xs p-[0.8vw] top-[-0.6vh] lg:top-[-0.7vh] right-[-0.3vw] xl:p-[0.5vw]">
                                {notification}
                            </span>
                        )}
                    </button>
                </div>
                <Link to="/" className="hover:text-blue-500 transition duration-200 lg:text-[1.7vw] xl:text-[1.2vw]">Orders</Link>
                <Link to="/" className="hover:text-blue-500 transition duration-200 lg:text-[1.7vw] xl:text-[1.2vw]">Chats</Link>
                <Link to="/" className="hover:text-blue-500 transition duration-200 lg:text-[1.7vw] xl:text-[1.2vw]">Menu</Link>

            </div>

                
 
        </nav>

    )
}

export default Header