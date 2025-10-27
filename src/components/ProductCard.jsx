import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Image10 from  "../assets/image10.png"
const ProductCard = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link
      onClick={handleClick}
      to={"/"}
      className="lg:w-[28vw] xl:w-[21vw] w-[44.7vw] md:w-[29vw] rounded-xl overflow-hidden shadow-[0px_4.115523815155029px_28.808666229248047px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1.03px] outline-zinc-300 hover:shadow-sm animation duration-300 ease-linear hover:scale-105 dark:bg-zinc-900 dark:shadow-[0px_4.115523815155029px_28.808666229248047px_0px_rgba(0,0,0,0.10)] dark:outline dark:outline-1 dark:outline-offset-[-1.03px] dark:outline-zinc-600"
    >
      <div className="md:p-3 p-2 w-full h-[22vh] md:h-[21vh] lg:h-[18vh] xl:h-[33vh] object-contain relative">
        <button
          className="absolute flex items-center justify-center lg:w-10 w-7 lg:h-10 h-7 right-5 top-5"
          aria-label="Add to wishlist"
        >
          <div className="relative lg:w-4 w-3 lg:h-4 h-3 transform rotate-45 bg-white group-hover:scale-110 transition-transform duration-300 ease-in-out shadow-md">
            <div className="absolute top-[-50%] left-0 lg:w-4 w-3 lg:h-4 h-3 bg-white rounded-full"></div>
            <div className="absolute top-0 left-[-50%] lg:w-4 w-3 lg:h-4 h-3 bg-white rounded-full"></div>
          </div>
        </button>

        <div className="bg-indigo-600 outline outline-1 outline-offset-[-1.14px] outline-black/10 text-white px-2 py-1 rounded md:text-sm text-[2.9vw] font-medium shadow-md font-poppins absolute md:bottom-6 md:left-6 lg:px-4 bottom-4 left-4">
          Electronics
        </div>

        <img
          className="rounded-lg w-full h-full"
          src={Image10}
          alt="Product"
        />
      </div>

      <h1 className="md:pb-2 xl:pb-3 pb-1 pl-4 lg:text-[1.6vw] xl:text-[1.3vw] text-xs font-semibold text-[#313131] font-inter xl:mt-1 dark:text-white">
        Classmate Notebook
      </h1>
      <div className="flex md:gap-2 gap-5 pl-4">
        <div className="bg-green-100 px-2 py-1 rounded xl:text-sm md:text-[1.4vw] text-[2.7vw] text-green-600 font-semibold font-inter flex items-center xl:gap-2 gap-1">
          <span>4.0</span>
          <span>
            <FaStar />
          </span>
        </div>
      </div>

      <div className="pl-3 pr-3 xl:mt-4 lg:mt-3 lg:pb-6 md:mt-4 mt-3 pb-3 flex flex-col">
        <div className="flex items-center lg:gap-2 gap-2">
          <h2 className="text-zinc-800 font-inter xl:text-2xl lg:text-xl font-bold text-sm md:text-base flex items-center justify-center tracking-tight dark:text-white">
            <span className="mr-[-0.2vw]">
              <MdOutlineCurrencyRupee />
            </span>
            <span>799</span>
          </h2>
          <h2 className="text-neutral-400 font-inter lg:text-sm font-medium md:text-sm text-xs flex items-center line-through justify-center tracking-tight">
            <span className="mr-[-0.2vw]">
              <MdOutlineCurrencyRupee />
            </span>
            <span>399</span>
          </h2>
        </div>
        <div className="flex items-center pl-1">
          <h2 className="text-[#06981E] font-inter lg:text-sm font-bold md:text-xs text-[2.8vw] flex items-center">
            <h3>Save</h3>
            <div className="flex items-center">
              <span className="mr-[-0.2vw]">
                <MdOutlineCurrencyRupee />
              </span>
              <span>400</span>
            </div>
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
