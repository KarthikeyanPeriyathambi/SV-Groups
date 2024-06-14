import React from 'react'
import {HomeCer} from '.././home/HomeCer'
import { HomeBuy } from './HomeBuy'
import { HomeCD } from './HomeCD'
import { HomeSale } from './HomeSale'
import { HomeRend } from './HomeRend'
import { HomeLease } from './HomeLease'
import { HomeReviews } from './HomeReviews'
import { HomeLocation } from './HL/HomeLocation'
import { HomeNC } from './HomeNav/HomeNC'

export const Home = () => {
  return (
    <>
      <HomeCer />
      <HomeBuy/>
      <HomeNC/>
      <HomeRend/>
      <HomeSale/>
      <HomeLease/>
      <HomeReviews/>
      <HomeLocation/>
      
    </>
  )
}
