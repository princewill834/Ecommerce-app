"use client"
import React from "react";
// Correct import of the hook
import { useTimerTracker } from "./useTimeTracker";

const BillBoard = () => {
  const initialTime = 14 * 24 * 60 * 60 * 1000;
  const { days, hours, minutes, seconds } = useTimerTracker(initialTime);

  return (
    <section className="billboard-container">
      <div className="absolute top-[264px] left-[55px] rounded-full">
        <div className="h-[3.9rem] w-[3.9rem] bg-white flex flex-col justify-center items-center">
          <span className="font-poppins text-[16px] font-semibold leading-[20px] text-left block">
            {days}
          </span>
          <span className="font-poppins text-[11px] font-normal leading-[18px] text-left block">
            Days
          </span>
        </div>
      </div>

      <div className="absolute top-[264px] left-[12%] rounded-full">
        <div className="h-[3.9rem] w-[3.9rem] bg-white flex flex-col justify-center items-center">
          <span className="font-poppins text-[16px] font-semibold leading-[20px] text-left block">
            {hours}
          </span>
          <span className="font-poppins text-[11px] font-normal leading-[18px] text-left block">
            Hours
          </span>
        </div>
      </div>

      <div className="absolute top-[264px] left-[19.5%] rounded-full">
        <div className="h-[3.9rem] w-[3.9rem] bg-white flex flex-col justify-center items-center">
          <span className="font-poppins text-[16px] font-semibold leading-[20px] text-left block">
            {minutes}
          </span>
          <span className="font-poppins text-[11px] font-normal leading-[18px] text-left block">
            Minutes
          </span>
        </div>
      </div>

      <div className="absolute top-[264px] left-[26.7%] rounded-full">
        <div className="h-[3.9rem] w-[3.9rem] bg-white flex flex-col justify-center items-center">
          <span className="font-poppins text-[16px] font-semibold leading-[20px] text-left block">
            {seconds}
          </span>
          <span className="font-poppins text-[11px] font-normal leading-[18px] text-left block">
            Seconds
          </span>
        </div>
      </div>

      <button className="px-[48px] mt-[365px] ml-[56px] py-[16px] rounded-[4px] font-poppins text-[16px] font-medium leading-[24px] text-left bg-[#00FF66] text-[#fafafa]">
        Buy Now!
      </button>
    </section>
  );
};

export default BillBoard;
