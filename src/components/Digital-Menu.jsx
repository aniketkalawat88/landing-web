import { Plusjakartasans, volkhvo } from '@/styles/font'
import Image from 'next/image'
import React from 'react'
import FormPopup from './FormPopup'

const DigitalMenu = () => {
  return (
    <div id="processQr" className="">
        <div className="bg-[#12141D] text-white text-5xl p-8 my-16">
            <h1 className={`text-center ${volkhvo.className}`}>How smart digital <span className="text-primary-main"> menu works</span></h1>
            <div className="max-w-6xl mx-auto w-full h-full py-20">
                <div className="flex items-center gap-10 ">
                    <div className="relative">
                        <div className=" rounded-full p-14 shadow-primary-main relative" style={{
                            background: 'rgba(247, 102, 49, 0.35)',
                            filter: 'blur(150.8px)',
                        }}>
                            <div className="h-[10rem] w-[19rem] relative rounded-full overflow-hidden">
                                <Image src="/Home-Images/14.png" alt="No Preview" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="absolute h-[19rem] w-[19rem] top-0 left-10">
                            <Image src="/Home-Images/14.png" alt="No Preview" fill className="object-cover rounded-full" />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className={`bg-white h-20 w-20 text-[3.7rem] flex justify-center items-center rounded-full font-extrabold  ${Plusjakartasans.className}`}  style={{  WebkitTextStrokeWidth: '2px',  WebkitTextStrokeColor: 'var(--Main, #FA7436)'}}>
                            1
                        </div>
                        <div>
                            <h3 className={`text-[2.2rem] font-bold ${Plusjakartasans.className}`}>Scan QR-CODE</h3>
                            <p className="text-[#FFFFFFB2] text-xl font-normal mt-4 text-center">Guests scan the QR code from  <br />their Android or iOS devices.</p>
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-end gap-10">
                    <div className="flex items-center gap-5">
                        <div className={`bg-white h-20 w-20 text-[3.7rem] flex justify-center items-center rounded-full font-extrabold  ${Plusjakartasans.className}`}  style={{  WebkitTextStrokeWidth: '2px',  WebkitTextStrokeColor: 'var(--Main, #FA7436)'}}>
                            2
                        </div>
                        <div>
                            <h3 className={`text-[2.2rem] font-bold ${Plusjakartasans.className}`}>Send a message</h3>
                            <p className="text-[#FFFFFFB2] text-xl font-normal mt-4 text-center">They get redirected to WhatsApp <br />and send an auto-fill message.</p>
                        </div>

                    </div>
                    <div className="relative">
                        <div className=" rounded-full p-14 shadow-primary-main relative" style={{
                            background: 'rgba(247, 102, 49, 0.35)',
                            filter: 'blur(150.8px)',
                        }}>
                            <div className="h-[10rem] w-[19rem] relative rounded-full overflow-hidden">
                                <Image src="/Home-Images/15.png" alt="No Preview" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="absolute h-[19rem] w-[19rem] top-0 left-10">
                            <Image src="/Home-Images/15.png" alt="No Preview" fill className="object-cover rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center  gap-10">
                    <div className="relative">
                        <div className=" rounded-full p-14 shadow-primary-main relative" style={{
                            background: 'rgba(247, 102, 49, 0.35)',
                            filter: 'blur(150.8px)',
                        }}>
                            <div className="h-[10rem] w-[19rem] relative rounded-full overflow-hidden">
                                <Image src="/Home-Images/16.png" alt="No Preview" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="absolute h-[19rem] w-[19rem] top-0 left-10">
                            <Image src="/Home-Images/16.png" alt="No Preview" fill className="object-cover rounded-full" />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className={`bg-white h-20 w-20 text-[3.7rem] flex justify-center items-center rounded-full font-extrabold  ${Plusjakartasans.className}`}  style={{  WebkitTextStrokeWidth: '2px',  WebkitTextStrokeColor: 'var(--Main, #FA7436)'}}>
                            3
                        </div>
                        <div>
                            <h3 className={`text-[2.2rem] font-bold ${Plusjakartasans.className}`}>Receive a link</h3>
                            <p className="text-[#FFFFFFB2] text-xl font-normal mt-4 text-center">They get redirected to the<br />  Smart digital menu.</p>
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-end gap-10">
                    <div className="flex items-center gap-5">
                        <div className={`bg-white h-20 w-20 text-[3.7rem] flex justify-center items-center rounded-full font-extrabold  ${Plusjakartasans.className}`}  style={{  WebkitTextStrokeWidth: '2px',  WebkitTextStrokeColor: 'var(--Main, #FA7436)'}}>
                            4
                        </div>
                        <div>
                            <h3 className={`text-[2.2rem] font-bold ${Plusjakartasans.className}`}>Explore the menu</h3>
                            <p className="text-[#FFFFFFB2] text-xl font-normal mt-4 text-center">They view the menu and order <br /> food.</p>
                        </div>

                    </div>
                    <div className="relative">
                        <div className=" rounded-full p-14 shadow-primary-main relative" style={{
                            background: 'rgba(247, 102, 49, 0.35)',
                            filter: 'blur(150.8px)',
                        }}>
                            <div className="h-[10rem] w-[19rem] relative rounded-full overflow-hidden">
                                <Image src="/Home-Images/17.png" alt="No Preview" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="absolute h-[19rem] w-[19rem] top-0 left-10">
                            <Image src="/Home-Images/17.png" alt="No Preview" fill className="object-cover rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="bg-primary-main w-full text-white p-6 rounded-2xl max-w-6xl mx-auto ">
            <h1 className={`text-[2.5rem] font-medium text-center max-w-5xl mx-auto my-10 capitalize ${volkhvo.className}`}>Start Using Digital <br /> Menus Now !</h1>
            <div className="w-full flex justify-center">
                <div className="bg-white text-primary-main text-lg font-medium py-2.5 px-4 rounded shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)]"><FormPopup name="Get Free Demo" /></div>
            </div>
        </section>

    </div>
  )
}

export default DigitalMenu