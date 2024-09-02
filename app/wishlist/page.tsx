import React from "react";
import Card from "../components/Card";
import { BestSellingItems } from "../components/items";

interface Product{
  image: string; 
  title: string;
  new_price: number;
  old_price: number;
  rating: string; 
  review: number;
}

const WishList = () =>{
return(
    <section>
        <div className="px-[5%] pt-20 flex justify-between">
                <div className="flex justify-between items-center ">
                    <span className=" text-[20px] font-normal leading-[26px]">Wishlist (4) </span>
                    <button className="border rounded-[4px] p-[16px_48px]">Update Cart</button>
                </div>
            
        
            {/* Rendering the card data here */}
            <div className="flex gap-7 px-[5%] pt-5">
            {BestSellingItems.map((item: Product, index: number) => (
                <Card key={index} product={item} />
            ))}
            </div>
    </div>
    </section>
)
}

export default WishList