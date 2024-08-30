import React from "react";

const NewArrival = () => (
  <section className="px-[5%] pt-20 ">
    <h1 className="font-inter text-[36px] pb-5 font-semibold leading-[48px] tracking-[0.04em] text-left ">
      New Arrival
    </h1>
    <div className="gap-[30px] flex">
      <div className="playstation-container">
        <a href="#" className=" absolute mt-[363px] ml-[23px] py-[33%] opacity-0">
          Shop Now
        </a>
      </div>
      <div className="w-[570px] h-[600px]">
        <div className="beautiful-woman">
          <div className="absolute mt-[66px] ml-[25px] py-[30%]">
            <a href="#" className="opacity-0">
              Shop Now
            </a>
          </div>
        </div>
        <div className="flex gap-[30px] py-8">
          <div className="speaker">
            <a
              href="#"
              className="mt-[143px] ml-[25px] py-[35%] absolute opacity-0"
            >
              Shop Now
            </a>
          </div>
          <div className="perfume">
            <a
              href="#"
              className=" mt-[143px] ml-[25px] py-[35%] absolute opacity-0 "
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewArrival;
