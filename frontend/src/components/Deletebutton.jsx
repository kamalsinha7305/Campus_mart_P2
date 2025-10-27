import * as React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog"; // <-- THE FIX IS HERE
import "./deletestyle.css";
import { toast } from "react-toastify";
import { auth } from "../components/firebase";

function AlertDialogDemo() {
  
  async function handleDeleteAccount() {
    try {
      const user = auth.currentUser;

      if (!user) {
        toast.error("No user is logged in.");
        window.location.href = "/login";
        return;
      }

      const idToken = await user.getIdToken();

      const response = await fetch('http://localhost:5001/api/auth/delete-account', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${idToken}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete account.');
      }
      
      toast.success("Account deleted successfully.");
      await auth.signOut();
      window.location.href = "/login";

    } catch (error) {
      console.error("Error deleting account:", error.message);
      toast.error(error.message || "Failed to delete account. Please try again");
    }
  }

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button className="text-[#e30000] text-[13px] lg:text-[17px] font-normal font-['Poppins'] bg-[#ffdddd] rounded-[7px] px-[2.5vw] py-[0.9vh] lg:px-[0.8vw] lg:py-[0.8vh] transition-all duration-300 cursor-pointer hover:bg-[#f9c7c7] hover:scale-105 ">
            Delete Account
          </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="AlertDialogOverlay" />
          <AlertDialog.Content className="AlertDialogContent ">
            <AlertDialog.Title className="AlertDialogTitle ">
              Are you absolutely sure?
            </AlertDialog.Title>
            <AlertDialog.Description className="AlertDialogDescription">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialog.Description>
            <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
              <AlertDialog.Cancel asChild>
                <button className="Button mauve">Cancel</button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button onClick={handleDeleteAccount} className="Button red">Yes, delete account</button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  );
}

export default AlertDialogDemo;