import Image from 'next/image'
import React from 'react'
import FAQ from './FAQ'
import { Plusjakartasans, volkhvo } from '@/styles/font'
import PeopleSay from './People-say'

const DigitalQr = () => {
  return (
    <div id="benefits" className="py-10 max-w-7xl mx-auto">
       <h1 className={`text-5xl font-bold text-center max-w-5xl mx-auto leading-tight ${volkhvo.className}`}>World&apos;s most advanced <span className="text-primary-main"> digital QR </span> <br /> menu features</h1>
       <div className="grid grid-cols-2">
            <div>
                <div className="h-[42rem] relative scale-110">
                    <Image src="/Home-Images/06.png" alt="No Preview" fill className="object-contain" />
                </div>
            </div>
            <div className="grid gap-10 my-10">
                <div>
                    <li className="text-3xl font-semibold text-[#263238]">Improve the Customer Experience</li>
                    <p className="text-xl text-[#666666] mt-4">With QR code menus that offer ordering capabilities, guests can order as soon as they’re seated.</p>
                </div>
                <div>
                    <li className="text-3xl font-semibold text-[#263238]">Increase Revenue</li>
                    <p className="text-xl text-[#666666] mt-4">QR code menus offer excellent upselling and cross-selling opportunities.
                    </p>
                </div>
                <div>
                    <li className="text-3xl font-semibold text-[#263238]">Save money on printing costs</li>
                    <p className="text-xl text-[#666666] mt-4">Digital QR menus are more cost-effective than print menus. Changes can be made instantly without additional printing costs.</p>
                </div>  
                <div>
                    <li className="text-3xl font-semibold text-[#263238]">Build a community!</li>
                    <p className="text-xl text-[#666666] mt-4">Collect valuable data from WhatsApp and supercharge your Sales by sending offers on WhatsApp.
                    </p>
                </div>
                <div>
                    <button className={`bg-primary-main text-white p-2 rounded-md font-medium px-4 text-2xl  ${Plusjakartasans.className}`}>Let’s do it !</button>
                    <p className={`text-primary-main my-4 lowercase ${Plusjakartasans.className}`}>100% FREE DEMO - NO CREDIT CARD REQUIRED</p>
                </div>
            </div>
       </div>
       <PeopleSay />
        <div className="my-10">
            <h1 className={`text-5xl font-bold ${volkhvo.className}`}>Ready to <span className="text-primary-main"> Level up</span> in just a minutes?</h1>
                <div className="grid grid-cols-3 gap-8 mt-12">
                    <div className="">
                        <div className="relative h-72">
                            <Image src="/Home-Images/07.png" alt="" fill className="object-cover rounded-md" />
                        </div>
                        <div className="text-center relative">
                            <div className="absolute w-full -top-4">
                                <p className="bg-primary-main text-white h-10 w-10 flex items-center justify-center text-xl rounded-full mx-auto">1</p>
                            </div>
                            <h1 className={`text-center text-primary-main text-2xl font-bold pt-6 drop-shadow-md  ${Plusjakartasans.className}`}>Sign Up for Free</h1>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative h-72">
                            <Image src="/Home-Images/18.png" alt="" fill className="object-cover rounded-md" />
                        </div>
                        <div className="text-center relative">
                            <div className="absolute w-full -top-4">
                                <p className="bg-primary-main text-white h-10 w-10 flex items-center justify-center text-xl rounded-full mx-auto">2</p>
                            </div>
                            <h1 className={`text-center text-primary-main text-2xl font-bold pt-6 drop-shadow-md  ${Plusjakartasans.className}`}>Send us your existing menu</h1>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative h-72">
                            <Image src="/Home-Images/19.png" alt="" fill className="object-cover rounded-md" />
                        </div>
                        <div className="text-center relative">
                            <div className="absolute w-full -top-4">
                                <p className="bg-primary-main text-white h-10 w-10 flex items-center justify-center text-xl rounded-full mx-auto">3</p>
                            </div>
                            <h1 className={`text-center text-primary-main text-2xl font-bold pt-6 drop-shadow-md  ${Plusjakartasans.className}`}>You will receive a QR code</h1>
                        </div>
                    </div>
                </div>
       </div>
       <section id="faq" className="py-10">
            <h1 className={`text-5xl font-bold ${volkhvo.className}`}>Frequently  <span className="text-primary-main"> asked question</span></h1>
        <FAQ />
       </section>
    </div>
  )
}

export default DigitalQr