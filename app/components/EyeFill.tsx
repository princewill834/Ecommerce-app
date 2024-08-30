import React from "react";
import eye_fill from "./../../public/assets/images/eye.svg";
import Image from "next/image";

const EyeFill = () => (
  <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center  ">
    <Image src={eye_fill} alt="eye fill" />
    
  </div>
);

export default EyeFill;
