import React, { Dispatch, SetStateAction } from "react";
import { MdOutlineClose } from "react-icons/md";

interface SearchProps {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>
}

const Search: React.FC<SearchProps> = ({ state, setState }) => {
    return (
        <div className={` ${state ? "block" : "hidden"} absolute bg-[#191c1f] top-0 right-0 w-screen px-4 578:px-6 768:px-7 981:px-8 py-5 flex items-center justify-center 1100:hidden`}>
            <input
                type="text"
                name="search" id="id"
                placeholder="Search for collection, NFT or users"
                className="outline-none bg-[#25282b] text-sm rounded-[8px] placeholder:text-gray-500 placeholder:font-bold text-[#cdcdce] px-3 h-10 focus:border focus:border-[#7a7c7d] focus:bg-transparent w-full"
            />

            <MdOutlineClose className="ml-5 text-[23px]" onClick={() => setState(false)} />
        </div>
    )
}

export default Search