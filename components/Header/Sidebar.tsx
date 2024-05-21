import React, { Dispatch, SetStateAction, useState } from "react";
import { MdOutlineClose, MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoYoutube, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import Image from "next/image";
// import clsx from 'clsx';

import Button from "../Button/Button";
import Logo from "@/assets/NFT_Logo.jpg";

import { mainnet, sepolia, polygonZkEvmCardona } from 'wagmi/chains'


interface SidebarProps {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>
}

const Sidebar: React.FC<SidebarProps> = ({ state, setState }) => {

    const [exploreOpen, setExploreOpen] = useState(false);
    const [collectionOpen, setCollectionOpen] = useState(false);


    
    console.log(mainnet);

    return (
        <div className={`fixed h-full w-screen top-0 right-0 bg-black/50 backdrop-blur-md transition-all 1100:hidden ${state ? "translate-x-0" : "translate-x-full"}`}>
            <div className={`absolute right-0 top-0 h-screen w-screen 350:w-[350px] bg-[#191c1f] py-5 px-4 overflow-auto`}>

                <div className="flex items-center justify-end">
                    <MdOutlineClose className="text-[23px] font-bold" onClick={() => setState(false)} />
                </div>

                <div className="text-[#ddddde]">
                    <div className="">
                        <div className="flex items-center justify-start">
                            <Image alt="Vortex NFT Logo" src={Logo} className="w-9 h-9 rounded-[8px]" />
                            <h1 className="block font-bold text-[20px] ml-3">PixeNFT</h1>
                        </div>
                        <p className="my-7 text-[17px]">
                            The NFT marketplace is a growing and dynamic industry, with a high potential for innovation and value creation.
                        </p>

                        <div className="flex items-center justify-start">
                            <IoLogoFacebook className="text-[23px] mr-8" />
                            <IoLogoLinkedin className="text-[23px] mr-8 " />
                            <IoLogoYoutube className="text-[23px] mr-8 " />
                            <IoLogoTwitter className="text-[23px] mr-8 " />
                            <IoLogoInstagram className="text-[23px]" />
                        </div>

                    </div>

                    <div className="my-10 border-y border-[#ddddde] py-10">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <h1 className="text-[17px] font-semibold">Explore</h1>
                                {
                                    exploreOpen ?
                                        <MdArrowDropUp className="text-[23px]" onClick={() => setExploreOpen(false)} /> :
                                        <MdArrowDropDown className="text-[23px]" onClick={() => setExploreOpen(true)} />
                                }
                            </div>

                            <ul className={`pl-5 mt-3 ${exploreOpen ? "block" : "hidden"}`}>
                                <li className="mb-3 text-[15px] font-medium">Collection</li>
                                <li className="mb-3 text-[15px] font-medium">NFTs</li>
                                <li className="text-[15px] font-medium">Users</li>
                            </ul>
                        </div>

                        <div className="flex flex-col mt-3">
                            <div className="flex items-center justify-between">
                                <h1 className="text-[17px] font-semibold">Create</h1>
                                {
                                    collectionOpen ?
                                        <MdArrowDropUp className="text-[23px]" onClick={() => setCollectionOpen(false)} /> :
                                        <MdArrowDropDown className="text-[23px]" onClick={() => setCollectionOpen(true)} />
                                }
                            </div>

                            <ul className={`pl-5 mt-3 ${collectionOpen ? "block" : "hidden"}`}>
                                <li className="mb-3 text-[15px] font-medium">Collection</li>
                                <li className="text-[15px] font-medium">NFTs</li>
                            </ul>
                        </div>
                        <h1 className="text-[17px] font-semibold mt-3">Sale</h1>
                        <h1 className="text-[17px] font-semibold mt-3">Drops</h1>
                    </div>
                    <Button content="Connect Wallet" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar