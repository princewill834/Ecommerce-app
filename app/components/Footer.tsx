import React from "react";
import { FooterContent } from "./FooterContent"; // Ensure correct path
import Image from "next/image";

const Footer = () => (
  <footer className="bg-black h-full">
    <div className="py-[5%] px-[5%] gap-8 flex">
      {FooterContent.map((section, index) => {
        return (
          <div key={index} className="flex flex-col gap-[16px]">
            {/* Display the title correctly for each section */}
            {section.logo_title ? (
              <h3 className="font-Inter tracking-[0.03em] text-left text-[#fafafa] font-bold text-[24px]">
                {section.logo_title}
              </h3>
            ) : (
              <h3 className="font-Inter tracking-[0.03em] text-left text-[#fafafa] font-bold text-[20px]">
                {section.title}
              </h3>
            )}

            {section.subtitle && (
              <>
                <span className="text-[20px] text-[#fafafa] font-medium">
                  {section.subtitle}
                </span>
                <span className="text-[16px] text-[#fafafa]">
                  {section.description}
                </span>
                <div className="flex items-center w-[243px] h-[38px] mr-6 rounded relative">
                  <input
                    className="w-full bg-black border text-[16px] px-[16px] py-[12px] gap-[32px] text-white  rounded-tl-[4px] border-t-[1.5px]"
                    placeholder={section.inputPlaceholder}
                  />
                  <Image
                    className="absolute right-[12px]"
                    src={section.inputIcon}
                    alt="Send Icon"
                  />
                </div>
              </>
            )}

            {/* Display items */}
            {section.items &&
              section.items.map((item, indx) => (
                <span
                  key={indx}
                  className="text-[16px] text-[#fafafa] font-normal"
                >
                  {item}
                </span>
              ))}

            {/* Display images */}
            {section.images &&
              section.images.map((img, idx) => (
                <Image key={idx} src={img} alt="" />
              ))}
          </div>
        );
      })}
    </div>

    <div className="flex justify-center py-4">
      <span className="text-white text-[16px] opacity-40 text-center">
        &copy; Copyright Rimel 2022. All rights reserved
      </span>
    </div>
  </footer>
);

export default Footer;
