import React from 'react';
import { HomeLL } from './HomeLL';
import { Link } from 'react-router-dom';

export const HomeLocation = () => {
  // Combine all data into a single array
  const allData = [...HomeLL. estate, ...HomeLL.houses, ...HomeLL.flats, ...HomeLL.lands];

  return (
    <section className='center flex-col'>
      <h3 className="mt-40 title center  max-sm:text-[20px] px-5">
        Explore Popular Localities in Pondicherry
      </h3>
      <div className="flex justify-center items-center gap-10 mt-7 flex-wrap">
        {allData.map((item, index) => (
          <div key={index} className="mb-10">
            <div className="flex flex-col ml-5 mt-3 mb-4">
              <h2 className="buthint pt-2">{item.title}</h2>
              {item.properties.map((property, i) => (
                <Link key={i} className="text-[12px] text-secondary pt-5">
                  {property}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

