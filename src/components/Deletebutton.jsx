import * as React from "react";
import { AlertDialog } from "radix-ui";
import "./deletestyle.css";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../components/firebase";
import { toast } from "react-toastify";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
 function AlertDialogDemo() {
     
	async function handleDeleteAccount() {
		try {
			const user = auth.currentUser;
	
			if (!user) {
				console.error("No user is currently logged in.");
				window.location.href = "/login";
				return;
			}
	
			const email = user.email;
			const password = prompt("Please enter your password to delete your account:");
	
			if (!password) {
				console.error("Password not provided.");
                toast.error("User account deleted successfully");	
				return;
			}
	
			const credential = EmailAuthProvider.credential(email, password);
	
			await reauthenticateWithCredential(user, credential);
			await user.delete();
	
			console.log("User account deleted successfully!");
			toast.success("User account deleted successfully");			
			window.location.href = "/login";
		} catch (error) {
			console.error("Error deleting account:", error.message);
			alert("Failed to delete account. Please check your password and try again.");
			toast.error("Failed to delete account. Please try again");	
		}
	}
	
return(
<>
	<AlertDialog.Root>
		<AlertDialog.Trigger asChild>
			<button className="Button violet">Delete account</button>
		</AlertDialog.Trigger>
		<AlertDialog.Portal>
			<AlertDialog.Overlay className="AlertDialogOverlay" />
			<AlertDialog.Content className="AlertDialogContent">
				<AlertDialog.Title className="AlertDialogTitle">
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
	</>)
}

export default AlertDialogDemo;
