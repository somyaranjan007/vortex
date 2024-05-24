// components/SignUpForm.tsx
"use client"
import React, { useState } from 'react';

import { IoCheckbox, IoCheckboxOutline } from "react-icons/io5";


interface UserFormProps {
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUpForm: React.FC<UserFormProps> = ({ state, setState }) => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [newsletter, setNewsletter] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic
        console.log({ displayName, email, termsAccepted, newsletter });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-transparent">
            <div className="bg-[#1d2124] text-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4 text-[#ffffff] text-center">You are almost there!</h1>
                <p className="mb-6 text-[#9da0a1] text-center">Choose a display name and enter your email address to receive updates when your NFTs sell or receive offers.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Display name"
                            className="w-full p-3 rounded-[12px] bg-[#282b2f] text-white focus:outline-none focus:border focus:border-[#7a7c7d] focus:bg-transparent text-[14px]"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-[12px] bg-[#282b2f] text-white focus:outline-none focus:border focus:border-[#7a7c7d] focus:bg-transparent text-[14px]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-16 text-indigo-600 transition duration-150 ease-in-out"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                required
                            />
                            <span className="ml-2 text-[#9da0a1] text-[14px]">I have read and accept the <a href="#" className="text-[#fefefe]">Terms of Service</a>, the <a href="#" className="text-[#fefefe]">Terms of Creator</a> and confirm that I am at least 13 years old</span>
                        </label>
                    </div>
                    <div className="mb-6">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-16 transition duration-150 ease-in-out"
                                checked={newsletter}
                                onChange={(e) => setNewsletter(e.target.checked)}
                            />
                            <span className="ml-2 text-[#9da0a1] text-[14px]">I want to receive announcements and news from Rarible to stay up to date with the NFT market</span>
                        </label>
                    </div>
                    <button className={`w-full text-[14px] font-semibold p-3 rounded-[12px] ${displayName && email && termsAccepted ?  "bg-white text-black": "bg-[#2f3235] text-[#acadaf]"}`}>Finish sign-up</button>
                    {/* <button type="submit" className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none">Finish sign-up</button> */}
                </form>
                <button onClick={() => setState(false)} className="mt-4 w-full p-3 text-[14px] px-4 bg-transparent border border-[#2f3235] text-[#ffffff] font-semibold rounded-[12px] shadow-md focus:outline-none">Disconnect</button>
            </div>
        </div>
    );
};

export default SignUpForm;