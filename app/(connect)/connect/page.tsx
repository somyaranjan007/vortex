"use client"

import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { connectWallet } from "@/lib/features/walletConnect/walletConnectSlice";



import MetamaskImage from "@/assets/metamask-icon.png";

const ConnectWallet: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-center items-center min-h-screen bg-transparent">
            <div className="bg-[#1d2124] text-white rounded-lg p-6 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4">Connect wallet</h1>
                <p className="mb-6">Choose your favourite wallet to log in Rarible.</p>
                <a href="#" className="text-blue-400 underline mb-6 inline-block">What is a wallet?</a>
                <div className="flex space-x-2 mb-6">
                    <div className="bg-[#282b2f] rounded-full p-2">
                        <img src="/path-to-ethereum-icon.svg" alt="Ethereum" className="w-6 h-6" />
                    </div>
                    <div className="bg-[#282b2f] rounded-full p-2">
                        <img src="/path-to-immutablex-icon.svg" alt="Immutable X" className="w-6 h-6" />
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg mb-2">Recent</h2>
                    <button className="w-full flex items-center bg-[#282b2f] p-3 rounded-lg mb-2" onClick={() => dispatch(connectWallet())}>
                        <img src={MetamaskImage.src} alt="MetaMask" className="w-6 h-6 mr-2" />
                        MetaMask
                    </button>
                </div>
                <div>
                    <h2 className="text-lg mb-2">Popular</h2>
                    <button className="w-full flex items-center bg-[#282b2f] p-3 rounded-lg mb-2">
                        <img src="/path-to-coinbase-icon.svg" alt="Coinbase Wallet" className="w-6 h-6 mr-2" />
                        Coinbase Wallet
                    </button>
                    <button className="w-full flex items-center bg-[#282b2f] p-3 rounded-lg mb-2">
                        <img src="/path-to-walletconnect-icon.svg" alt="WalletConnect" className="w-6 h-6 mr-2" />
                        WalletConnect
                    </button>
                    <button className="w-full flex items-center bg-[#282b2f] p-3 rounded-lg mb-2">
                        <img src="/path-to-bitget-icon.svg" alt="Bitget Wallet" className="w-6 h-6 mr-2" />
                        Install Bitget Wallet
                    </button>
                </div>
                <button className="w-full bg-[#282b2f] p-3 rounded-lg mt-4">
                    Show more
                </button>
            </div>
        </div>
    );
};

export default ConnectWallet;


// "use client"

// import React, { useState, useCallback, useEffect } from "react";
// import { useWeb3Modal, useWalletInfo } from "@web3modal/wagmi/react";
// import { useAccount, useDisconnect } from 'wagmi';
// import { Web3Wallet } from "@walletconnect/web3wallet";
// import { Core } from "@walletconnect/core";



// const page = () => {

//     const { open } = useWeb3Modal();
//     const { isConnected } = useAccount();

//     const [displayName, setDisplayName] = useState('');
//     const [email, setEmail] = useState('');
//     const [termsAccepted, setTermsAccepted] = useState(false);
//     const [newsletter, setNewsletter] = useState(false);

//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//         // Handle form submission logic
//         console.log({ displayName, email, termsAccepted, newsletter });
//     };

//     // useEffect(() => {
//     //     open()
//     // }, [])

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-transparent">
//             <div className="bg-[#1d2124] text-white p-8 rounded-lg shadow-md w-96">
//                 <h1 className="text-2xl font-semibold mb-4 text-[#ffffff] text-center">You are almost there!</h1>
//                 <p className="mb-6 text-[#9da0a1] text-center">Choose a display name and enter your email address to receive updates when your NFTs sell or receive offers.</p>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             placeholder="Display name"
//                             className="w-full p-3 rounded-[12px] bg-[#282b2f] text-white focus:outline-none focus:border focus:border-[#7a7c7d] focus:bg-transparent text-[14px]"
//                             value={displayName}
//                             onChange={(e) => setDisplayName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             className="w-full p-3 rounded-[12px] bg-[#282b2f] text-white focus:outline-none focus:border focus:border-[#7a7c7d] focus:bg-transparent text-[14px]"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="inline-flex items-center">
//                             <input
//                                 type="checkbox"
//                                 className="form-checkbox h-4 w-16 text-indigo-600 transition duration-150 ease-in-out"
//                                 checked={termsAccepted}
//                                 onChange={(e) => setTermsAccepted(e.target.checked)}
//                                 required
//                             />
//                             <span className="ml-2 text-[#9da0a1] text-[14px]">I have read and accept the <a href="#" className="text-[#fefefe]">Terms of Service</a>, the <a href="#" className="text-[#fefefe]">Terms of Creator</a> and confirm that I am at least 13 years old</span>
//                         </label>
//                     </div>
//                     <div className="mb-6">
//                         <label className="inline-flex items-center">
//                             <input
//                                 type="checkbox"
//                                 className="form-checkbox h-4 w-16 transition duration-150 ease-in-out"
//                                 checked={newsletter}
//                                 onChange={(e) => setNewsletter(e.target.checked)}
//                             />
//                             <span className="ml-2 text-[#9da0a1] text-[14px]">I want to receive announcements and news from Rarible to stay up to date with the NFT market</span>
//                         </label>
//                     </div>
//                     <button className={`w-full text-[14px] font-semibold p-3 rounded-[12px] ${displayName && email && termsAccepted ? "bg-white text-black" : "bg-[#2f3235] text-[#acadaf]"}`}>Finish sign-up</button>
//                     {/* <button type="submit" className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none">Finish sign-up</button> */}
//                 </form>
//                 <button onClick={() => console.log('Disconnect')} className="mt-4 w-full p-3 text-[14px] px-4 bg-transparent border border-[#2f3235] text-[#ffffff] font-semibold rounded-[12px] shadow-md focus:outline-none">Disconnect</button>
//             </div>
//         </div>
//     );
// }

// export default page