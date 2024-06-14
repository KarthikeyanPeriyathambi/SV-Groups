import React, { useState } from "react";
import { Popular } from "../HomeNav/Popular";
import { HomeND } from "./HomeND";

export const HomeNC = () => {
  const [activeProperties, setActiveProperties] = useState(0); // Initialize with index 0

  const Properties = [
    { name: "Most Popular", content: <Popular />, isActive: false },
    { name: "By Budget", content: <Popular />, isActive: false },
    { name: "By Property Type", content: <Popular />, isActive: false },
    { name: "By BHK", content: <Popular />, isActive: false },
  ];

  // Set the active menu item
  const handleMenuClick = (index) => {
    setActiveProperties(index);
  };

  return (
    <section>
        <section className="center flex-col">
          <div className="screen-size  center flex-col">
            <h2 className="font-semibold text-center text-4xl max-sm:text-[18px]">
              Properties for Sale in Pondicherry
            </h2>
            <div className="z-10  pt-10 max-sm:w-[260px] w-full h-full flex justify-center sm:gap-20 px-2 my-10 py-7 p-1 gap-4 scroll1 scrollbar-hide">
              {Properties.map((item, index) => (
                <div
                  key={index}
                  className={`max-sm:inline-block hover:scale-105 ease-in-out duration-300 max-sm:text-[13px] ${
                    activeProperties === index ? "text-lightred" : ""
                  }`}
                >
                  <span
                    onClick={() => handleMenuClick(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="sm:mt-10">{Properties[activeProperties].content}</div>
          </div>
        </section>
    </section>
  );
};
