import Profile_left_part from "../components/Profile_left_part"
import React from 'react'
function Termscondition(){

    return(
        <>
        <div className="flex">
            <Profile_left_part/>
            <div className="w-[73%] h-screen bg-gradient-to-b from-[#eaf1f9] to-[#e2f1ff] overflow-y-auto">
                <div className="ml-[2vw]">
                    <div className="text-black text-[25px] font-bold font-['Roboto Flex'] my-[15px] ">Terms & Conditiion</div>
                    <div>
                        <div className="text-[#4a4a4a] text-xl font-medium font-['Roboto Flex'] my-[5px]">General Platform Usages</div>
                        <div>
                            <ol className="list-decimal list-outside ml-[1.7vw]">
                                <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Eligibility: User must be or have parental consent to use the platform </li>
                                <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Account: Provie accurate details during registration and maintain account confidentiality</li>
                                <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Prohibited Activities:
                                   <ul className="list-disc list-inside">
                                    <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px] ">Posting false, misleading, or illegal content.</li>
                                    <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px] ">Hacking, spamming or disrupting the platform.</li>
                                    <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px] ">Violating any laws during platform use.</li>
                                    </ul>
                                </li>
                                <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px] ">Privacy: User data is handles as per our Privacy Policy </li>
                                
                            </ol>
                        </div>
                    </div>


                    <div>
                        <div className="text-[#4a4a4a] text-xl font-medium font-['Roboto Flex'] mt-[0.8vh] mb-[0.5vh]">Responsibilitites</div>
                        <div className="">
                            <ol className="list-decimal list-inside ml-[0.5vw]">
                                <li className="text-[#4e4e4e] text-[19px] font-medium font-['Roboto Flex'] leading-[38px]">Seller Responsibilities
                                    <ol className="list-alpha list-inside ml-[1vw]">
                                        <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Accurate Listings: Provide honest description and comply with all laws</li>
                                        <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Sgipping & Delivery: Ensure timely delivery and communication delays.</li>
                                        <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Refund & Return: Clearly state policies and handle isputes profession.</li>
                                        <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Prohibited Items: No counterfeit, illegal, or harmful goods.</li>
                                    </ol>
                                </li>
                                <li className="text-[#4e4e4e] text-xl font-medium font-['Roboto Flex'] leading-[38px]"> Buyer Responsibilities
                                    <ol className="list-alpha list-inside ml-[1vw]">
                                        <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Honest Purchases: Use valid payment method and avoid fraudlent activity</li>
                                        <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Fair Reviews: Post accurate and respectul reviews</li>
                                        <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Delivery Issues: Report problems promptly to the seller or platform</li>

                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#4a4a4a] text-xl font-medium font-['Roboto Flex'] ">Fair Use and Policies</div>
                        <ol className="list-alpha list-inside ml-[1.4vw]">
                            <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Respectful Interactions: Maintain professional and respectful communication.</li>
                            <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Prohibited Items: No sale of items that violate intellectual property or trade laws.</li>
                            <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Disputes: Report issues via the platform’s support system; mediation decisions are final.</li>
                            <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Account Termination: Accounts may be suspended for fraudulent or abusive behavior.</li>
                            <li className="text-[#4e4e4e] text-lg font-light font-['Roboto Flex'] leading-[38px]">Modifications: Terms may be updated; continued use indicates acceptance of changes.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Termscondition