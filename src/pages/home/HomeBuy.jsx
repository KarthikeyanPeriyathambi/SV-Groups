import React from 'react'
import { HomeBD } from './HomeBD'

export const HomeBuy = () => {
  return (
    <section className="screen-size  my-28">
    <h3 className="hint text-center max-sm:text-[14px]  my-5  text-litegrey">
    ALL PROPERTY NEEDS - ONE PORTAL
    </h3>
    <h2 className=" text-center title max-sm:text-[20px] text-black">
    Find Better Places to Live, Work <br/>
    and Wonder...
    </h2>
    <div className="center overflow-hidden">
                {HomeBD.buy.map((val, index) => (
                  <div key={index} className='center justify-center max-sm:flex-col mt-20  ml-12'>
                     <div className="max-sm:w-[250px] max-sm:mt-5 max-w-[850px] w-full  ">
                        <img
                          className="object-cover"
                          src={val.img}
                          alt={`${index} not found`}
                        />
                      </div>
                    <div className="w-full center justify-center pl-8">
                      <div className="">
                        <h2 className="content max-sm:text-[12px] text-litegrey mb-5 ">
                          {val.title}
                        </h2>

                        <h3 className="subtitle max-sm:text-[18px] mb-5">
                            {val.desc}
                        </h3>
                            
                        <p className="content max-sm:text-[12px] mb-5">{val.para}</p>

                        <div className=" mb-4">
                          <button className="bg-primary content max-sm:text-[12px] text-white px-3 py-2  rounded-lg">
                          Explore Buying
                          </button>
                        </div>
                      </div>
                    </div>          
                  </div>
                ))}
              </div>
    </section>
  )
}
