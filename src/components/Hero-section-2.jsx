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
        <div className=" flex gap-4 max-w-6xl mx-auto">
            <div className="h-64 relative w-[20vw] rounded-md overflow-hidden shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
                <Image src="/Home-Images/11.png" alt="No Preview" fill className="object-cover" />
            </div>
            <div className="h-64 relative w-[32vw] rounded-md overflow-hidden mt-5 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
                <Image src="/Home-Images/12.png" alt="No Preview" fill className="object-cover" />
            </div>
            <div className="h-64 relative w-[20vw] rounded-md overflow-hidden shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
                <Image src="/Home-Images/13.png" alt="No Preview" fill className="object-cover" />
            </div>
        </div>
        <div>
        <section className={`pt-20 px-5 max-w-6xl mx-auto ${poppins}`}>
            <div className="bg-white py-4 px-6 rounded-xl shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] flex justify-between items-center">
            <div className="text-center w-[25vw]">
                <p className="text-[2.5rem] font-medium text-primary-main">72%</p>
                <p className="text-lg text-primary-main">{`Increase restaurant's organic reach`}</p>
            </div>
            <div className="border-l-2 h-16 border-l-primary-main"></div>
            <div className="text-center w-[25vw]">
                <p className="text-[2.5rem] font-medium text-primary-main">100%</p>
                <p className="text-lg text-primary-main">Safe And Hygiene</p>
            </div>
            <div className="border-l-2 h-16 border-l-primary-main"></div>
            <div className="text-center w-[25vw]">
                <p className="text-[2.5rem] font-medium text-primary-main">7k+</p>
                <p className="text-lg text-primary-main">Affiliated RESTAURANTS</p>
            </div>
            </div>
        </section>

        <section className={"my-4"}>
        <div class="relative flex overflow-x-hidden">
            <div class="animate-marquee whitespace-nowrap flex  gap-[6vw] h-44">
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
        <section className="bg-primary-main w-full text-white p-6 rounded-2xl max-w-6xl mx-auto ">
            <h1 className={`text-[2.5rem] font-medium text-center max-w-5xl mx-auto my-10 ${volkhvo.className}`}>Keep Your Customers happy and build their trust in your restaurant!</h1>
            <div className="w-full flex justify-center">
                <div className="bg-white text-primary-main text-lg font-medium py-2.5 px-4 rounded shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]">
                <FormPopup name="Get Free Demo" />
                </div>
            </div>
        </section>
            

        </div>

    </div>
  )
}

export default HeroSectionTwo