import React, { useState } from "react";
import Profile_left_part from "../components/Profile_left_part";
import Header from "../components/Header";
import whitebag from "../assets/whitebag.png";
import ProductCard from "../components/ProductCard";

const faqs = [
  {
    question: "How do I track my order?",
    answer:
      "You can track your order from the 'My Orders' section in your account. Each order will have a tracking link once it is shipped.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 7–10 days of delivery, as long as the item is unused and in its original packaging.",
  },
  {
    question: "How can I change my shipping address?",
    answer:
      "You can change your shipping address from the 'My Account' section, or update it before placing your order at checkout.",
  },
];

function ContactUs() {
  const [contactType, setContactType] = useState("");
  const [message, setMessage] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [isContactTypeOpen, setIsContactTypeOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ contactType, message });
    alert("Message sent!");
    setContactType("");
    setMessage("");
  };

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
     
      <div className="w-screen h-screen overflow-hidden dark:bg-[#131313]">
        <Header bagUrl={whitebag} />

        <div className="flex h-[calc(100vh-70px)]">

          <div className="hidden md:block md:w-[35%] lg:w-[28%] pt-[3.5vh] px-[2vw] pb-[2vh] bg-[#FBFBFB] dark:bg-[#131313]">
            <Profile_left_part />
          </div>

          <div className="md:w-[65%] lg:w-[72%] flex flex-col bg-[#FBFBFB] dark:bg-[#131313] overflow-y-auto no-scrollbar">
            <div className="lg:ml-[1.5vw] md:ml-[2vw] md:mr-[3.2vw]">
              <div className="mt-[5vh] mb-[4vh] max-sm:ml-[4vw]">
                <div className="flex flex-col items-start">
                  <div className="text-[#292929] dark:text-[#F1F1F1] text-[18px] lg:text-[24px] font-medium font-['Poppins'] flex items-center">
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-[1.5vw] lg:mr-[0.3vw]"
                    >
                      <path
                        d="M21 5C21 5 22 6 22.5 7"
                        stroke="#111111"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 5C3 5 2 6 1.5 7"
                        stroke="#111111"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="3"
                        y="6"
                        width="18"
                        height="14"
                        rx="2"
                        fill="#2962ff"
                        stroke="#111111"
                        strokeWidth="1"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 7L12 13L21 7"
                        stroke="#111111"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Contact Us
                  </div>

                  <div className="ml-[1vw] md:ml-[0.3vw] justify-start text-gray-500 text-sm md:text-base font-normal font-['Roboto']">
                    We're here to help! Please fill out the form below to get
                    in touch with our support team.
                  </div>

                  <div className="flex justify-center">
                    <div>
                      <form
                        onSubmit={handleSubmit}
                        className="rounded-xl p-6 mb-2"
                      >
                        <div className="mb-5">
                          <label
                            htmlFor="contactType"
                            className="block text-sm font-medium text-gray-800 mb-2 dark:text-white"
                          >
                            Contact Type
                          </label>

                          <div className="relative w-[80vw] md:w-[50vw] lg:w-[25vw]">
                            {/* Trigger */}
                            <button
                              type="button"
                              onClick={() =>
                                setIsContactTypeOpen((prev) => !prev)
                              }
                              className={`h-11 w-full rounded-lg border text-sm pl-3 pr-4 flex items-center justify-between
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
        bg-white dark:bg-[#1A1D20] dark:text-white dark:border-none border-gray-300
        transition-all duration-200 ${
          isContactTypeOpen ? "shadow-md scale-[1.01]" : ""
        }`}
                            >
                              <span
                                className={
                                  contactType
                                    ? "text-gray-800 dark:text-white"
                                    : "text-gray-400"
                                }
                              >
                                {contactType === ""
                                  ? "Select a contact type"
                                  : contactType === "order"
                                  ? "Order issue"
                                  : contactType === "payment"
                                  ? "Payment issue"
                                  : contactType === "account"
                                  ? "Account help"
                                  : "Other"}
                              </span>

                              {/* Chevron */}
                              <span className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  className={`w-4 h-4 transition-transform duration-200 ease-out dark:text-white ${
                                    isContactTypeOpen ? "rotate-180" : "rotate-0"
                                  }`}
                                >
                                  <path
                                    d="M6 9l6 6 6-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </button>

                            <div
                              className={`
        absolute left-0 mt-1 w-full rounded-lg border font-['Poppins'] dark:text-white border-gray-200
        bg-white dark:bg-[#1A1D20] dark:border-none shadow-lg z-30 overflow-hidden
        transform origin-top transition-all duration-200 ease-out
        ${isContactTypeOpen ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0 pointer-events-none"}
      `}
                            >
                              {[
                                { value: "order", label: "Order issue" },
                                { value: "payment", label: "Payment issue" },
                                { value: "account", label: "Account help" },
                                { value: "other", label: "Other" },
                              ].map((opt) => (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => {
                                    setContactType(opt.value);
                                    setIsContactTypeOpen(false);
                                  }}
                                  className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#252A30]
            ${contactType === opt.value ? "bg-gray-100 dark:bg-[#252A30]" : ""
                                    }`}
                                >
                                  {opt.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-800 mb-2 dark:text-white"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-[80vw] md:w-[50vw] lg:w-[25vw] rounded-lg border border-gray-300 text-sm px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#1A1D20] dark:text-white dark:border-none"
                            placeholder="Describe your issue or question..."
                          />
                        </div>

                        {/* Button */}
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
                        >
                          Send
                        </button>
                      </form>

                      {/* FAQ section */}
                      <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white font-['Roboto']">
                          Frequently Asked Questions
                        </h2>

                        <div className="space-y-3">
                          {faqs.map((item, index) => {
                            const isOpen = activeIndex === index;
                            return (
                              <div
                                key={index}
                                className="border dark:bg-[#1A1D20] border-gray-200 dark:border-none rounded-lg bg-white w-full  lg:w-[60vw]"
                              >
                                <button
                                  type="button"
                                  onClick={() => toggleFAQ(index)}
                                  className="w-full flex items-center justify-between text-left px-4 py-3"
                                >
                                  <span className="text-sm sm:text-base text-gray-800 dark:text-white font-normal font-['Roboto']">
                                    {item.question}
                                  </span>

                                  <span className="flex items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      className={`w-4 h-4 transition-transform duration-300 dark:text-white ease-out ${isOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                    >
                                      <path
                                        d="M6 9l6 6 6-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </button>

                                <div
                                  className={`grid transition-all duration-300 ease-out ${isOpen
                                      ? "grid-rows-[1fr] opacity-100"
                                      : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                  <div className="overflow-hidden">
                                    <div className="px-4 pb-3 text-sm text-gray-600 dark:text-gray-400 font-normal font-['Poppins']">
                                      {item.answer}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div> 
      </div>
    </>
  );
}

export default ContactUs;
