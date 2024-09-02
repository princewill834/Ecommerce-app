"use client";
import React, { useEffect, useState } from "react";
import { OurProducts } from "./items"; // Ensure this is the correct import path
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import EyeFill from "./EyeFill";
import Heart from "./Heart";
import Button from "./Button";
import Image from "next/image";

import Gamepad from "../../public/assets/images/GamePad.svg"
import Link from "next/link";

// Define the type for the product items
interface Product {
  id: number,
  image: string;
  title: string;
  price: number;
  rating: {
    rate: number,
    count: number,
  }
}

const OurProductSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([])

  const handleLeftArrowClick = () =>{
    // code here
  }

  const handleRightArrowClick = () =>{
    //code here
  }

  const getData = async () =>{
   const res = await fetch('https://fakestoreapi.com/products?limit=8')
   const data = await res.json();
   setProducts(data)
   console.log(data)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <section>
      <div className="px-[5%] pt-20 flex justify-between">
        <h1 className="font-inter text-[36px] font-semibold leading-[48px] tracking-[0.04em] text-left">
          Explore Our Products
        </h1>
        <div className="flex gap-2">
          <LeftArrow onClick={handleLeftArrowClick} />
          <RightArrow onClick={handleRightArrowClick}/>
        </div>
      </div>
      {/* Rendering the card data here */}
      <div className="flex flex-wrap gap-7 px-[5%] pt-5">
        {products.map(product => (
         
          <div className="w-[23%] cursor-pointer" key={product.id}>
            <div
              className="h-[250px] bg-[#f5f5f5] rounded-[4px] relative"
              onMouseEnter={() => setHoveredIndex(product.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="gap-[8px] absolute top-[12px] right-[12px] flex flex-col">
                <Heart />
                <EyeFill />
              </div>
              <div className="w-[190px] top-[35px] left-[40px] absolute flex justify-center items-center">
                <Image 
                src={product.image} 
                alt={product.title}
                width={150}
                height={130}
                className="h-[200px] "
                />
              </div>
              {hoveredIndex === product.id && (
                <button className="w-full h-[41px] top-[209px] absolute gap-0 rounded-b-lg bg-black text-white">
                  Add To Cart
                </button>
              )}
            </div>
            <div className="pt-[16px]">
              <h2 className="pb-2">{product.title}</h2>
              <div className="flex gap-3 pb-2">
                <p className="text-[#db4444]">${product.price}</p>
               
                <p>{product.rating.count}</p>
              </div>
            </div>
          </div>
          
        ))}
      </div>
      <div className="flex justify-center mt-[5%]">
        <Button>View All Products</Button>
      </div>
    </section>
  );
};

export default OurProductSection;
