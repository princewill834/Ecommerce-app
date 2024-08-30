import React from "react";
import heartImg from "../../public/assets/images/heart.svg";
import Image from "next/image";

const Heart = () => (
  <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center  ">
    <Image src={heartImg} alt="left arrow" />
  </div>
);

export default Heart;
