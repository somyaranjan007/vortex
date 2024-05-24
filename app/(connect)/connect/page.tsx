"use client"
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { connectWallet } from "@/lib/features/walletConnect/walletConnectSlice";

import SignUpForm from "./userForm";
import MetamaskImage from "@/assets/metamask-icon.png";

const ConnectWallet: React.FC = () => {
    const dispatch = useAppDispatch();
    const wallet = useAppSelector((state) => state.walletConnect);
    const [userFormOpen, setUserFormOpen] = useState(false);

    useEffect(() => {
        const signMessage = async () => {
            try {
                if (wallet.address) {
                    const signature = await wallet.signer?.signMessage("Complete your profile!");
                    setUserFormOpen(true);
                }
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        signMessage();
    }, [wallet])

    if (userFormOpen) {
        return <SignUpForm state={userFormOpen} setState={setUserFormOpen} />
    } else {
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
    }
};

export default ConnectWallet;