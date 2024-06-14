import React from 'react'
import { FooterLink } from '../FooterLink'
import { FooterFS } from './FooterFS'
import { FooterAB } from './FooterAB'
import { FooterContact } from './FooterContact'

export const Footer = () => {
  return (
    <section className="center footer-bg relative">
        <div className="screen-size center text-white flex-wrap  mt-16 mb-5">
          <section className="flex justify-between max-sm:justify-center flex-wrap w-full">
            <FooterLink/>
            <FooterFS/>
            <FooterAB/>
            <FooterContact/>
          </section>
         
          <div className="mt-10 flex flex-col max-sm:text-center gap-5 ">
          <p className="text-[20px] font-light text-white">© 2024 Senthur Velavan Private Limited. All rights reserved</p>
          </div>
        </div>
      </section>
  )
}
