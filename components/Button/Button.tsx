import React from "react";

interface ButtonProps {
    content: string;
}

const Button: React.FC<ButtonProps> = ({ content }) => {
    return <button className="bg-white text-black text-[14px] font-semibold p-3 rounded-[8px]">{content}</button>
}

export default Button