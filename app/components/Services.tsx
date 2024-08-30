import React from "react";
import service1 from "../../public/assets/images/Services (1).svg";
import service2 from "../../public/assets/images/Services (2).svg";
import service from "../../public/assets/images/Services.svg";
import Image from "next/image";

const Services = () => (
  <div className="flex justify-center items-center mx-auto gap-[88px] my-[140px]">
    <div className="w-[249px]text-center ">
      <div className="mb-[24px] flex justify-center ">
        <Image src={service} alt="" />
      </div>
      <h2 className="text-[20px] font-semibold leading-[28px] text-left pb-2">
        FREE AND FAST DELIVERY
      </h2>
      <span className="text-[14px] font-normal leading-[21px] text-center">
        Free delivery for all orders over $140
      </span>
    </div>
    <div className="w-[249px] text-center">
      <div className="mb-[24px] flex justify-center ">
        <Image src={service1} alt="" />
      </div>
      <h2 className="text-[20px] font-semibold leading-[28px] text-left pb-2">
        24/7 CUSTOMER SERVICE
      </h2>
      <span className="text-[14px] font-normal leading-[21px] text-center">
        Friendly 24/7 customer support
      </span>
    </div>
    <div className="w-[249px] text-center">
      <div className="mb-[24px] flex justify-center ">
        <Image src={service2} alt="" />
      </div>
      <h2 className="text-[20px] font-semibold leading-[28px] text-left pb-2">
        MONEY BACK GUARANTEE
      </h2>
      <span className="text-[14px] font-normal leading-[21px] text-center">
        We reurn money within 30 days
      </span>
    </div>
  </div>
);

export default Services;
