"use client"
import React from "react";
// Correct import of the hook
import { useTimerTracker } from "./useTimeTracker";

const CountDownTimer = () => {
  const initialTime = 14 * 24 * 60 * 60 * 1000;
  const { days, hours, minutes, seconds } = useTimerTracker(initialTime);

  return (
    <div className="flex items-end ml-[87px]">
      <div className="flex flex-col items-center justify-end">
        <span className="text-[14px] font-normal">Days</span>
        <span className="font-inter text-[32px] font-bold leading-none">
          {days}
        </span>
      </div>
      <span className="text-[#e07575] mx-[17px] text-[25px]">:</span>
      <div className="flex flex-col items-center">
        <span className="text-[14px] font-normal">Hours</span>
        <span className="font-inter text-[32px] font-bold leading-none">
          {hours}
        </span>
      </div>
      <span className="text-[#e07575] mx-[17px] text-[25px]">:</span>
      <div className="flex flex-col items-center">
        <span className="text-[14px] font-normal">Minutes</span>
        <span className="font-inter text-[32px] font-bold leading-none">
          {minutes}
        </span>
      </div>
      <span className="text-[#e07575] mx-[17px] text-[25px]">:</span>
      <div className="flex flex-col items-center">
        <span className="text-[14px] font-normal">Seconds</span>
        <span className="font-inter text-[32px] font-bold leading-none">
          {seconds}
        </span>
      </div>
    </div>
  );
};

export default CountDownTimer;
