"use client"
import React from "react";
import { TodaysItems } from "./items";
import Button from "./Button";
import Card from "./Card";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import CountDownTimer from "./CountDownTimer";


interface Product {
  image: any;
  title: string;
  new_price: any;
  old_price: any;
  rating: any;
  review: number;
}

const TodaySection: React.FC = () => {
  const handleLeftArrowClick = () =>{
    // code here
  }

  const handleRightArrowClick = () =>{
    //code here
  }
  return(
  <section>
    <div className="px-[5%] pt-20 flex justify-between">
      <div className="flex items-center">
        <h1 className="font-inter text-[36px] font-semibold leading-[48px] tracking-[0.04em] text-left">
          Flash Sales
        </h1>
        <CountDownTimer />
      </div>

      <div className="flex gap-2">
        <LeftArrow  onClick={handleLeftArrowClick}/>
        <RightArrow  onClick={handleRightArrowClick}/>
      </div>
    </div>
    {/* rendering the card data here  */}
    <div className="flex gap-7 px-[5%] pt-5">
      {TodaysItems.map((item : Product, index:number) => (
        <Card key={index} product={item} />
      ))}
    </div>
    <div className="flex justify-center mt-[5%]">
      <Button>View All Products</Button>
    </div>
    <div className="px-[5%]">
      <div className="my-[5%] h-[1px] bg-gray-400"></div>
    </div>
  </section>)
};
export default TodaySection;
