import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { useEffect } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import LoggedImage from "../assets/LoggedImage.png";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";


// change in code 
import bag from '../assets/bluebag.png';
import bluebag from '../assets/bag.png';
import whitebag from "../assets/whitebag.png";
//change in code 

const Header = ({ color, textColor, bagUrl }) => {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [notification, setNotification] = useState(1);
  const [showmenu, setShowmenu] = useState(false);
  const [showmenumobile, setShowmenumobile] = useState(false);

  

  const placeholderWords = [
    "Electronics",
    "Book",
    "Cycle",
    "Essential",
    "Mattress",
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  const handleSearchBar = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholderWords.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    setLoggedin((prev) => !prev);
  };

  const handleMenu = () => {
    setShowmenu((prev) => !prev);
  };

  const handleMenuMobile = () => {
    setShowmenumobile((prev) => !prev);
  };

  return (
    <>
      {loggedin ? (
        <nav
          style={{ backgroundColor: color, color: textColor }}
          className={`flex text-black items-center justify-between pt-6 pb-3 md:pb-0 sm:pl-10 md:pr-10 lg:pl-[4.6vw] lg:pr-[4.6vw] lg:pb-2 lg:pt-5 xl:pb-4 xl:pt-5 relative dark:bg-[#131313]`}
        >
          {showmenu && (
            <AnimatePresence>
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="menus fixed right-5 top-[7vh] md:right-10 md:top-[7vh] lg:top-[5vh] lg:right-14 xl:right-20 xl:top-20 z-20 bg-white border border-[#BBC2C9] rounded-xl font-outfit text-[#1A1D20] w-[90vw] sm:w-[60vw] md:w-[35vw] lg:w-[26vw] xl:w-[18vw] shadow-lg"
              >
                <Link
                  to={"/"}
                  className="flex items-center gap-4 px-4 pt-4 pb-3 hover:bg-gray-100 transition-all duration-200 rounded-t-xl"
                >
                  <img
                    src={LoggedImage}
                    className="w-12 h-12 rounded-full"
                    alt="user"
                  />
                  <div>
                    <h1 className="text-black font-medium text-sm sm:text-base">
                      Sanjay Srinivasan
                    </h1>
                    <h2 className="text-[#64707D] text-xs sm:text-sm font-medium">
                      sanjaysrinivasan@gmail.com
                    </h2>
                  </div>
                </Link>

                <div className="border-y border-[#DEDEDE]">
                  {[
                    { icon: <LuUserRound />, label: "Profile" },
                    { icon: <BsBoxSeam />, label: "Orders" },
                    { icon: <FiMessageSquare />, label: "Chat" },
                    { icon: <IoIosHeartEmpty />, label: "Wishlist" },
                    { icon: <CiMail />, label: "Contact Us" },
                  ].map(({ icon, label }, index) => (
                    <Link
                      key={index}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-all duration-200"
                    >
                      <span className="text-lg">{icon}</span>
                      <h1 className="text-sm sm:text-base">{label}</h1>
                    </Link>
                  ))}
                </div>

                <Link
                  onClick={handleLogin}
                  className="flex items-center gap-3 px-4 py-3 text-[#F20000] hover:bg-red-100 transition-all duration-200 rounded-b-xl"
                >
                  <span className="text-lg">
                    <MdOutlineLogout />
                  </span>
                  <h1 className="text-sm sm:text-base">Logout</h1>
                </Link>
              </motion.div>
            </AnimatePresence>
          )}

          {/* mobile nav */}
          <div className="flex justify-between pl-5 pr-6 w-full items-center sm:hidden font-poppins dark:text-white">
            <Link to="/">
              <RiMenu2Line size={25} />
            </Link>
            <div className="flex items-center font-bold text-lg gap-[1vw] dark:text-white">
              {darkMode ? (
                <img src={whitebag} className="size-4 lg:size-5" />
              ) : (
                <img src={bagUrl} className="size-4 lg:size-5" />
              )}

              <a href="/">Campus Mart</a>
            </div>
            <MdShoppingCart size={25} />
          </div>

          <div className="hidden items-center font-bold text-lg gap-[0.4vw] md:text-base sm:flex lg:text-[1.7vw] xl:text-[1.4vw] font-poppins md:gap-[0.8vw] xl:gap-[0.5vw] dark:text-white">
            {darkMode ? (
              <img
                src={bluebag}
                className="size-3 lg:size-4 xl:size-5"
              />
            ) : (
              <img src={bag} className="size-3 lg:size-4 xl:size-5" />
            )}
            <a
              href="/"
              className="bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:text-white"
            >
              Campus Mart
            </a>
          </div>

          <div className="relative items-center bg-white dark:bg-[#1A1D20] rounded-full shadow-[0px_3px_14px_0px_rgba(0,0,0,0.07)] outline outline-2 outline-neutral-200 dark:outline-[#848484] dark:outline-1 hover:shadow-md transition ease-in-out duration-200 hidden sm:flex cursor-pointer xl:py-[0.5vh] lg:pr-3 lg:mr-[2vw] xl:mr-[7vw]">
            <input
              className="rounded-md px-3 outline-none w-[25vw] md:w-[27vw] lg:w-[26vw] xl:w-[27vw] placeholder-transparent text-black sm:py-[0.4vh]  md:py-[0.9vh] lg:py-[0.5vh] xl:py-[0.6vh] text-md font-poppins lg:text-base md:text-xs lg:px-6 relative z-10 bg-transparent"
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={handleSearchBar}
              aria-label="Search products"
            />

            {/* Animated Placeholder Text */}
            {search === "" && (
              <span
                className={`absolute left-4 lg:left-6 flex items-center gap-1 md:text-sm xl:text-base lg:text-sm`}
              >
                <span className="text-gray-500 dark:text-[#64707D]">
                  Search for
                </span>
                <span
                  className={` text-[#364EF2] pointer-events-none transition-opacity duration-500 z-0 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {placeholderWords[placeholderIndex]}
                </span>
              </span>
            )}

            <CiSearch
              size={22}
              className="text-black size-4 lg:size-5 mr-2 cursor-pointer dark:text-[#64707D]"
            />
          </div>

          <div className="hidden items-center text-[1.9vw] sm:flex gap-8 md:gap-7 lg:gap-10 font-medium xl:gap-10">
            <div className="flex justify-center items-center text-[1.5vw] sm:gap-5 lg:gap-8 xl:gap-10">
              <Link
                className="flex items-center text-white bg-gradient-to-l from-blue-600 to-indigo-600 xl:px-5 xl:text-base xl:py-[1.1vh] rounded-full xl:gap-2 md:py-[0.9vh] lg:py-[0.7vh] md:px-3 md:gap-1 md:text-xs lg:text-sm"
                to={"/upload"}
              >
                <IoIosAddCircleOutline className="xl:size-5 size-4" />
                <h1>Sell Now</h1>
              </Link>
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="transition duration-500 ease-in-out"
              >
                {darkMode ? (
                  <IoIosSunny className="text-[#FFD119] sm:size-4 md:size-5 lg:size-6 transition-all duration-500 ease-in-out rotate-0 scale-100" />
                ) : (
                  <IoMdMoon className="text-[#323232] sm:size-4 md:size-5 lg:size-6 transition-all duration-500 ease-in-out rotate-0 scale-100" />
                )}
              </button>

              <button
                className="relative dark:text-white"
                aria-label="Notifications"
              >
                <IoNotificationsOutline className="sm:size-4 text-[#323232] md:size-5 lg:size-6 dark:text-[#848484]" />
                {notification > 0 && (
                  <span className="absolute bg-[#FF0F0F] text-white flex items-center justify-center rounded-full sm:size-2 text-xs p-[0.8vw] top-[-0.6vh] lg:top-[-0.7vh] right-[-0.3vw] xl:p-[0.5vw]">
                    {notification}
                  </span>
                )}
              </button>
              <button
                className="relative dark:text-white"
                aria-label="Notifications"
              >
                <FiMessageSquare className="sm:size-4 text-[#323232] md:size-5 lg:size-6 dark:text-[#848484]" />
                {notification > 0 && (
                  <span className="absolute bg-[#09C712] text-white flex items-center justify-center rounded-full sm:size-2 text-xs p-[0.8vw] top-[-0.6vh] lg:top-[-0.7vh] right-[-0.3vw] xl:p-[0.5vw]">
                    {notification}
                  </span>
                )}
              </button>
            </div>
            <div
              onClick={handleMenu}
              className="rounded-full object-contain size-8 lg:size-9 xl:size-10 bg-red-600 cursor-pointer transition-all duration-200 hover:scale-105"
            >
              <img src={LoggedImage} alt="image" />
            </div>
          </div>
        </nav>
      ) : (
        <nav
          style={{ backgroundColor: color, color: textColor}}
          className={`flex text-black items-center justify-between pt-6 pb-3 md:pb-0 sm:pl-10 md:pr-10 lg:pl-[4.6vw] lg:pr-[4.6vw] lg:pb-2 lg:pt-5 xl:pb-4 xl:pt-5 dark:bg-[#131313] relative`}
        >
          {/* mobile menu */}
          <AnimatePresence mode="wait">
            {showmenumobile && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                transition={{ duration: 0.3 }}
                className="sm:hidden absolute left-2 z-20 top-14 text-white rounded-xl border border-[#BBC2C9] bg-white w-[47vw] font-outfit"
              >
                <Link
                  to={"/"}
                  className="flex items-center px-2 pt-3 pb-3 gap-2 transition-all duration-200 hover:bg-gray-100 rounded-t-xl"
                >
                  <img src={LoggedImage} className="size-10" alt="image" />
                  <div className="flex flex-col">
                    <h1 className="text-black font-medium text-sm">
                      Sanjay Srinivasan
                    </h1>
                    <h2 className="text-[#64707D] text-[2.5vw] font-medium">
                      sanjaysrinivasan@gmail.com
                    </h2>
                  </div>
                </Link>
                <div className="flex flex-col text-[#1A1D20] border-t border-b border-b-[#DEDEDE] border-t-[#DEDEDE]">
                  <Link className="flex items-center gap-2 h-full transition-all duration-200 hover:bg-gray-100 pt-3 pb-2 px-2">
                    <span>
                      <LuUserRound />
                    </span>
                    <h1>Profile</h1>
                  </Link>
                  <Link className="flex items-center gap-2 transition-all duration-200 hover:bg-gray-100 pt-2 pb-2 px-2">
                    <span>
                      <BsBoxSeam />
                    </span>
                    <h1>Orders</h1>
                  </Link>
                  <Link className="flex items-center gap-2 transition-all duration-200 hover:bg-gray-100 pt-2 pb-2 px-2">
                    <span>
                      <IoNotificationsOutline />
                    </span>
                    <h1>Chat</h1>
                  </Link>
                  <Link className="flex items-center gap-2 transition-all duration-200 hover:bg-gray-100 pt-2 pb-2 px-2">
                    <span>
                      <IoIosHeartEmpty />
                    </span>
                    <h1>Wishlist</h1>
                  </Link>
                  <Link className="flex items-center gap-2 transition-all duration-200 hover:bg-gray-100 pt-2 pb-3 px-2">
                    <span>
                      <CiMail />
                    </span>
                    <h1>Contact Us</h1>
                  </Link>
                </div>
                <Link
                  onClick={handleLogin}
                  className="flex items-center gap-2 px-2 text-[#F20000] pt-3 pb-3 transition-all duration-200 hover:bg-red-100 rounded-b-xl"
                >
                  <span>
                    <MdOutlineLogout />
                  </span>
                  <h1>Logout</h1>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between pl-5 pr-6 w-full items-center sm:hidden font-poppins dark:text-white">
            <Link to="/" onClick={handleMenuMobile}>
              <AnimatePresence mode="wait" initial={false}>
                {showmenumobile ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoCloseOutline size={25} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RiMenu2Line size={25} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
            <div className="flex items-center font-bold text-lg gap-[1.4vw] ml-[10vw] dark:text-white">
              {darkMode ? (
                <img src={bag} className="size-4 lg:size-5" />
              ) : (
                <img src={bluebag} className="size-4 lg:size-5" />
              )}

              <a href="/">Campus Mart</a>
            </div>
            <div className="flex items-center gap-7">
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="transition duration-500 ease-in-out"
              >
                {darkMode ? (
                  <IoIosSunny className="text-[#FFD119] size-5 transition-all duration-500 ease-in-out rotate-0 scale-100" />
                ) : (
                  <IoMdMoon className="text-[#323232] size-5  transition-all duration-500 ease-in-out rotate-0 scale-100" />
                )}
              </button>
              <MdShoppingCart size={25} />
            </div>
          </div>

          <div className="hidden items-center font-bold text-lg gap-[0.4vw] md:text-base sm:flex lg:text-lg xl:text-[1.4vw] font-poppins md:gap-[0.8vw] lg:gap-[0.8vw] xl:gap-[0.5vw] dark:text-white">
            {darkMode ? (
              <img
                src={bag}
                className="size-3 lg:size-4 xl:size-5"
              />
            ) : (
              <img src={bluebag} className="size-3 lg:size-5" />
            )}
            <a
              href="/"
              className="bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:text-white"
            >
              Campus Mart
            </a>
          </div>

          <div className="relative items-center bg-white dark:bg-[#1A1D20] rounded-full shadow-[0px_3px_14px_0px_rgba(0,0,0,0.07)] outline outline-2 outline-neutral-200 dark:outline-[#848484] dark:outline-1 hover:shadow-md transition ease-in-out duration-200 hidden sm:flex cursor-pointer xl:py-[0.5vh] lg:pr-3 lg:mr-[10vw] xl:mr-[18vw] md:mr-[12vw]">
            <input
              className="rounded-md px-3 outline-none w-[25vw] md:w-[28vw] lg:w-[27vw] placeholder-transparent text-black sm:py-[0.4vh]  md:py-[0.9vh] lg:py-[0.6vh] xl:py-[0.6vh] text-md font-poppins lg:text-base md:text-xs lg:px-6 relative z-10 bg-transparent"
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={handleSearchBar}
              aria-label="Search products"
            />

            {/* Animated Placeholder Text */}
            {search === "" && (
              <span
                className={`absolute left-4 lg:left-6 flex items-center gap-1 md:text-sm xl:text-base lg:text-sm`}
              >
                <span className="text-gray-500 dark:text-[#64707D]">
                  Search for
                </span>
                <span
                  className={` text-[#364EF2] pointer-events-none transition-opacity duration-500 z-0 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {placeholderWords[placeholderIndex]}
                </span>
              </span>
            )}

            <CiSearch
              size={22}
              className="text-black size-4 lg:size-5 mr-2 cursor-pointer dark:text-[#64707D]"
            />
          </div>

          <div className="hidden items-center text-[1.9vw] sm:flex gap-8 md:gap-6 lg:gap-8 font-medium xl:gap-7">
            <div className="flex justify-center items-center text-[1.5vw] sm:gap-5 lg:gap-8 xl:gap-10">
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="transition duration-500 ease-in-out"
              >
                {darkMode ? (
                  <IoIosSunny className="text-[#FFD119] sm:size-4 md:size-5 xl:size-6 transition-all duration-500 ease-in-out rotate-0 scale-100" />
                ) : (
                  <IoMdMoon className="text-[#323232] sm:size-4 md:size-5 transition-all duration-500 ease-in-out rotate-0 scale-100" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-4 xl:gap-6">
              <Link
                to="/"
                className="md:text-[1.7vw] xl:text-base font-poppins dark:text-white lg:text-sm"
              >
                Sign up
              </Link>
              <button
                onClick={handleLogin}
                className="transition duration-200 md:text-[1.7vw] xl:text-base font-poppins bg-black text-white xl:px-6 xl:py-[1.1vh] rounded-full dark:bg-white dark:text-black md:py-[0.7vh] md:px-5 lg:py-[0.6vh] lg:text-sm"
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
