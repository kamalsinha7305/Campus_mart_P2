import React from "react";
import { motion } from "framer-motion";
import { Pencil, X } from "lucide-react";

const EditButton = React.forwardRef(({ isEditing, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className="relative flex items-center bg-blue-100 w-[78px] h-[31px] rounded-full px-2 overflow-hidden transition-all duration-300"
    >
      <motion.span
        initial={false}
        animate={{ x: isEditing ? 30 : 10 }}
        className="text-gray-700 font-medium text-[12px] font-['Poppins'] transition-all duration-300"
      >
        {isEditing ? "Exit" : "Edit"}
      </motion.span>
      <motion.div
        initial={false}
        animate={{ x: isEditing ? -40.7 : 5 }}
        className={`w-7 h-7 rounded-full flex items-center justify-center absolute right-2 transition-all duration-300 ${
          isEditing ? "bg-red-500" : "bg-[#4d4ef2]"
        }`}
      >
        {isEditing ? <X size={15} color="white" /> : <Pencil size={15} color="white" />}
      </motion.div>
    </button>
  );
});

export default EditButton;
