import React from "react";
import { BestSellingItems } from "./items"; // Verify this import path
import Button from "./Button";
import Card from "./Card";

// Define the type for the product items
interface Product {
  image: string; 
  title: string;
  new_price: number;
  old_price: number;
  rating: string; 
  review: number;
}

const BestSellingProduct: React.FC = () => (
  <section>
    <div className="px-[5%] pt-20 flex justify-between">
      <h1 className="font-inter text-[36px] font-semibold leading-[48px] tracking-[0.04em] text-left">
        Best Selling Products
      </h1>
      <Button>View All</Button>
    </div>
    {/* Rendering the card data here */}
    <div className="flex gap-7 px-[5%] pt-5">
      {BestSellingItems.map((item: Product, index: number) => (
        <Card key={index} product={item} />
      ))}
    </div>
  </section>
);

export default BestSellingProduct;
