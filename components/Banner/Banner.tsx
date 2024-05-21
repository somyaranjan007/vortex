"use client"

import React, { useState } from "react"
import Image, { StaticImageData } from "next/image";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import Button from "../Button/Button";

import banner_nft_3 from "@/assets/banner_nft_3.jpg";

const Banner = () => {
    return (
        <div className="py-1 px-4 578:px-6 768:px-7 981:px-8">
            <div className="bg-[#232323] rounded-[16px] flex flex-col items-center justify-center 768:flex-row 768:justify-center text-[#ddddde] p-6 768:p-12 bg-gradient-to-r from-[#3f3f3f] to-[#232323]">
                <div className="w-full 768:w-[400px]">
                    <Image
                        src={banner_nft_3} // Replace this with your NFT image URL
                        alt="NFT Image"
                        className="w-full h-auto rounded-[14px] 860:w-[400px]"
                    />
                </div>
                <div className="w-full 768:w-[400px] mt-4 lg:mt-0 768:ml-10 981:ml-16 1366:ml-24">
                    <h1 className="text-[34px] 578:text-[40px] font-bold mb-1">Discover and Collect Unique NFTs</h1>
                    <p className="text-[15px] mb-4 font-semibold">
                        Explore our vast collection of digital assets, from art to music to gaming, and start building your
                        exclusive NFT portfolio today.
                    </p>
                    <Button content="Explore Now" />
                </div>
            </div>
        </div>
    )
}

export default Banner