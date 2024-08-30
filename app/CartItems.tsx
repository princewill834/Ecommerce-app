import React from "react";
import Button from "./components/Button";
import DropUp from "../public/assets/images/Drop-Up-Small.svg"
import DropDown from "../public/assets/images/Drop-Down-Small.svg"
import Image from "next/image";


const CartItems = () =>{
    return(
        <section className="px-[5%] py-20">
            <div className="flex text-[14px] mb-20">
                <span>Home / </span>
                <span>Cart</span>
            </div>
             {/* title section  */}
            <div className="space-y-10">   
                <div className="flex justify-between items-center  p-[1.5rem_2.5rem] shadow-md rounded rounded-tl-md">
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                </div>
                {/* Contents sections*/}
                <div className="flex justify-between items-center p-[1.5rem_2.5rem] shadow-md rounded rounded-tl-md">
                    <span>LCD Monitor</span>
                    <span>$650</span>
                    <div className="flex w-[72px] h-[44px] border rounded-[4px] justify-between items-center px-2">
                        <span>01</span>
                        <div className="flex flex-col">
                            <Image src={DropUp} alt=""/>
                            <Image src={DropDown} alt=""/>
                        </div>  
                    </div>
                    <span>$650</span>
                </div>
                <div className="flex justify-between items-center p-[1.5rem_2.5rem] shadow-md  rounded-tl-md">
                    <span>HI GamePad</span>
                    <span>$650</span>  
                    <div className="flex w-[72px] h-[44px] border rounded-[4px] justify-between items-center px-2">
                        <span>01</span>
                        <div className="flex flex-col">
                            <Image src={DropUp} alt=""/>
                            <Image src={DropDown} alt=""/>
                        </div>  
                    </div>
                    <span>$650</span>
                </div>

                <div className="flex justify-between items-center ">
                    <button className="border rounded-[4px] p-[16px_48px]">Return To Shop</button>
                    <button className="border rounded-[4px] p-[16px_48px]">Update Cart</button>
                </div>
            </div>

                    {/* Input and Button Section       */}
                <div className="flex items-start justify-between pt-[80px]">
                    <div className="flex gap-4">
                        <input className="w-[18.75rem] border rounded-[4px] text-base font-normal pl-6 leading-6" 
                        placeholder="Coupon Code"/>
                        <Button>Apply Coupon</Button>
                    </div>
            
                        {/* Cart Total Section */}
                    <div className="border border-black rounded-[4px] p-[32px_24px]  w-[29rem]">
                        <h3 className="text-[1.25rem] pb-6 font-medium">Cart Total</h3>
                        <div className="flex justify-between pb-2">
                            <span>Subtotal: </span>
                            <span>$170</span>
                        </div>
                        <hr className="my-[2%] h-[1px]  pb-2"/>
                        <div className="flex justify-between text-base font-normal  pb-2">
                            <span>Shipping: </span>
                            <span>Free</span>
                        </div>
                        <hr className="my-[2%] h-[1px]   pb-2"/>
                        <div className="flex justify-between  pb-2">
                            <span>Total: </span>
                            <span>$170</span>
                        </div>
                        <div className="flex justify-center">
                            <Button className="w-[16.25rem]">Process to checkout</Button>
                        </div>
                        
                    </div>
                </div>
           
        </section>
    )
} 
export default CartItems