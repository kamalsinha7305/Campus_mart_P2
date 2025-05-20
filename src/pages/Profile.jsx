import React from 'react'
//import Image1 from '../assets/plusicon.png'

import Loader from '../components/Loder';
import Profile_left_part from '../components/Profile_left_part';

import AlertDialogDemo from '../components/Deletebutton';
import Image11 from '../assets/profilepho.png'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth, db } from "../components/firebase"
import { Pencil } from "lucide-react";
import { toast } from 'react-toastify';
import EditButton from '../components/editbutton';
import SecuritySettings from '../components/SecuritySettings';
import Header from '../components/Header';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../components/firebase";
import { div } from 'framer-motion/client';

function Profile() {
    const [uploading, setUploading] = useState(false);
    const [photoURL, setPhotoURL] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmResult, setConfirmResult] = useState(null);
    const [otpSent, setOtpSent] = useState(false);
    const [phone, setPhone] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [userDetails, setUserDetails] = useState(null);


    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);

            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                const data = docSnap.data();
                console.log(docSnap.data());
                setPhotoURL(data.photo || "");
            } else {
                console.log("User is not logged in");
            }
        });
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/login";
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const user = auth.currentUser;
            if (user) {
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setUserDetails(data);
                    setPhone(data.phone || "");
                }
            }
        };
        fetchData();
    }, []);

    const sendOtp = async () => {
        if (!phone || !phone.startsWith("+")) {
            return toast.error("Enter phone number with country code, e.g., +91XXXXXXXXXX");
        }

        try {
            if (!window.recaptchaVerifier) {
                window.recaptchaVerifier = new RecaptchaVerifier(
                    "recaptcha-container",
                    {
                        size: "invisible",
                        callback: () => { }, // reCAPTCHA solved callback
                    },
                    auth
                );
            }

            const appVerifier = window.recaptchaVerifier;

            const confirmation = await signInWithPhoneNumber(auth, phone, appVerifier);
            setConfirmResult(confirmation);
            setOtpSent(true);
            toast.success("OTP sent!");
        } catch (error) {
            console.error("OTP Error:", error);
            toast.error(error.message || "Failed to send OTP");
        }
    };




    const verifyOtp = async () => {
        if (!otp || !confirmResult) return toast.error("Enter OTP");

        try {
            await confirmResult.confirm(otp);
            const user = auth.currentUser;

            // Save phone to Firestore
            await updateDoc(doc(db, "Users", user.uid), { phone });
            toast.success("Phone number verified and saved!");

            // Reset OTP flow
            setOtp("");
            setOtpSent(false);
        } catch (error) {
            console.error("OTP Verification Failed:", error);
            toast.error("OTP verification failed");
        }
    };
    /* 
        const handleImageUpload = async (e) => {
            const file = e.target.files[0];
            if (!file) return;
    
            try {
                setUploading(true);
                const storage = getStorage();
                const user = auth.currentUser;
                const storageRef = ref(storage, `profilePhotos/${user.uid}`);
    
                await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(storageRef);
    
                await updateDoc(doc(db, "Users", user.uid), { photo: downloadURL });
                setPhotoURL(downloadURL);
                toast.success("Profile photo updated!");
            } catch (error) {
                console.error("Error uploading image: ", error);
                toast.error("Failed to upload photo");
            } finally {
                setUploading(false);
            }
        }; */
    return (
        <>
            <div >
                {userDetails ? (
                    <>
                        <div className=' min-h-screen w-full dark:bg-[#131313] oveflow-hidden'>
                      <Header color={"#394ff1"} textColor={"white"} /> 
                        <div className='lg:flex md:flex'>
                            <div className="hidden md:block md:w-[37%] lg:w-[28%] pt-[3.5vh] px-[2vw] pb-[2vh] bg-[#FBFBFB]  dark:bg-[#131313] ">
                                <Profile_left_part />
                            </div>
                            <div className=' h-screen md:w-[63%] lg:w-[72%] overflow-y-auto no-scrollbar bg-[#FBFBFB] dark:bg-[#131313] ' >

                                <div class="  bg-white dark:bg-[#1A1D20] rounded-[14px] lg:rounded-[20px] shadow-[0px_4px_10px_0px_rgba(54,54,54,0.10)] mx-[4.5vw] md:mr-[2.5vw] md:ml-[1.5vw] lg:mx-[4.5vw] overflow-hidden mt-[3vh]">
                                    <div class="  bg-gradient-to-l from-[#364ef2] to-[#534ff2] flex items-center px-[5vw] py-[1.3vh] md:px-[4vw] md:py-[1.3vh] lg:px-[2.5vw] lg:py-[1.7vh] " >
                                        <div class="  px-[5px]  py-[5px] md:px-[5px]  md:py-[5px] lg:px-[5px] lg:py-[5px]   bg-[#292929] rounded-[63.23px] shadow-[0px_12.772851943969727px_10px_0px_rgba(0,0,0,0.10)] border border-white justify-center items-center inline-flex overflow-hidden">
                                            {/* <img class="w-[10vw] h-[5vh] md:h-[38px] md:w-[50px] lg:w-[80.76px] lg:h-[75px]" src={Image11} /> */}
                                            <img src={userDetails.photoURL || Image11}
                                                alt="Profile"
                                                className="w-[42px] h-[42px] md:h-[45px] md:w-[45px] lg:w-[60px] lg:h-[60px]"
                                            />


                                            {/* {photoURL ? (
                                            <img src={photoURL} alt="Profile" className="w-20 h-20 rounded-full object-cover border" />
                                        ) : (
                                            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">No Photo</div>
                                        )}
                                        <input type="file" accept="image/*" onChange={handleImageUpload} /> */}

                                        </div>
                                        {/* {uploading && <p className="text-xs text-gray-500 mt-2">Uploading...</p>} */}
                                       
                                        <div className='flex flex-col ml-[4vw] md:ml-[1.5vw] lg:ml-[2vw]'>
                                            <div class="  text-white text-[12px] lg:text-[22px] font-semibold font-['Poppins']">{userDetails.firstName} {userDetails.lastName} </div>
                                            <div class="  text-white text-[9px] lg:text-lg font-light font-['Poppins']">Member since October 2022</div>
                                        </div>
                                    </div>

                                    <div className='flex justify-evenly items-center py-[3.3vh]' >

                                        <div class="">
                                            <div class=" h-[10vh] w-[25vw] md:h-[12vh] md:w-[12vw]  lg:h-[13vh] lg:w-[12vw]  bg-[#fbfbfb]/25 dark:bg-[#2D3339] rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)]  flex flex-col justify-center items-center">
                                                <div class="  text-black dark:text-[#AAB9C5] text-[12px]  lg:text-[16px] font-semibold font-['Poppins']">12</div>
                                                <div class=" text-black  dark:text-[#AAB9C5] text-[10px] lg:text-[16px] font-light font-['Poppins']">Product Listed</div>
                                            </div>
                                        </div>
                                        <div class=" ">
                                            <div class=" h-[10vh] w-[25vw] md:h-[12vh] md:w-[12vw] lg:h-[13vh] lg:w-[12vw]   bg-[#fbfbfb] dark:bg-[#2D3339] rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] flex flex-col justify-center items-center">
                                                <div class=" text-black  dark:text-[#AAB9C5] text-[12px] lg:text-[16px] font-semibold font-['Poppins']">8</div>
                                                <div class=" text-black  dark:text-[#AAB9C5] text-[12px] lg:text-[16px] font-light font-['Poppins']">Orders</div>
                                            </div>
                                        </div>
                                        <div class=" ">
                                            <div class="  h-[10vh] w-[25vw] md:h-[12vh] md:w-[12vw] lg:h-[13vh] lg:w-[12vw]   bg-[#fbfbfb]  dark:bg-[#2D3339] rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)]  flex flex-col justify-center items-center">
                                                <div class=" text-black dark:text-[#AAB9C5] text-[12px] lg:text-[16px] font-semibold font-['Poppins']">4.8</div>
                                                <div class=" text-black dark:text-[#AAB9C5] text-[12px] lg:text-[16px] font-light font-['Poppins']">Rating</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class=" bg-white dark:bg-[#1A1D20] rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)] mx-[4.5vw] md:mr-[2.5vw] md:ml-[1.5vw] lg:mx-[4.5vw] mt-[3.7vh] pt-[4vh] pb-[2vh] relative">

                                    <div class="  text-[#2d3339] dark:text-[#D7D7D7] text-[15px] font-medium lg:text-xl lg:font-semibold font-['Poppins'] ml-[2.6vw] mb-[2vh]">Personal Information</div>
                                    <div className='lg:grid grid-cols-2 grid-rows-2 ml-[3.5vw] '>
                                        <div class="">
                                            <div class="  text-[#848484] dark:text-[#848484] text-[13px] lg:text-lg font-normal font-['Poppins']">Name</div>
                                            <div class="  text-[#2d3339] dark:text-[#BBC2C9]  text-[14px] lg:text-[18px] lg:font-medium font-['Poppins'] lg:mb-[2.7vh] max-sm:mb-[2vh] ">{userDetails.firstName} {userDetails.lastName} </div>
                                        </div>

                                        <div class=" ">
                                            <div class=" text-[#848484] dark:text-[#848484] text-[13px] lg:text-lg font-normal font-['Poppins']">Email</div>
                                            <div class="  text-[#2d3339] dark:text-[#BBC2C9]  text-[14px] lg:text-[17px] lg:font-medium font-['Poppins']  max-sm:mb-[2vh]">{userDetails.email}</div>
                                        </div>
                                        <div class="">
                                            <div class=" text-[#848484] dark:text-[#848484] text-[13px] lg:text-lg font-normal font-['Poppins']">

                                                <label>Phone:</label>
                                                <input
                                                    type="tel"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    placeholder="+91XXXXXXXXXX"
                                                    className='dark:text-[#BBC2C9] bg-white dark:bg-[#1A1D20]'
                                                />
                                                <button onClick={sendOtp}>Send OTP</button>
                                            </div>

                                            {otpSent && (
                                                <div>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter OTP"
                                                        value={otp}
                                                        onChange={(e) => setOtp(e.target.value)}
                                                    />
                                                    <button onClick={verifyOtp}>Verify OTP</button>
                                                </div>
                                            )}

                                            <div id="recaptcha-container"></div>

                                            {/*  <div class="  text-[#2d3339] lg:text-[18px] text-[14px] lg:font-medium font-['Poppins']  max-sm:mb-[2vh]">+91 91588 66325</div> */}
                                        </div>
                                        <div className="mb-[2.7vh]">
                                            <div className=" text-[#848484] dark:text-[#848484] lg:text-lg text-[13px] font-normal font-['Poppins']">Gender</div>
                                            <div className="  text-[#2d3339] dark:text-[#BBC2C9]  lg:text-[18px] text-[14px] lg:font-medium font-['Poppins']  max-sm:mb-[2vh]">Male</div>
                                        </div>
                                    </div>
                                    <div className=" absolute top-[2vh] right-[1vw]">
                                        {/* <div className="  bg-[#ebedff] rounded-[50px] flex items-center">
                                        <div className="  text-[#4a4a4a] text-sm font-normal font-['Poppins'] mr-[0.5vw] ml-[1vw]">Edit</div>
                                       
                                            <div className="  bg-[#4d4ef2] rounded-full p-[3px]">
                                                <div data-svg-wrapper class=" ">
                                                    <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.35901 20.3695H6.88673L17.3663 9.88992L15.8386 8.3622L5.35901 18.8418V20.3695ZM4.28693 22.5137C3.98317 22.5137 3.72873 22.4108 3.5236 22.2049C3.31848 21.9991 3.21556 21.7447 3.21484 21.4416V18.8418C3.21484 18.5559 3.26845 18.2833 3.37566 18.0238C3.48286 17.7644 3.63474 17.5367 3.83129 17.3409L17.3663 3.83265C17.5808 3.6361 17.8177 3.48422 18.0771 3.37701C18.3366 3.26981 18.6089 3.2162 18.8941 3.2162C19.1792 3.2162 19.4562 3.26981 19.7249 3.37701C19.9937 3.48422 20.2259 3.64504 20.4218 3.85945L21.8959 5.36037C22.1103 5.55692 22.2665 5.7892 22.3644 6.05722C22.4623 6.32524 22.5116 6.59326 22.5123 6.86129C22.5123 7.14717 22.463 7.41984 22.3644 7.67929C22.2658 7.93873 22.1096 8.1753 21.8959 8.389L8.38765 21.8973C8.1911 22.0938 7.9631 22.2457 7.70366 22.3529C7.44421 22.4601 7.1719 22.5137 6.88673 22.5137H4.28693ZM16.5891 9.13946L15.8386 8.3622L17.3663 9.88992L16.5891 9.13946Z" fill="white" />
                                                    </svg>
                                                </div>
                                            </div>
                                        
                                    </div> */}
                                        <EditButton />

                                    </div>
                                    
                                </div>




                                <SecuritySettings />

                                {/*  <div className=" bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)] mx-[4.5vw] mt-[3.7vh] pt-[4vh] pb-[2vh] relative">

                                <div className="  text-[#2d3339] text-xl font-semibold font-['Poppins'] ml-[2.6vw] mb-[2vh]">Security</div>
                                <div className='grid grid-cols-2 grid-rows-2 ml-[3.5vw]'>
                                    <div className="">
                                        <div className="  text-[#1e1e1e] text-[18px] font-medium font-['Poppins']">Password</div>
                                        <div className="  text-[#64707d] text-[18px] font-medium font-['Poppins'] mb-[2.7vh]">●●●●●●●●●●</div>
                                    </div>

                                    <div class="flex items-center justify-end mr-[3.5vw]">
                                        <div class="text-[#64707d] text-[17px] font-normal font-['Poppins']">Updated 2 months ago</div>
                                    </div>

                                    <div className=" ">
                                        <div className=" text-[#1e1e1e] text-[17px] font-medium font-['Poppins']">Two-Factor Authentication</div>
                                        <div className=" text-[#64707d] text-[17px] font-medium font-['Poppins']">Enhance your account security</div>
                                    </div>

                                    <div className=" flex items-center justify-end mr-[3.5vw]">
                                        <div className="text-[#64707d] text-[18px] font-normal font-['Poppins']">Enabled</div>

                                    </div>
                                </div>
                                <div className=" absolute top-[2vh] right-[1vw]">
                                    
                                    <EditButton />
                                </div>
                            </div> */}


                                <div className=" bg-white dark:bg-[#1A1D20] rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)] mx-[4.5vw] md:mr-[2.5vw] md:ml-[1.5vw] lg:mx-[4.5vw] mt-[3.7vh] pt-[4vh] pb-[4.5vh] relative">

                                    <div className="  text-[#2d3339] dark:text-[#D7D7D7] lg:text-xl text-[14px] font-medium lg:font-semibold font-['Poppins'] ml-[2.6vw] mb-[2vh]">Address</div>

                                    <div className='lg:flex  max-sm:mr-[10vw] max-sm:ml-[7vw] lg:ml-[10vw] gap-[10vw]'>
                                        <div className=" ">
                                            <div className="   bg-[#f2f3ff] dark:bg-[#2D3339] rounded-[8px] max-sm:py-[3vh] max-sm:pl-[6vw] lg:rounded-[18px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] flex flex-col lg:mx-[0] justify-center md:mx-[3vw] md:py-[1.5vh] md:mb-[2.8vh] lg:w-[19.5vw] lg:h-[21vh] relative pl-[2.5vh] lg:pl-[2vw] max-sm:mb-[2.8vh]">
                                                <div className=" text-[#2d3339] dark:text-[#EBEDFF] lg:text-[16px] text-[13px] font-medium lg:font-semibold font-['Poppins'] mb-[0.3vh] ">Campus Address</div>
                                                <div className=" text-[#64707d] lg:text-sm text-[11px]  lg:font-normal font-['Poppins']">Room 203,Block B <br />IIT Jodhpur Campus <br />Karwar, Rajasthan 342037</div>
                                                <button className="text-white lg:text-[12px] text-[10px] font-normal font-['Poppins'] bg-[#4d4ef2] rounded-[5px] lg:rounded-[5px] lg:px-[0.8vw] px-[2vw] py-[0.3vh] absolute top-[2vh] right-[1.5vw] lg:right-[0.8vw] ">Primary</button>
                                                {/* <div className="  bg-[#4d4ef2] rounded-full p-[3px] absolute bottom-[1.4vh] right-[1vw]">
                                                <div data-svg-wrapper className=" ">
                                                    <svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.35901 20.3695H6.88673L17.3663 9.88992L15.8386 8.3622L5.35901 18.8418V20.3695ZM4.28693 22.5137C3.98317 22.5137 3.72873 22.4108 3.5236 22.2049C3.31848 21.9991 3.21556 21.7447 3.21484 21.4416V18.8418C3.21484 18.5559 3.26845 18.2833 3.37566 18.0238C3.48286 17.7644 3.63474 17.5367 3.83129 17.3409L17.3663 3.83265C17.5808 3.6361 17.8177 3.48422 18.0771 3.37701C18.3366 3.26981 18.6089 3.2162 18.8941 3.2162C19.1792 3.2162 19.4562 3.26981 19.7249 3.37701C19.9937 3.48422 20.2259 3.64504 20.4218 3.85945L21.8959 5.36037C22.1103 5.55692 22.2665 5.7892 22.3644 6.05722C22.4623 6.32524 22.5116 6.59326 22.5123 6.86129C22.5123 7.14717 22.463 7.41984 22.3644 7.67929C22.2658 7.93873 22.1096 8.1753 21.8959 8.389L8.38765 21.8973C8.1911 22.0938 7.9631 22.2457 7.70366 22.3529C7.44421 22.4601 7.1719 22.5137 6.88673 22.5137H4.28693ZM16.5891 9.13946L15.8386 8.3622L17.3663 9.88992L16.5891 9.13946Z" fill="white" />
                                                    </svg>
                                                </div>
                                            </div> */}
                                                <div className='absolute bottom-[1.4vh] right-[1vw]'>
                                                    <button className="w-8 h-8 flex items-center justify-center bg-[#4848f6] rounded-full shadow-lg hover:bg-[#4747f4] hover:scale-110 hover:shadow-xl hover:translate-y-[-4px] active:scale-95 transition-all duration-300 ease-in-out">
                                                        <Pencil size={17} color="white" />
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className=" ">
                                            <div className=" bg-[#f2f3ff] dark:bg-[#2D3339] md:mx-[3vw] md:py-[1.5vh] lg:mx-[0]  rounded-[8px] max-sm:py-[3vh]  max-sm:pl-[6vw] lg:rounded-[18px]  shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] flex flex-col justify-center  lg:w-[18.5vw] lg:h-[21vh]  pl-[2.6vw]">
                                                <div className=" text-[#2d3339] dark:text-[#EBEDFF] text-[13px] lg:text-[16px] font-medium lg:font-semibold font-['Poppins'] mb-[0.3vh]">Home Address</div>
                                                <div className=" text-[#64707d]  text-[12px] lg:text-sm font-normal font-['Poppins']">23,Park Street <br />New Delhi,110001</div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className=" absolute top-[2vh] right-[1vw]">
                                        <div className="  bg-[#ebedff] rounded-[50px] flex items-center">
                                            <div className="  text-[#4a4a4a] text-[11px] lg:text-sm font-normal font-['Poppins'] mr-[0.5vw] ml-[1vw]">Add New</div>
                                            <div className=" ">
                                                <div className="  bg-[#4d4ef2] rounded-full p-[3px]">
                                                    <div data-svg-wrapper class=" ">
                                                        <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.35901 20.3695H6.88673L17.3663 9.88992L15.8386 8.3622L5.35901 18.8418V20.3695ZM4.28693 22.5137C3.98317 22.5137 3.72873 22.4108 3.5236 22.2049C3.31848 21.9991 3.21556 21.7447 3.21484 21.4416V18.8418C3.21484 18.5559 3.26845 18.2833 3.37566 18.0238C3.48286 17.7644 3.63474 17.5367 3.83129 17.3409L17.3663 3.83265C17.5808 3.6361 17.8177 3.48422 18.0771 3.37701C18.3366 3.26981 18.6089 3.2162 18.8941 3.2162C19.1792 3.2162 19.4562 3.26981 19.7249 3.37701C19.9937 3.48422 20.2259 3.64504 20.4218 3.85945L21.8959 5.36037C22.1103 5.55692 22.2665 5.7892 22.3644 6.05722C22.4623 6.32524 22.5116 6.59326 22.5123 6.86129C22.5123 7.14717 22.463 7.41984 22.3644 7.67929C22.2658 7.93873 22.1096 8.1753 21.8959 8.389L8.38765 21.8973C8.1911 22.0938 7.9631 22.2457 7.70366 22.3529C7.44421 22.4601 7.1719 22.5137 6.88673 22.5137H4.28693ZM16.5891 9.13946L15.8386 8.3622L17.3663 9.88992L16.5891 9.13946Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>





                                <div className=" bg-white dark:bg-[#1A1D20] rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)] mx-[4.5vw] md:mr-[2.5vw] md:ml-[1.5vw] lg:mx-[4.5vw] mt-[3.7vh] pt-[4vh] pb-[2vh] relative mb-[2.8vh]">

                                    <div className="  text-[#1A1D20] dark:text-[#D7D7D7] text-[14px] lg:text-xl lg:font-semibold font-['Poppins'] ml-[2.6vw] mb-[2vh]">Account Actions</div>
                                    <div className='lg:grid lg:grid-cols-2 lg:grid-rows-2 ml-[3.5vw]'>
                                        <div className="">
                                            <div className="  text-[#1e1e1e] dark:text-[#BBC2C9] lg:text-[18px] text-[14px] font-medium font-['Poppins']">Logout</div>
                                            <div className="  text-[#64707d] dark:text-[#64707D] lg:text-[17px] text-[13px] font-medium font-['Poppins'] mb-[2.7vh]">Sign out from all devices</div>
                                        </div>

                                        <div className="flex items-center justify-end mr-[3.5vw] ">
                                            <button onClick={handleLogout} className=" text-[#313131] text-[13px] lg:text-[17px] font-normal font-['Poppins']   bg-[#e5e8ff] rounded-[7px] lg:px-[0.8vw] lg:py-[0.8vh] px-[2.5vw] py-[0.9vh] flex justify-center items-center transition-all duration-300 cursor-pointer hover:bg-[#d9deff] hover:scale-105 "> < svg className='m-[0.2vw]' width="15" height="14" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.47934 1H1.93492C1.42071 1 1 1.39705 1 1.88234V14.2351C1 14.7204 1.42071 15.1174 1.93492 15.1174H8.47934" stroke="#364EF2" stroke-width="1.86983" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M5.67578 8.05859H16.4273" stroke="#364EF2" stroke-width="1.86983" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M13.1543 4.97058L16.4265 8.05877L13.1543 11.147" stroke="#364EF2" stroke-width="1.86983" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>Logout</button>
                                        </div>

                                        <div className=" ">
                                            <div className=" text-[#1e1e1e] dark:text-[#BBC2C9] text-[14px] lg:text-[18px]  font-medium font-['Poppins']">Delete Account</div>
                                            <div className=" text-[#64707d] dark:text-[#64707D] text-[13px] lg:text-[17px] font-medium font-['Poppins']">Permanently delete your account and all data</div>
                                        </div>

                                        <div className=" flex items-center justify-end mr-[3.5vw]">
                                            {/* <button className="text-[#e30000] text-[15px] font-normal font-['Poppins'] bg-[#ffdddd] rounded-[7px] px-[0.8vw] py-[0.8vh] transition-all duration-300 cursor-pointer hover:bg-[#f9c7c7] hover:scale-105 ">Delete Account</button>
 */}                                    <AlertDialogDemo />
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        </div>
                    </>
                ) : (

                    <Loader />
                )}

            </div>

        </>
    )



}

export default Profile



