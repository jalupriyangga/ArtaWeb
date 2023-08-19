import React from "react";

const nextArrow = ({onClick}) => {
    return (
        <div className="absolute -left-[90px] bottom-[60px] sm:-left-[120px] md:-left-[130px] lg:-left-[300px]" onClick={onClick}>
            <div className="h-[50px] w-[50px] rounded-full grid border-solid border-[#338755] border-2
            place-items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-[#338755]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
    )
}

export default nextArrow;