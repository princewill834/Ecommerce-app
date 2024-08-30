import React from "react";
import like from "../../public/assets/images/like.svg";
import cart from "../../public/assets/images/Cart1.svg";
import search from "../../public/assets/images/search-icon.svg";
import Image from "next/image";
import Link from "next/link";


const Navigation = () => {
  return (
    <nav>
      <div className="bg-black py-3 text-white text-center">
        <div className=" text-[14px] pl-[10%] ">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <a className="hover:underline pl-2 font-semibold">ShopNow</a>
          <span className="float-right mr-[7%]">English</span>
        </div>
      </div>
      <div className="flex justify-between items-center h-full pt-[47px] px-[5%] mb-4">
        <h3 className="font-inter text-[24px] font-bold tracking-[0.03em] text-left">
          Exclusive
        </h3>
        <ul className="flex space-x-[3rem] ml-[10rem] mr-[9.25rem]">
          <li>
            <Link href="/" className="hover:underline cursor-pointer">Home</Link>   
          </li>
          <li>
            <a className="hover:underline cursor-pointer">Contact</a>
          </li>
          <li>
            <a className="hover:underline cursor-pointer">About</a>
          </li>
          <li>
            <a className="hover:underline cursor-pointer">Sign Up</a>
          </li>
        </ul>

        <div className="flex items-center">
          <div className="flex items-center text-black w-[243px] h-[38px] mr-6  bg-[#f5f5f5] rounded relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="text-black opacity-50 bg-[#f5f5f5] text-[12px] font-[400] w-full pl-[20px] pr-[40px] py-[9px] focus:outline-none"
            />
            <Image
              src={search}
              alt=""
              className="absolute right-[12px] w-[24px] h-[24px]"
            />
          </div>
          <Image src={like} alt="" sizes="29px" className="mr-[16px]" />
          <Image src={cart} alt="" />
        </div>
      </div>
      <div>
        <div className="h-[1px] bg-gray-400"></div>
      </div>
    </nav>
  );
};

export default Navigation;
