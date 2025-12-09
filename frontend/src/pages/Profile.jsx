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
import { auth, db } from "../components/firebase";

import { toast } from 'react-toastify';
import EditButton from '../components/editbutton';
import SecuritySettings from '../components/SecuritySettings';
import Header from '../components/Header';
import AddressModal from '../components/AddressModal'; // Add this line
import { Pencil, Plus, Trash2 } from "lucide-react"; // Added Trash2

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../components/firebase";
import { div } from 'framer-motion/client';

import whitebag from "../assets/whitebag.png";
import { motion, AnimatePresence } from "framer-motion";

function Profile() {
    const [uploading, setUploading] = useState(false);
    const [photoURL, setPhotoURL] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmResult, setConfirmResult] = useState(null);
    const [otpSent, setOtpSent] = useState(false);
    const [phone, setPhone] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [userDetails, setUserDetails] = useState(null);

    // --- NEW ADDRESS STATE ---
    const [addresses, setAddresses] = useState([]); // Store array of addresses
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const [formData, setFormData] = useState({
        line1: '',
        line2: '',
        state: '',
        city: '',
        pincode: ''
    });

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

                    // LOAD ADDRESSES
                    if (data.savedAddresses && Array.isArray(data.savedAddresses)) {
                        setAddresses(data.savedAddresses);
                    } else if (data.addressDetails) {
                        // Migrate legacy single address to array
                        setAddresses([data.addressDetails]);
                    }
                }
            }
        };
        fetchData();
    }, []);

    const handleAddClick = () => {
        setEditingIndex(null); // Null means we are adding a NEW address
        setIsModalOpen(true);
    };

    const handleEditClick = (index) => {
        setEditingIndex(index); // Set the specific index we want to edit
        setIsModalOpen(true);
    };

    const handleSaveAddress = async (newAddressData) => {
        try {
            const user = auth.currentUser;
            if (user) {
                let updatedAddresses = [...addresses];

                if (editingIndex !== null) {
                    // Update existing address
                    updatedAddresses[editingIndex] = newAddressData;
                } else {
                    // Add new address
                    updatedAddresses.push(newAddressData);
                }

                setAddresses(updatedAddresses);

                // Save array to Firestore
                const docRef = doc(db, "Users", user.uid);
                await updateDoc(docRef, {
                    savedAddresses: updatedAddresses,
                    // Update legacy field for backward compatibility if needed
                    addressDetails: updatedAddresses[0] || {}
                });

                toast.success(editingIndex !== null ? "Address updated!" : "New address added!");
                setIsModalOpen(false);
            }
        } catch (error) {
            console.error("Error updating address:", error);
            toast.error("Failed to update address");
        }
    };

    // Calculate if incomplete for the warning message
    const isAddressIncomplete = !formData.line1 || !formData.city || !formData.pincode;

    // --- DELETE ADDRESS FUNCTION ---
    const handleDeleteAddress = async (indexToDelete) => {
        // 1. Confirm before deleting
        if (!window.confirm("Are you sure you want to delete this address?")) return;

        try {
            const user = auth.currentUser;
            if (user) {
                // 2. Filter out the address at the specific index
                const updatedAddresses = addresses.filter((_, index) => index !== indexToDelete);

                // 3. Update Local State
                setAddresses(updatedAddresses);

                // 4. Update Firebase
                const docRef = doc(db, "Users", user.uid);
                await updateDoc(docRef, {
                    savedAddresses: updatedAddresses,
                    // Ensure the main address field is updated to the new first address (or empty)
                    addressDetails: updatedAddresses[0] || {}
                });

                toast.success("Address deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting address:", error);
            toast.error("Failed to delete address");
        }
    };

    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/login";
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }

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

    return (
        <>
            <div>
                {userDetails ? (
                    <>
                        {/* Prevent whole page from scrolling */}
                        <div className='w-screen h-screen overflow-hidden dark:bg-[#131313]'>
                            <Header bagUrl={whitebag} />

                            {/* Layout: left sidebar fixed, right content scroll only */}
                            {/* Change 70px if your header height is different */}
                            <div className='flex h-[calc(100vh-70px)]'>
                                <div className="hidden md:block md:w-[37%] lg:w-[28%] pt-[3.5vh] pl-[2vw] pr-[1.75vw] pb-[2vh] bg-[#FBFBFB]  dark:bg-[#131313] ">
                                    <Profile_left_part />
                                </div>

                                {/* RIGHT SCROLLABLE AREA */}
                                <div className='h-full md:w-[63%] lg:w-[72%] overflow-y-auto no-scrollbar bg-[#FBFBFB] dark:bg-[#131313] ' >

                                    <div className="bg-white dark:bg-[#1A1D20] rounded-[14px] lg:rounded-[20px] shadow-[0px_4px_10px_0px_rgba(54,54,54,0.10)] mx-[4.5vw] md:mr-[2.5vw] md:ml-[1.5vw] lg:mx-[4.5vw] overflow-hidden mt-[3vh] md:mt-[5vh]">
                                        <div className="bg-gradient-to-l from-[#364ef2] to-[#534ff2] flex items-center px-[5vw] py-[1.3vh] md:px-[4vw] md:py-[1.3vh] lg:px-[2.5vw] lg:py-[2.2vh]">
                                            <div className='relative'>
                                                <div className="px-[5px] py-[5px] md:px-[5px] md:py-[5px] lg:px-[5px] lg:py-[5px] bg-[#292929] rounded-[63.23px] shadow-[0px_12.772851943969727px_10px_0px_rgba(0,0,0,0.10)] border border-white justify-center items-center inline-flex overflow-hidden">
                                                    <img src={userDetails.photoURL || Image11}
                                                        alt="Profile"
                                                        className="w-[42px] h-[42px] md:h-[45px] md:w-[45px] lg:w-[60px] lg:h-[60px]"
                                                    />
                                                </div>
                                                <div>
                                                    <button
                                                        className={`w-6 h-6 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ease-in-out absolute bottom-0 right-0 bg-white hover:scale-110`}
                                                    >
                                                        <Pencil size={14} color="blue" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className='flex flex-col ml-[4vw] md:ml-[1.5vw] lg:ml-[2vw]'>
                                                <div className="text-white text-[12px] lg:text-[22px] font-semibold font-['Poppins']">{userDetails.firstName} {userDetails.lastName} </div>
                                                <div className="text-white text-[9px] lg:text-base font-light font-['Poppins']">Member since October 2022</div>
                                            </div>
                                        </div>

                                        <div className='flex justify-evenly items-center py-[3.8vh]'>
                                            <div>
                                                <div className="h-[10vh] w-[25vw] md:h-[12vh] md:w-[12vw] lg:h-[13vh] lg:w-[12vw] bg-[#fbfbfb]/25 dark:bg-[#2D3339] rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] flex flex-col justify-center items-center">
                                                    <div className="text-black dark:text-[#AAB9C5] text-[12px] lg:text-[16px] font-semibold font-['Poppins']">12</div>
                                                    <div className="text-black dark:text-[#AAB9C5] text-[10px] lg:text-[16px] font-light font-['Poppins']">Product Listed</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="h-[10vh] w-[25vw] md:h-[12vh] md:w-[12vw] lg:h-[13vh] lg:w-[12vw] bg-[#fbfbfb] dark:bg-[#2D3339] rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] flex flex-col justify-center items-center">
                                                    <div className="text-black dark:text-[#AAB9C5] text-[12px] lg:text-[16px] font-semibold font-['Poppins']">8</div>
                                                    <div className="text-black dark:text-[#AAB9C5] text-[12px] lg:text-[16px] font-light font-['Poppins']">Orders</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="h-[10vh] w-[25vw] md:h-[12vh] md:w-[12vw] lg:h-[13vh] lg:w-[12vw] bg-[#fbfbfb] dark:bg-[#2D3339] rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] flex flex-col justify-center items-center">
                                                    <div className="text-black dark:text-[#AAB9C5] text-[12px] lg:text-[16px] font-semibold font-['Poppins']">4.8</div>
                                                    <div className="text-black dark:text-[#AAB9C5] text-[12px] lg:text-[16px] font-light font-['Poppins']">Rating</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-[#1A1D20] rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)] mx-[4.5vw] md:mr-[2.5vw] md:ml-[1.5vw] lg:mx-[4.5vw] mt-[3.7vh] pt-[4vh] pb-[2vh] relative">
                                        <div className="text-[#2d3339] dark:text-[#D7D7D7] text-[15px] font-medium lg:text-xl lg:font-semibold font-['Poppins'] ml-[2.6vw] mb-[2vh]">Personal Information</div>
                                        <div className='lg:grid grid-cols-2 grid-rows-2 ml-[3.5vw]'>
                                            <div>
                                                <div className="text-[#848484] dark:text-[#848484] text-[13px] lg:text-lg font-normal font-['Poppins']">Name</div>
                                                <div className="text-[#2d3339] dark:text-[#BBC2C9] text-[14px] lg:text-[18px] lg:font-medium font-['Poppins'] lg:mb-[2.7vh] max-sm:mb-[2vh]">{userDetails.firstName} {userDetails.lastName} </div>
                                            </div>

                                            <div>
                                                <div className="text-[#848484] dark:text-[#848484] text-[13px] lg:text-lg font-normal font-['Poppins']">Email</div>
                                                <div className="text-[#2d3339] dark:text-[#BBC2C9] text-[14px] lg:text-[17px] lg:font-medium font-['Poppins'] max-sm:mb-[2vh]">{userDetails.email}</div>
                                            </div>
                                            <div>
                                                <div className="text-[#848484] dark:text-[#848484] text-[13px] lg:text-lg font-normal font-['Poppins']">
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
                                            </div>
                                            <div className="mb-[2.7vh]">
                                                <div className="text-[#848484] dark:text-[#848484] lg:text-lg text-[13px] font-normal font-['Poppins']">Gender</div>
                                                <div className="text-[#2d3339] dark:text-[#BBC2C9] lg:text-[18px] text-[14px] lg:font-medium font-['Poppins'] max-sm:mb-[2vh]">Male</div>
                                            </div>
                                        </div>
                                        <div className="absolute top-[2vh] right-[1vw]">
                                            <EditButton />
                                        </div>
                                    </div>

                                    <SecuritySettings />

                                    {/* --- ADDRESS SECTION START --- */}
                                    <div className="bg-white dark:bg-[#1A1D20] rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)] mx-[4.5vw] md:mr-[2.5vw] md:ml-[1.5vw] lg:mx-[4.5vw] mt-[3.7vh] pt-[4vh] pb-[4.5vh] relative">
                                        <div className="text-[#2d3339] dark:text-[#D7D7D7] lg:text-xl text-[14px] font-medium lg:font-semibold font-['Poppins'] ml-[2.6vw] mb-[2.5vh]">
                                            Address
                                        </div>

                                        <div className="flex flex-wrap gap-[3vw] lg:gap-[1.5vw] px-[4vw] lg:px-[2.6vw]">

                                            {addresses.map((addr, index) => (
                                                <div key={index} className="bg-[#f2f3ff] dark:bg-[#2D3339] rounded-[8px] py-[3vh] pl-[6vw] lg:rounded-[18px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] flex flex-col justify-center relative w-full md:w-[40vw] lg:w-[19.5vw] lg:h-[21vh] lg:pl-[2vw] mb-[2vh]">
                                                    <div className="text-[#2d3339] dark:text-[#EBEDFF] lg:text-[16px] text-[13px] font-medium lg:font-semibold font-['Poppins'] mb-[0.8vh]">
                                                        {index === 0 ? "Campus Address" : `Address ${index + 1}`}
                                                    </div>

                                                    <div className="text-[#64707d] lg:text-[12.5px] text-[11px] font-['Poppins'] min-h-[9vh] flex flex-col justify-center">
                                                        <div className="flex flex-col gap-[3px] text-[#2d3339] dark:text-[#D7D7D7]">
                                                            <div className="font-medium truncate pr-4">{addr.line1}</div>
                                                            <div className="truncate pr-4">{addr.line2}</div>
                                                            <div>
                                                                {addr.city} {addr.pincode ? `- ${addr.pincode}` : ''}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {index === 0 && (
                                                        <div className="bg-[#4d4ef2] text-white lg:text-[12px] text-[10px] font-normal font-['Poppins'] rounded-[5px] px-[2vw] lg:px-[0.8vw] py-[0.3vh] absolute top-[2vh] right-[1.5vw] lg:right-[0.8vw]">
                                                            Primary
                                                        </div>
                                                    )}

                                                    <div className="absolute bottom-[1.4vh] right-[1vw] flex gap-2">
                                                        <button
                                                            onClick={() => handleDeleteAddress(index)}
                                                            className="w-8 h-8 flex items-center justify-center rounded-full shadow-lg bg-white border border-red-500 hover:bg-red-50 transition-all active:scale-95 group"
                                                            title="Delete Address"
                                                        >
                                                            <Trash2 size={16} className="text-red-500" />
                                                        </button>

                                                        <button
                                                            onClick={() => handleEditClick(index)}
                                                            className="w-8 h-8 flex items-center justify-center rounded-full shadow-lg bg-[#4848f6] hover:bg-[#4747f4] hover:scale-110 transition-all active:scale-95"
                                                            title="Edit Address"
                                                        >
                                                            <Pencil size={17} color="white" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}

                                            {addresses.length < 3 && (
                                                <button
                                                    onClick={handleAddClick}
                                                    className="bg-white border-2 border-dashed border-[#4d4ef2] dark:bg-[#2D3339] dark:border-[#4d4ef2] rounded-[8px] lg:rounded-[18px] flex flex-col items-center justify-center relative w-full md:w-[40vw] lg:w-[19.5vw] min-h-[15vh] lg:h-[21vh] mb-[2vh] hover:bg-[#f2f3ff] dark:hover:bg-[#363b41] transition-colors group"
                                                >
                                                    <div className="bg-[#4d4ef2] rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform">
                                                        <Plus size={24} color="white" />
                                                    </div>
                                                    <div className="text-[#4d4ef2] font-medium mt-3 font-['Poppins'] text-sm">
                                                        Add New Address
                                                    </div>
                                                </button>
                                            )}

                                        </div>

                                        <AnimatePresence>
                                            {isAddressIncomplete && (
                                                <motion.div
                                                    initial={{ x: -100, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    exit={{ x: -100, opacity: 0 }}
                                                    className="bg-red-100 text-red-800 text-sm font-medium px-4 py-[6px] rounded-md border border-red-400 mx-[2.5vw] mt-[1.5vh] inline-block"
                                                >
                                                    ⚠️ Please add at least one address.
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    {/* --- ADDRESS SECTION END --- */}

                                    <AddressModal
                                        isOpen={isModalOpen}
                                        onClose={() => setIsModalOpen(false)}
                                        onSave={handleSaveAddress}
                                        initialData={editingIndex !== null ? addresses[editingIndex] : {
                                            line1: '', line2: '', state: '', city: '', pincode: ''
                                        }}
                                    />

                                    <div className="bg-white dark:bg-[#1A1D20] rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)] mx-[4.5vw] md:mr-[2.5vw] md:ml-[1.5vw] lg:mx-[4.5vw] mt-[3.7vh] pt-[4vh] pb-[2vh] relative mb-[2.8vh]">
                                        <div className="text-[#1A1D20] dark:text-[#D7D7D7] text-[14px] lg:text-xl lg:font-semibold font-['Poppins'] ml-[2.6vw] mb-[2vh]">Account Actions</div>
                                        <div className='lg:grid lg:grid-cols-2 lg:grid-rows-2 ml-[3.5vw]'>
                                            <div>
                                                <div className="text-[#1e1e1e] dark:text-[#BBC2C9] lg:text-[18px] text-[14px] font-medium font-['Poppins']">Logout</div>
                                                <div className="text-[#64707d] dark:text-[#64707D] lg:text-[17px] text-[13px] font-medium font-['Poppins'] mb-[2.7vh]">Sign out from all devices</div>
                                            </div>

                                            <div className="flex items-center justify-end mr-[3.5vw]">
                                                <button onClick={handleLogout} className="text-[#313131] text-[13px] lg:text-[17px] font-normal font-['Poppins'] bg-[#e5e8ff] rounded-[7px] lg:px-[0.8vw] lg:py-[0.8vh] px-[2.5vw] py-[0.9vh] flex justify-center items-center transition-all duration-300 cursor-pointer hover:bg-[#d9deff] hover:scale-105">
                                                    <svg className='m-[0.2vw]' width="15" height="14" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.47934 1H1.93492C1.42071 1 1 1.39705 1 1.88234V14.2351C1 14.7204 1.42071 15.1174 1.93492 15.1174H8.47934" stroke="#364EF2" strokeWidth="1.86983" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.67578 8.05859H16.4273" stroke="#364EF2" strokeWidth="1.86983" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M13.1543 4.97058L16.4265 8.05877L13.1543 11.147" stroke="#364EF2" strokeWidth="1.86983" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Logout
                                                </button>
                                            </div>

                                            <div>
                                                <div className="text-[#1e1e1e] dark:text-[#BBC2C9] text-[14px] lg:text-[18px] font-medium font-['Poppins']">Delete Account</div>
                                                <div className="text-[#64707d] dark:text-[#64707D] text-[13px] lg:text-[17px] font-medium font-['Poppins']">Permanently delete your account and all data</div>
                                            </div>

                                            <div className="flex items-center justify-end mr-[3.5vw]">
                                                <AlertDialogDemo />
                                            </div>
                                        </div>
                                    </div>

                                </div> {/* end right scrollable */}
                            </div> {/* end main flex */}
                        </div> {/* end outer container */}
                    </>
                ) : (

                    <Loader />
                )}

            </div>

        </>
    )
}

export default Profile
