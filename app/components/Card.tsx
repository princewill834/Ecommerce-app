"use client"
import React, { useState } from "react";
import EyeFill from "./EyeFill";
import Heart from "./Heart";
import Image from "next/image";

interface Product {
  image: string;
  title: string;
  new_price:number;
  old_price: number;
  rating: string;
  review: number;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-[270px] h-[350px] gap-4">
      <div
        className="h-[250px] bg-[#f5f5f5] rounded-[4px] relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="gap-[8px] absolute top-[12px] right-[12px] flex flex-col">
          <Heart />
          <EyeFill />
        </div>
        <div className="w-[190px] h-[180px] top-[35px] left-[40px] absolute flex justify-center items-center">
          <Image src={product.image} alt={product.title} />
        </div>
        {hovered && (
          <button className="w-full h-[41px] top-[209px] absolute gap-0 rounded-b-lg bg-black text-white">
            Add To Cart
          </button>
        )}
      </div>
      <div className="py-5">
        <h2 className="pb-2">{product.title}</h2>
        <div className="flex gap-3 pb-2">
          <p className="text-[#db4444]">${product.new_price}</p>
          <Image src={product.rating} alt="Rating" />
          <p>({product.review})</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
