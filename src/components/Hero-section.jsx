import { volkhvo } from '@/styles/font'
import React from 'react'
import FormPopup from './FormPopup'


const HeroSection = () => {
  return (
    <div id="home" className={`text-center py-10 mt-[10vw] `}>
        <h1 className={`text-secondary-main text-[4rem] font-bold leading-tight ${volkhvo.className}`}>Smart digital menu by <span className="text-primary-main">QR-CODE</span> <br /> a safe investment</h1>
        <p className="text-[#666666] text-xl leading-10">{`Discover 'The Future of Food Service' with Smart Digital QR Menu—transforming `} <br /> dining with efficient orders, cost savings, and advanced technology. </p>
        <div className="text-primary-main font-medium border border-primary-main text-lg px-4 py-2 rounded-md my-10 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] w-fit mx-auto">
        <FormPopup name="Get Free Demo" />
        </div>
    </div>
  )
}

export default HeroSection