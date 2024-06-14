import React from "react";
import { HomeND } from "./HomeND";

export const Popular = () => {
  return (
      <section className="flex  justify-center ">
        <div className="flex flex-wrap justify-center items-center h-full gap-10">
          {HomeND.plate.map((val, index) => (
            <div key={index} className="center flex-col gap-7 ">
              <div className=" max-w-[200px] flex gap-7 ">
                <img className="object-cover " src={val.img} alt={`${index} not found`} />
              </div>
       
               <div className="w-full px-3 py-3 ">
               <h2 className="text-[14px] font-medium text-litegrey mb-5">{val.title}</h2>

               </div>
               
           
            </div>
          ))}
        </div>
      </section>
  );
};
