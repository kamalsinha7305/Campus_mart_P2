import React, { useState } from 'react'
import { RiShoppingCartFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { RiNotificationFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";

const Header = () => {

    const [search, setSearch] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [notification, setNotification] = useState(2);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const handleSearchBar = (e) => {
        setSearch(e.target.value);
    }


    return (
        <nav className="flex bg-white text-black items-center justify-between pl-14 pr-10 pt-6 pb-2">
            <div className="flex items-center font-bold text-2xl gap-2">
                <RiShoppingCartFill />
                {/* <Link to="/"> <h1>Campus Mart</h1></Link> */}
            </div>
            <div className="flex items-center bg-white rounded-lg border border-slate-400 text-black pr-2 mr-36">
                <input
                    className="rounded-lg px-4 py-[1vh] outline-none w-[25vw]"
                    placeholder="Search Product"
                    type="text"
                    name="search"
                    id="search"
                    value={search}
                    onChange={handleSearchBar}
                    aria-label="Search products"
                />
                <CiSearch size={22} />
            </div>
            <div className="flex items-center gap-14 font-semibold text-lg pr-6">
                <div className="flex justify-center items-center text-2xl gap-8">
                    <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
                        <MdDarkMode className={darkMode ? 'text-yellow-400' : 'text-black'} />
                    </button>
                    <button className='relative' aria-label="Notifications">
                        <RiNotificationFill/>
                        {notification > 0 && (
                            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                                {notification}
                            </span>
                        )}
                    </button>
                </div>
                <Link to="/" className="hover:text-blue-500 transition duration-200">Orders</Link>
                <Link to="/" className="hover:text-blue-500 transition duration-200">Chats</Link>
                <Link to="/" className="hover:text-blue-500 transition duration-200">Menu</Link>
            </div>
        </nav>

    )
}

export default Header