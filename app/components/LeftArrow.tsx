"use client";
import React from "react";
import LeftArrowImg from "../../public/assets/images/left-arrow.svg";
import Image from "next/image";

interface LeftArrowProps {
  onClick : ()=>void;
}

const LeftArrow: React.FC <LeftArrowProps> = ({ onClick }) => (
  <div
    className="w-[46px] h-[45px] bg-[#f5f5f5] rounded-full flex justify-center items-center  "
    onClick={onClick}
  >
    <Image src={LeftArrowImg} alt="left arrow" />
  </div>
);

export default LeftArrow;
