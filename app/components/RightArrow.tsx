"use client";
import React from "react";
import RightArrowImg from "../../public/assets/images/right-arrow.svg";
import Image from "next/image";

interface RightArrowProps{
  onClick : () => void;
}
const RightArrow : React.FC<RightArrowProps> = ({ onClick }) => (
  <div
    className="w-[46px] h-[45px] bg-[#f5f5f5] rounded-full flex justify-center items-center"
    onClick={onClick}
  >
    <Image src={RightArrowImg} alt="right arrow" />
  </div>
);

export default RightArrow;
