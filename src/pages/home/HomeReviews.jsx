import React from "react";
import { HomeSD } from "./HomeSD";

export const HomeReviews = () => {
  return (
    <section className=" bg-[#e9e9e6ab] p-5 h-full shadow-lg ">
      <div className=" mb-44  relative ">
        <h5 className="para max-sm:text-[12px]  my-5  text-litegrey">
          Customer Reviews{" "}
        </h5>
        <h2 className=" text-[60px] font-medium max-sm:text-[30px] text-black">
          What our customers are
          <br /> saying about Senthur velavan
        </h2>
        <p className="para max-sm:text-[12px]  my-5  text-litegrey">
          Hear from our satisfied buyers, tenants, owners and dealers
        </p>

        <section className="scroll1 scrollbar-hide absolute flex  flex-col -bottom-23 flex-wrap max-w-[900px] max-h-[400px] gap-10  px-7 ml-36 ">
          {HomeSD.customer.map((val, index) => (
            <div
              key={index}
              className=" center border border-litegrey shadow-md w-full max-w-[350px] max-h-[180px] leading-3 gap-10 justify-center flex-col max-sm:flex-col mt-20 "
            >
              <div className="flex  mt-3">
                <div className="px-7 py-2 ">
                  <img
                    src={val.img}
                    alt={val.name}
                    className="border w-14 h-14 object-cover rounded-full"
                  />
                </div>

                <div className="">
                  <h3 className="text-black text-[20px] font-bold px- py-2">
                    {val.name}
                  </h3>
                  <p className=" text-[18px]  text-litegrey px- py-2">
                    {val.desc}
                  </p>
                </div>
              </div>

              <div className="mb-3">
                <p className=" text-[16px]  text-litegrey px- py-2 leading-6">
                  {val.para}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};
