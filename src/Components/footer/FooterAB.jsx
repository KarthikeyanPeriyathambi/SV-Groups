import React from 'react'
import { Link } from 'react-router-dom'

export const FooterAB = () => {
  return (
    <section className="center max-w-[250px] w-full ">
    <div className="center flex-col gap-5 text-white  ">
      <div className="-ml-3">
            <p className='text-3xl font-medium'>
            About
            </p></div>
        <div className="flex flex-col gap-6 content text-white ">
    <Link
    //   to=" Pricing"
    >
      Pricing
    </Link>

    <Link
    //   to="FQA"
    >
      FQA
    </Link> 
  </div>
    </div>
  </section>
  )
}
