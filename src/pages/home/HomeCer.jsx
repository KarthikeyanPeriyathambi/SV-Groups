import React from "react";
import { HomeCD } from "./HomeCD";

export const HomeCer = () => {
  return (
    <section className="screen-size relative">
      <div className="center justify-evenly text-white flex-wrap gap-5 my-20 ">
        {HomeCD.map((value, index) => {
          return (
            <div
              key={index}
              className={` ${value.bg} rounded-lg max-w-[350px] w-full max-[710px]:h-full h-60  center flex-col gap-3 p-4`}
            >
      
              <h1 className="  text-[16px] font-semibold leading-6">
                {" "}
                {value.title}
              </h1>
              <p className=" text-sm font-light leading-4 sm:h-12">
                {value.desc}
              </p>
              <div className="max-w-[100px] w-full h-24 center">
                <img
                  className="w-full object-cover "
                  src={value.icons}
                  alt={`${index} not found`}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full border text-litegrey flex justify-center items-center">
      </div>
    </section>
  );
};


