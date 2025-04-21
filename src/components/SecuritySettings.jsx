"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import EditButton from "./editbutton";
import "./deletestyle.css";
import { auth } from "../components/firebase"; 
import {reauthenticateWithCredential,EmailAuthProvider,updatePassword,}from "firebase/auth";
import {toast} from "react-toastify";
export default function SecuritySettings() {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      setMessage("Please fill in all fields.");
      toast.error("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match.");
      toast.error("New passwords do not match.")
      return;
    }

    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user.email,
      oldPassword
    );

    try {

      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, newPassword);

      setMessage("Password updated successfully.");
      toast.success("password updated successfuly.");
      

    } catch (error) {
      setMessage(error.message);
    }
  };


  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)] mx-[4.5vw] mt-[3.7vh] pt-[4vh] pb-[2vh] relative">
      <div className="text-[#2d3339] text-[15px] font-medium lg:text-xl lg:font-semibold font-['Poppins'] ml-[2.6vw]  lg:ml-[2.6vw] lg:mb-[2vh] mb-[2vh]">
        Security
      </div>

      <div className="grid grid-cols-2 grid-rows-2 ml-[3.5vw]">
        <div>
          <div className="text-[#1e1e1e] text-[14px] lg:text-[18px] font-medium font-['Poppins']">
            Password
          </div>
          <div className="text-[#64707d] text-[15px] lg:text-[18px] lg:font-medium font-['Poppins'] mb-[2.8vh] lg:mb-[2.7vh]">
            ●●●●●●●●●●
          </div>
        </div>

        <div className="flex items-center justify-end mr-[3.5vw]">
          <div className="text-[#64707d] text-[11.5px] lg:text-[17px] lg:font-normal font-['Poppins']">
            Updated 2 months ago
          </div>
        </div>

        <div>
          <div className="text-[#1e1e1e] text-[12px] font-medium lg:text-[17px] lg:font-medium font-['Poppins']">
            Two-Factor Authentication
          </div>
          <div className="text-[#64707d] text-[10px] lg:text-[17px] font-medium font-['Poppins']">
            Enhance your account security
          </div>
        </div>

        <div className="flex items-center justify-end mr-[3.5vw]">
          <div className="text-[#64707d] text-[11px] lg:text-[18px] font-normal font-['Poppins']">
            Enabled
          </div>
        </div>
      </div>

   
      <Dialog.Root 
        onOpenChange={(open) => setIsEditing(open)} // Update state when modal opens/closes
      >
        <Dialog.Trigger asChild >
        <div className="absolute top-4 right-4">
      <EditButton isEditing={isEditing} />
    </div>
        </Dialog.Trigger>

        {/* Modal Popup */}
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay fixed inset-0 " />
          <Dialog.Content className="fixed top-[40%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  px-6 py-3 lg:p-6 rounded-xl shadow-lg lg:w-[400px] w-[85vw]">
            <Dialog.Title className="text-[15px]  lg:text-lg font-semibold">
              Change Password
            </Dialog.Title>
            <Dialog.Description className="text-[11px] lg:text-sm text-gray-500">
              Enter your old password and set a new one.
            </Dialog.Description>

            <form className="mt-2 lg:mt-4 space-y-3">
              <div>
                <label className="text-[12px] font-normal lg:text-sm lg:font-medium">Old Password</label>
                <input
                  type="password"
                  className="w-full max-sm:py-[0.4vh] lg:p-2 border rounded-md lg:mt-1"
                  value={oldPassword}
                  onChange={(e)=> setOldPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="text-[12px]  font-normal lg:text-sm lg:font-medium">New Password</label>
                <input
                  type="password"
                  className="w-full  max-sm:py-[0.4vh] lg:p-2 border rounded-md lg:mt-1"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div>
                <label className=" text-[12px]  lg:text-sm lg:font-medium">Confirm Password</label>
                <input
                  type="password"
                  className="w-full max-sm:py-[0.4vh] lg:p-2 border rounded-sm lg:mt-1"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
               <div>
                
               {message && (
                <p className="text-sm text-red-500 mt-3">{message}</p>
                 )}
               </div>
              <div className="flex justify-end gap-4 lg:gap-4 mt-4">
                <Dialog.Close asChild>
                  <button className=" bg-gray-500 text-white px-[2.8vw] lg:px-[1.5vw] text-[14px]  rounded-md py-[0.6vh] lg:text-[16px] font-normal lg:font-medium ">
                    Cancel
                  </button>
                </Dialog.Close>
                <button
                  type="button"
                  className="lg:px-5 lg:py-1  px-[4vw]  text-[14px] lg:text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={handleChangePassword}
                >
                  Save
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
