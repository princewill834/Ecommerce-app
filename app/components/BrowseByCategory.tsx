"use client";
import React, { useState } from "react";
import { BrowseByCatItems } from "./items";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Image from "next/image";

const BrowseByCategory = () => {
  const [currItemIndex, setCurrItemIndex] = useState(0);
  const itemsToShow = 6;
  const totalItems = BrowseByCatItems.length;

  const nextSlide = () => {
    if (currItemIndex + itemsToShow < totalItems) {
      setCurrItemIndex(currItemIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currItemIndex > 0) {
      setCurrItemIndex(currItemIndex - 1);
    }
  };

  return (
    <section>
      <div className="px-[5%] pt-20 flex justify-between">
        <h1 className="font-inter text-[36px]  font-semibold leading-[48px] tracking-[0.04em] text-left">
          Browse By Category
        </h1>
        <div className="flex gap-2">
          <LeftArrow onClick={prevSlide} />
          <RightArrow onClick={nextSlide} />
        </div>
      </div>

      {/* carousel wrapper */}
      <div className="relative overflow-hidden px-[5%] pt-5">
        <div
          className="flex gap-7 transition-transform duration-300"
          style={{
            transform: `translateX(-${currItemIndex * (100 / itemsToShow)}%)`,
            width: `${(totalItems / itemsToShow) * 65.5}%`,
          }}
        >
          {/* rendering the card data here  */}
          {BrowseByCatItems.map((item, index) => (
            <div
              key={index}
              className="h-[145px] w-[166px] border rounded-[4px] flex items-center justify-center hover:bg-[#db4444] hover:text-white icon-card"
              style={{ minWidth: `${100 / itemsToShow}%` }}
            >
              <div className="flex items-center flex-col gap-4 icon">
                <Image src={item.image} alt="" />
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[5%]">
        <div className="my-[5%] h-[1px] bg-gray-400"></div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
