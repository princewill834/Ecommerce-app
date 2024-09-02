import React from "react";
import CarouselSlider from "./Carousel";

const Hero = () => (
  <section className="flex items-start px-[5%]">
    <div className="flex flex-col space-y-2 font-poppins w-[217px] mt-[40px] text-[16px] pl-2">
      <a href="#" className="hover:underline pb-2">
        Woman&apos;s Fashion
      </a>
      <a href="#" className="hover:underline pb-2">
        Men&apos;s Fashion
      </a>
      <a href="#" className="hover:underline pb-2">
        Electronics
      </a>
      <a href="#" className="hover:underline pb-2">
        Home &amp; Lifestyle
      </a>
      <a href="#" className="hover:underline pb-2">
        Medicine
      </a>
      <a href="#" className="hover:underline pb-2">
        Sports &amp; Outdoor
      </a>
      <a href="#" className="hover:underline pb-2">
        Baby&apos;s &amp; Toys
      </a>
      <a href="#" className="hover:underline pb-2">
        Groceries &amp; Pets
      </a>
      <a href="#" className="hover:underline pt-2">
        Health &amp; Beauty
      </a>
    </div>
    <div className="flex items-center">
      <div className="w-[1px] h-[400px] bg-gray-400 mr-[40px]"></div>
    </div>

    <div className="w-full mt-[40px] relative">
      <CarouselSlider />
    </div>
  </section>
);

export default Hero;
