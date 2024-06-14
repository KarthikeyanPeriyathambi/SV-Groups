import React from 'react'
import { HomeSD } from "./HomeSD";

export const HomeLease = () => {
  return (
    <section className=" "> 
      <h3 className="mt-10 ml-36 text-2xl font-normal max-sm:text-[16px] text-primary ">
      Rent and Lease a House in Pondicherry      
      </h3> 
      <div className=" flex justify-center items-center gap-10 mt-7 flex-wrap p-3 ">
          {HomeSD.lease.map((items, i) => {
            return (
              <div key={i} className="rounded-lg shadow-lg mb-10" >
                <div className="max-w-[300px] w-full ">
                  <img
                    className="object-cover w-full rounded-lg"
                    src={items.img}
                    alt=""
                  />
                </div>
                <div className="flex flex-col ml-5 mt-3 mb-4">
                <h2 className="buthint text-litegrey  pt-2"> {items.title}</h2>
                <h3 className="hint pt-2">{items.desc}</h3>
                <p className="buthint text-litegrey pt-2">{items.para}</p>
                </div>
               
                <div className=" mb-4 flex justify-between items-center px-5">
                <button className=" content text-[12px] text-black border px-1  rounded-lg">
                          {items.price}
                          </button>
                          <button className="bg-primary content text-[12px] text-white px-1  rounded-lg">
                          View Details
                          </button>
                        </div>
              
              </div>
            );
          })}
      </div>
    </section>
  );
};