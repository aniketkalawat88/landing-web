/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { Poppins } from 'next/font/google'
import { volkhvo } from '@/styles/font'
import FormPopup from './FormPopup'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300','100','200','500','700','300']
})

const HeroSectionTwo = () => {
  return (
    <div className="w-full">
        <div className=" md:flex grid gap-4 max-w-6xl mx-auto xl:px-0 px-6">
            <div className="md:h-64 h-40 relative md:w-[20vw] w-full rounded-md overflow-hidden shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
                <Image src="/Home-Images/11.png" alt="No Preview" fill className="object-cover" />
            </div>
            <div className="md:h-64 h-40 relative md:w-[32vw] w-full rounded-md overflow-hidden md:mt-5 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
                <Image src="/Home-Images/12.png" alt="No Preview" fill className="object-cover" />
            </div>
            <div className="md:h-64 h-40 relative md:w-[20vw] w-full rounded-md overflow-hidden shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
                <Image src="/Home-Images/13.png" alt="No Preview" fill className="object-cover" />
            </div>
        </div>
        <div>
        <section className={`md:pt-20 pt-10 px-5 max-w-6xl mx-auto ${poppins}`}>
            <div className="bg-white py-4 md:px-6 rounded-xl shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] flex  justify-between items-center">
            <div className="text-center md:w-[25vw] w-[30vw]">
                <p className="md:text-[2.5rem] text-2xl font-medium text-primary-main">72%</p>
                <p className="md:text-lg sm:text-base text-xs text-primary-main">{`Increase restaurant's organic reach`}</p>
            </div>
            <div className="border-l-2 h-16 border-l-primary-main inline "></div>
            <div className="text-center md:w-[25vw] w-[30vw]">
                <p className="md:text-[2.5rem] text-2xl font-medium text-primary-main">100%</p>
                <p className="md:text-lg sm:text-base text-xs text-primary-main">Safe And Hygiene</p>
            </div>
            <div className="border-l-2 h-16 border-l-primary-main inline "></div>
            <div className="text-center md:w-[25vw] w-[30vw]">
                <p className="md:text-[2.5rem] text-2xl font-medium text-primary-main">7k+</p>
                <p className="md:text-lg sm:text-base text-xs text-primary-main">Affiliated RESTAURANTS</p>
            </div>
            </div>
        </section>

        <section className={"my-4"}>
        <div class="relative flex overflow-x-hidden">
            <div class="animate-marquee whitespace-nowrap flex  md:gap-[6vw] gap-[4vw] md:h-44 h-20">
                <img src="/Home-Images/logo/01.png" alt="No Preview" className="object-contain h-full w-full" />
                <img src="/Home-Images/logo/02.png" alt="No Preview" className="object-contain h-full w-full" />
                <img src="/Home-Images/logo/03.png" alt="No Preview" className="object-contain h-full w-full" />
                <img src="/Home-Images/logo/04.png" alt="No Preview" className="object-contain h-full w-full" />
                <img src="/Home-Images/logo/05.png" alt="No Preview" className="object-contain h-full w-full" />
                <img src="/Home-Images/logo/06.png" alt="No Preview" className="object-contain h-full w-full" />
                <img src="/Home-Images/logo/07.png" alt="No Preview" className="object-contain h-full w-full" />
                <img src="/Home-Images/logo/08.png" alt="No Preview" className="object-contain h-full w-full" />
            </div>
            </div>

        </section>
        <section className="bg-primary-main md:w-full w-[90%] text-white md:p-6 p-2 rounded-2xl max-w-6xl mx-auto ">
            <h1 className={`xl:text-5xl md:text-3xl text-xl  font-medium text-center max-w-5xl mx-auto md:my-10 my-2 ${volkhvo.className}`}>Keep Your Customers happy and build their trust in your restaurant!</h1>
            <div className="w-full flex justify-center">
                <div className="bg-white text-primary-main text-lg font-medium md:py-2.5 py-1.5 px-4 rounded shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
                <FormPopup name="Get Free Demo" />
                </div>
            </div>
        </section>
            

        </div>

    </div>
  )
}

export default HeroSectionTwo