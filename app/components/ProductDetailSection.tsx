"use client"
import { RelatedItems } from "./items";
import Card from "./Card";
import React, {  useEffect, useState } from "react";

import image5 from "../../public/assets/images/image 63.svg"
import frame from "../../public/assets/images/Frame 922.svg"
import Image from "next/image";
import frame2 from "../../public/assets/images/Frame 911.svg"
import Button from "./Button";
import like from "../../public/assets/images/heart.svg"
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";


interface Product{
    id:number,
    title:string,
    price:string,
    description:string,
    image:any
}

const divContents = ["XS","S", "M", "L", "XL"]

const ProductDetailSection = () =>{

    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    console.log('Ecommece', id);

    const [product, setProduct] = useState<Product|null>(null)

    const getProductDetail = async ()=>{
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            if(!res.ok){
                throw new Error(`http error status ${res.status}`)
            }   
            const data = await res.json();
            setProduct(data);
            console.log(data)

        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(()=>{
        getProductDetail()
    },[id])

    if (!product) return <div>Loading...</div>;
    return(
    <section className="py-[5%]">
        <div className="px-[5%] pb-[140px]">
        <div className="flex text-[14px] font-normal pb-16">
            <span>Account / </span>
            <span>Gaming / </span>
            <span className="font-semibold">{product.title}</span>
        </div>  
        <div className="flex gap-7 h-[581px]">
            <div className="flex flex-col gap-4 ">

                        <div 
                        className="w-[170px] h-[138px] flex justify-center  p-[12px_24px_12px_25px] rounded-tl-[4px]  bg-[#f5f5f5]">
                            <Image width={170} height={138} src={product.image} alt="Game Pad"/>
                        </div>
                        <div 
                        className="w-[170px] h-[138px] flex justify-center  p-[12px_24px_12px_25px] rounded-tl-[4px]  bg-[#f5f5f5]">
                            <Image width={170} height={138} src={product.image} alt="Game Pad"/>
                        </div>
                        <div 
                        className="w-[170px] h-[138px] flex justify-center  p-[12px_24px_12px_25px] rounded-tl-[4px]  bg-[#f5f5f5]">
                            <Image width={170} height={138} src={product.image} alt="Game Pad"/>
                        </div>
                        <div 
                        className="w-[170px] h-[138px] flex justify-center  p-[12px_24px_12px_25px] rounded-tl-[4px]  bg-[#f5f5f5]">
                            <Image width={170} height={138} src={product.image} alt="Game Pad"/>
                        </div>
                
            </div>
            <div className="w-[500px] h-full flex justify-center rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-none  bg-[#f5f5f5]">
                <Image  src={product.image} width={500} height={250} 
                        alt="Large Game Pad"/>
            </div>

            <div className="w-[399px] ml-6 ">
                <h3 className="font-inter text-[24px] pb-3 font-semibold  tracking-[0.03em]">{product.title}</h3>
                <Image src={frame} alt="" className="pb-[16px]"/>
                <span className="text-[16px] pb-4">${product.price}</span>
                <div className="pb-6">
                    <span className="text-[14px]">{product.description}</span>
                </div>
               <hr className="pb-6"/>
               <div className="flex gap-4 pb-6">
                    <span className="text-[20px font-inter">Colours:</span>
                    <div className="flex gap-2 ">
                        <div className="w-[20px] h-[20px] bg-[#A0BCE0] border border-solid border-black rounded-full "></div>
                        <div className="w-[20px] h-[20px] bg-[#db4444]  rounded-full"></div>
                    </div>
                </div>
                <div className="flex gap-6 pb-6">
                    <span className="text-[20px] font-inter">Size:</span>
                    <div className="flex gap-4">
                    {divContents.map((item, index)=>{
                        return(
                            <div 
                            key={index} 
                            className="w-[32px] h-[32px] flex items-center justify-center p-2 gap-2 rounded-[4px] border">{item}</div>
                        )
                    })}
                    </div>
                </div>
                 <div className="flex gap-4 pb-6">
                    <div className="flex">
                        <div className="w-[40px] h-[44px] flex items-center justify-center rounded-tl-[4px] rounded-bl-[4px] border">-</div>
                        <div className="w-[80px] h-[44px] flex items-center justify-center rounded-tl-[4px] rounded-bl-[4px] border">2</div>
                        <div className="w-[40px] h-[44px] flex items-center justify-center rounded-tl-[4px] rounded-bl-[4px] border">+</div>
                    </div>
                    <Button className="w-[165px] h-[44px] flex justify-center items-center">Buy Now</Button>
                    <div className="w-[40px] h-[44px] flex items-center justify-center  rounded-tl-[4px] rounded-bl-[4px] border">
                        <Image src={like} alt=""/>
                    </div>
                 </div>
                <div>
                    <Image src={frame2} alt="" />
                </div>
            </div>
        </div>
        </div>
        {/* Related Items section */}
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
export default ProductDetailSection