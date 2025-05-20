// Notification.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Profile_left_part from "../components/Profile_left_part";

export default function Notification() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Rahul sent you a message about MacBook Pro", color: "green" },
    { id: 2, text: "Rahul sent you a message about MacBook Pro", color: "red" },
    { id: 3, text: "Rahul sent you a message about MacBook Pro", color: "green" },
    { id: 4, text: "Rahul sent you a message about MacBook Pro", color: "red" },
  ]);

  const markRead = id =>
    setNotes(prev => prev.filter(n => n.id !== id));

  return (
    <>
      <Header color={"#394ff1"} textColor={"white"} />
      <div className="md:flex lg:flex">
     
        <div className="hidden md:block md:w-[35%] lg:w-[28%] pt-[3.5vh] px-[2vw] pb-[2vh]  bg-[#FBFBFB]  dark:bg-[#131313]">
          <Profile_left_part />
        </div>

    
        <div className='md:w-[65%] lg:w-[72%] flex flex-col bg-[#FBFBFB] dark:bg-[#131313]'>
          <div className="lg:ml-[1.5vw]  md:ml-[2vw] md:mr-[3.2vw]">
            <div className="mt-[5vh] mb-[2vh] max-sm:ml-[4vw]">
              <div class="text-[#292929] dark:text-[#F1F1F1]  text-[18px] lg:text-[28px] font-medium font-['Poppins']">Notifications</div>
            </div>

            <AnimatePresence initial={false}>
              {notes.map(n => (
                <motion.div
                  key={n.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ type: "tween", duration: 0.25 }}
                  className="relative sm:relative md:relative lg:flex items-center gap-[2vw] mb-[3vh] "
                >

                  <div className="relative bg-[#ebeeff] dark:bg-[#1A1D20] rounded-[12px]  overflow-hidden flex lg:items-center px-[0.7vw] py-[1.8vh] lg:w-[64vw] max-sm:h-[16vh]  max-sm:mx-[4vw] md:h-[15.5vh] lg:h-[11.5vh] ">

                    <div
                      className={`bg-${n.color} rounded-[5px] p-[5px] flex items-center justify-center ml-[3.5vw] lg:ml-[1vw] `}
                    >

                      <svg className="max-sm:h-[21px] max-sm:w-[21px]" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.17217 19.3608L3.80574 21.7272C3.47993 22.053 3.10679 22.1261 2.68632 21.9464C2.26585 21.7667 2.05596 21.445 2.05664 20.9813V4.95645C2.05664 4.39056 2.2583 3.9063 2.66163 3.50366C3.06495 3.10103 3.54921 2.89937 4.11441 2.89868H20.5765C21.1424 2.89868 21.627 3.10034 22.0303 3.50366C22.4337 3.90699 22.635 4.39125 22.6343 4.95645V17.303C22.6343 17.8689 22.433 18.3535 22.0303 18.7568C21.6277 19.1602 21.1431 19.3615 20.5765 19.3608H6.17217ZM5.29762 17.303H20.5765V4.95645H4.11441V18.4605L5.29762 17.303ZM7.20105 15.2453H13.3744C13.6659 15.2453 13.9104 15.1465 14.1079 14.949C14.3055 14.7514 14.4039 14.5072 14.4032 14.2164C14.4025 13.9256 14.3038 13.6814 14.1069 13.4838C13.9101 13.2863 13.6659 13.1875 13.3744 13.1875H7.20105C6.90954 13.1875 6.66535 13.2863 6.46849 13.4838C6.27163 13.6814 6.17286 13.9256 6.17217 14.2164C6.17149 14.5072 6.27026 14.7518 6.46849 14.95C6.66672 15.1482 6.91091 15.2466 7.20105 15.2453ZM7.20105 12.1586H17.4899C17.7814 12.1586 18.0259 12.0599 18.2235 11.8623C18.421 11.6648 18.5194 11.4206 18.5188 11.1297C18.5181 10.8389 18.4193 10.5947 18.2224 10.3972C18.0256 10.1996 17.7814 10.1009 17.4899 10.1009H7.20105C6.90954 10.1009 6.66535 10.1996 6.46849 10.3972C6.27163 10.5947 6.17286 10.8389 6.17217 11.1297C6.17149 11.4206 6.27026 11.6651 6.46849 11.8633C6.66672 12.0616 6.91091 12.16 7.20105 12.1586ZM7.20105 9.07198H17.4899C17.7814 9.07198 18.0259 8.9732 18.2235 8.77566C18.421 8.57811 18.5194 8.33393 18.5188 8.04309C18.5181 7.75226 18.4193 7.50808 18.2224 7.31053C18.0256 7.11299 17.7814 7.01421 17.4899 7.01421H7.20105C6.90954 7.01421 6.66535 7.11299 6.46849 7.31053C6.27163 7.50808 6.17286 7.75226 6.17217 8.04309C6.17149 8.33393 6.27026 8.57846 6.46849 8.77669C6.66672 8.97492 6.91091 9.07335 7.20105 9.07198Z" fill="white" fill-opacity="0.72" />
                      </svg>

                    </div>

                    <div className="flex flex-col ml-[2vw]">

                      <div className="text-black dark:text-[#F1F1F1] text-[14px]  lg:text-lg font-medium font-['Poppins'] mt-[0.6vh]">
                        New Message
                      </div>
                      <div className="text-black dark:text-[#F1F1F1] text-[11px] lg:text-sm font-light font-['Poppins'] max-sm:absolute top-[7.5vh] left-[4.3vw]">
                        {n.text}
                      </div>
                      <div class=" lg:hidden absolute  right-[4.5vW] text-[#1e1e1e]  dark:text-[#D6D6D6] text-[11px] lg:text-base font-normal font-['Poppins'] ">2 hours ago

                      </div>
                    
                    </div>
                   
                     <div className=" flex flex-row absolute md:bottom-[1.5vh] md:left-[4.3vw]  max-sm:bottom-[1.5vh] max-sm:left-[4.4vw] lg:hidden ">
                      <div class="">
                        <div class=" bg-white  rounded-[4px]  max-sm:px-[4vw] max-sm:py-[0.3vh] max-sm:flex ">
                          <button class=" text-[#534ff2] text-[12px] lg:text-base font-normal font-['Poppins']  md:px-[2vw] lg:py-[0.3vh] lg:px-[1.5vw] md:pb-[0.4vh]">Reply</button>
                        </div>
                      </div>
                    <div class=" max-sm:hidden  md:hidden lg:block  text-[#1e1e1e] text-[12px] lg:text-base font-normal font-['Poppins'] ">2 hours ago</div> 
                    </div> 

                    
                    <div className=" flex flex-row absolute lg:right-[2.5vw] gap-[4.3vw]">
                                    <div class=" hidden lg:block">
                                        <div class=" bg-white rounded-[4px]  ">
                                            <button class=" text-[#534ff2] text-[12px] lg:text-base font-normal font-['Poppins'] lg:py-[0.3vh] lg:px-[1.5vw]">Reply</button>
                                        </div>
                                    </div>
                                    <div class=" hidden lg:block text-[#1e1e1e] dark:text-[#D6D6D6]  text-[12px] lg:text-base font-normal font-['Poppins'] ">2 hours ago</div>
                                </div>


                  </div>

                  <div className="max-sm:absolute md:absolute lg:static md:right-[4vw] bottom-[1.5vh] right-[8vw]">
                  <button
                    onClick={() => markRead(n.id)}
                    className="lg:w-10 lg:h-10 w-[25px] h-[25px] bg-[#534ff2] rounded-md flex justify-center items-center shrink-0"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M2.75 8.75L6.25 12.25L13.25 4.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>


          </div>
        </div>
      </div>
    </>
  );
}
