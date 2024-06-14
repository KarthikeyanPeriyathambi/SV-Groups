import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
  } from "react-icons/fa";
  import { CiYoutube } from "react-icons/ci";
import { Link } from 'react-router-dom';

export const FooterLink = () => {
  return (
    <section className="max-w-[250px] w-full mt-8 ">
    <div className="center flex-col gap-5 text-white text-sm">
      <div className="text-base">
        <p className=' text-3xl font-medium'>
        Senthur Velavan
        </p>
      </div>
      <section className="flex flex-col max-sm:text-center gap-5">
        
        <div className="center gap-5 text-xl font-semibold">
          <Link
            to="https://www.facebook.com/people/CloudBees-Tech/61556253873919/?sk=friends_likes"
            target="_blank"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://www.instagram.com/cloudbeestechnology/?hl=en"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://www.facebook.com/people/CloudBees-Tech/61556253873919/?sk=friends_likes"
            target="_blank"
          >
            <CiYoutube />
          </Link>
        </div>
      </section>
    </div>
  </section>
  )
}
