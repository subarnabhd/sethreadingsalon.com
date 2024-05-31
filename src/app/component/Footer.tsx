import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";

function footer() {
    return (
        <div className="footer sticky bottom-0" >

            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-20">

                <div className="grid grid-cols-2 gap-20 sm:gap-6 sm:grid-cols-4">

                    <div>
                        <Link href="/"><Image src="/sethreadingsalon.svg" width={250} height={100} alt='' /></Link>
                        <p className='my-10'>Stylish Eyebrow Threading salon is one place for all your beauty needs.</p>


                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Main Branch</h2>

                        <ul className="text-gray-500 dark:text-white font-medium">

                            <li><a href="#" className=""><TiLocation />155 College Park Dr.Weatherford, Tx 76086</a></li>
                            <li><a href="#" className=""><FaPhone />+1 817-550-6988</a></li>

                        </ul>

                        <h2 className='font-semibold my-5'>BUSINESS HOUR</h2>

                        <ul className="text-gray-500 dark:text-white font-medium">

                            <li><a href="#" className="">Monday - Wednesday (10:00AM - 06:00PM)</a></li>
                            <li><a href="#" className="">Thursday- Friday - Saturday(10:00AM - 07:00PM)</a></li>

                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Branch - I</h2>

                        <ul className="text-gray-500 dark:text-white font-medium">

                            <li><a href="#" className=""><TiLocation />3311 North Main Street Fort Worth, Texas</a></li>
                            <li><a href="#" className=""><FaPhone />+1 817-550-6988</a></li>

                        </ul>

                        <h2 className='font-semibold my-5'>BUSINESS HOUR</h2>

                        <ul className="text-gray-500 dark:text-white font-medium">

                            <li><a href="#" className="">Monday - Wednesday (10:00AM - 06:00PM)</a></li>
                            <li><a href="#" className="">Thursday- Friday - Saturday(10:00AM - 07:00PM)</a></li>

                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Branch - II</h2>

                        <ul className="text-gray-500 dark:text-white font-medium">

                            <li><a href="#" className=""><TiLocation />6387 Camp Bovie BIva. Sto E Fort Worth, Tx 76116</a></li>
                            <li><a href="#" className=""><FaPhone />+1 682-224-0804</a></li>

                        </ul>

                        <h2 className='font-semibold my-5'>BUSINESS HOUR</h2>

                        <ul className="text-gray-500 dark:text-white font-medium">

                            <li><a href="#" className="">Monday - Saturday (10:00AM - 07:00PM)</a></li>
                            <li><a href="#" className="">Sunday (11:00AM - 06:00PM)</a></li>

                        </ul>
                    </div>

                </div>

            </div>

            <div className="copywrite p-5 text-center" >
                Copyright © 2024, Stylish Eyebrow Threading Salon. Designed by <a target="_blank" href="https://subarnabhandari.com/">Subarna.</a>
            </div>

        </div>

    )
}

export default footer