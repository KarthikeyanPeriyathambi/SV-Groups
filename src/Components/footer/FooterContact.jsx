import React from 'react'
import { Link } from 'react-router-dom'

export const FooterContact = () => {
  return (
    <section className="center max-w-[250px] w-full ">
    <div className="center flex-col gap-5 text-white  ">
      <div className="-ml-3">
            <p className='text-3xl font-medium'>
            Contact
            </p></div>
        <div className="flex flex-col gap-6 content text-white ">
    <Link
    //   to=" Location"
    >
      Location
    </Link>

    <Link
    //   to=" Email"
    >
      Email
    </Link> 
    
    <Link
    //   to=" Telephone"
    >
      Telephone
    </Link> 
  </div>
    </div>
  </section>  )
}
