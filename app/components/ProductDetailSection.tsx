import React from "react";
import { RelatedItems } from "./items";
import Card from "./Card";
import ProductDetail from "./ProductDetail";

const ProductsDetailSection = () =>{
    return(
    <section className="py-[5%]">
        <ProductDetail/>
        <div className="px-[5%]">
            <div className="text-[#db4444] text-[24px]">
               <h3>Related Item</h3>
            </div>
            <div className="flex gap-7 pt-5">
            {RelatedItems.map((item, index)=>{
                return(
                    <Card key={index} product={item}/>
                )
            })}
            </div>
        </div>
       
       
    </section>
    ) 
}
export default ProductsDetailSection