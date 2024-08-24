/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
    const nav = [
        { name: 'Home', link: '#home' },
        { name: 'Process', link: '#processQr' },
        { name: 'Benefits', link: '#benefits' },
        { name: 'Review', link: '#review' },
        { name: 'FAQ', link: '#faq' },
      ];
  return (
    <footer class="bg-[#12141D]">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/Home-Images/logo.png" class="h-8" alt="Flowbite Logo" />
                </a>
                <ul class="flex flex-wrap items-center mb-6  font-normal text-lg text-white sm:mb-0 dark:text-white space-x-10">
                    {
                        nav?.map((ele,i) => (
                        <li key={i}>
                            <a href={ele?.link} class="hover:underline me-4 md:me-6 hover:text-primary-main">{ele?.name}</a>
                        </li>

                        ))
                    }
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-primary-main lg:my-8" />
            <div>

            </div>
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright, Trabook 2022. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer