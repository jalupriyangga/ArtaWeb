import React from "react";

const prevArrow = ({onClick}) => {
    return (
        <div className="absolute -left-[160px] bottom-[60px] sm:-left-[210px] md:-left-[230px] lg:-left-[390px]" onClick={onClick}>
            <div className="h-[50px] w-[50px] rounded-full grid border-solid border-[#338755] border-2
            place-items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="[#338755]" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-[#338755]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
            </div>
        </div>
    )
}

export default prevArrow;