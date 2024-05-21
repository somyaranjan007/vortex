"use client"
import React, { useState, useEffect } from "react";
import { RiSearchLine, RiShoppingBag4Line } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useWeb3Modal, useWalletInfo } from "@web3modal/wagmi/react";
import { useAccount } from 'wagmi';

import Button from "../Button/Button";
import Sidebar from "./Sidebar";
import Search from "./Search";

import Logo from "@/assets/NFT_Logo.jpg";

const Header = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    const { open } = useWeb3Modal();
    const { isConnected } = useAccount();

    console.log(isConnected);
 
    useEffect(() => {
        if (isConnected && !isLoggedIn) {
            router.push("/connect");
        }
    }, [isConnected])
    

    return (
        <div className="flex justify-between items-center py-5 px-4 578:px-6 768:px-7 981:px-8">
            <div className="flex items-center w-[60%]">
                <Image alt="Vortex NFT Logo" src={Logo} className="w-9 h-9 rounded-[8px]" />
                <h1 className="hidden 860:block font-bold text-[20px] ml-3">PixeNFT</h1>
                <RiSearchLine className="text-[23px] font-bold ml-5 1100:hidden" onClick={() => setSearchOpen(true)} />
                <div className="hidden 1100:flex ml-6 w-full">
                    <input
                        type="text"
                        name="search" id="id"
                        placeholder="Search for collection, NFT or users"
                        className="outline-none bg-[#25282b] text-sm rounded-[8px] placeholder:text-gray-500 placeholder:font-bold text-[#cdcdce] h-10 px-3 focus:border focus:border-[#7a7c7d] focus:bg-transparent w-full"
                    />

                    <ul className="flex justify-start items-center text-[#a2a5a5] font-semibold">
                        <li className="ml-6">Create</li>
                        <li className="ml-6">Explore</li>
                        <li className="ml-6">Sell</li>
                        <li className="ml-6">Drops</li>
                    </ul>
                </div>
            </div>

            <div className="flex items-center">
                <div className="hidden 1100:flex items-center justify-center">
                    {/* <Button content="Connect Wallet" /> */}
                    <button onClick={() => open()} className="bg-white text-black text-[14px] font-semibold p-3 rounded-[8px]">Connect Wallet</button>
                </div>
                <RiShoppingBag4Line className="text-[23px] font-bold ml-5" />
                <MdMenu className="text-[23px] font-bold ml-5 1100:hidden" onClick={() => {
                    console.log(sidebarOpen)
                    setSidebarOpen(true)
                }} />
            </div>

            <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
            <Search state={searchOpen} setState={setSearchOpen} />
        </div>
    )
}

export default Header