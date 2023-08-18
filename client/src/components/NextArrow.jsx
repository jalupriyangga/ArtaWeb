import React from "react";

const nextArrow = ({onClick}) => {
    return (
        <div className="absolute right-0 -top-[80px]" onClick={onClick}>
            <div className="bg-[#00000] h-[50px] w-[50px] rounded-full grid
            place-items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
    )
}

export default nextArrow;