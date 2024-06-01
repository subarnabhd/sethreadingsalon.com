import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function footer() {
    return (
        <div className="footer bottom-0 bg-primary-md-dark" >

            <div className="w-full max-w-screen-xl mx-auto p-5 pt-20 pb-10">

                <div className="grid grid-cols gap-10 sm:gap-6 sm:grid-cols-4">

                    <div className='se-service'>
                        <Link href="/"><Image src="/sethreadingsalon.svg" width={225} height={100} alt='' /></Link>
                        <p className='my-5 text-sm'>Stylish Eyebrow Threading salon is one place for all your beauty needs.</p>
                        <div className="social-icon flex row gap-5 dark:text-white">
                            <a className="p-3 bg-primary rounded-full" href="https://www.facebook.com/sethreadingsalon" target='blank'><FaFacebookF /></a>
                            <a className="p-3 bg-primary rounded-full" href="https://www.instagram.com/stylish_ibrow_threading_salon/" target='blank'><FaInstagram /></a>
                        </div>
                    </div>

                    <div className='se-service'>
                        <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Main Branch</h2>

                        <ul className="text-gray-500 dark:text-white font-medium">

                            <li><a href="https://maps.app.goo.gl/ARg2arLzUyjyxsno6" target='bank' className="flex gap-2 text-sm pb-2 font-normal"><FaLocationDot />155 College Park Dr.Weatherford, Tx 76086</a></li>
                            <li><a href="tel:+1%20817-550-6988" className="flex gap-2 text-sm pb-2 font-normal"><FaPhone />+1 817-550-6988</a></li>

                        </ul>

                        <h2 className='my-6 text-sm font-semibold uppercase dark:text-white'>BUSINESS HOUR</h2>


                        <ul className="text-gray-500 dark:text-white font-medium">

                            <li><a className="flex gap-2 text-sm pb-2 font-normal">Monday - Wednesday (10:00AM - 06:00PM)</a></li>
                            <li><a className="flex gap-2 text-sm pb-2 font-normal">Thursday- Friday - Saturday (10:00AM - 07:00PM)</a></li>

                        </ul>
                    </div>

                    <div className='se-service'>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Branch - I</h2>

                        <ul className="text-gray-500 dark:text-white font-medium">

                            <li><a href="https://maps.app.goo.gl/YRrCcYzKVKXrpCQ3A" target='bank' className="flex gap-2 text-sm pb-2 font-normal"><FaLocationDot />3311 North Main Street Fort Worth, Texas</a></li>
                            <li><a href="tel:+1%20817-625-0808" className="flex gap-2 text-sm pb-2 font-normal"><FaPhone />+1 817-550-6988</a></li>

                        </ul>

                        <h2 className='my-6 text-sm font-semibold uppercase dark:text-white'>BUSINESS HOUR</h2>

                        <ul className="text-gray-500 dark:text-white font-medium">

                            <li><a className="flex gap-2 text-sm pb-2 font-normal">Monday - Wednesday (10:00AM - 06:00PM)</a></li>
                            <li><a className="flex gap-2 text-sm pb-2 font-normal">Thursday- Friday - Saturday (10:00AM - 07:00PM)</a></li>

                        </ul>
                    </div>

                    <div className='se-service'>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Branch - II</h2>

                        <ul className="text-gray-500 dark:text-white font-medium">

                            <li><a href="#" target='bank' className="flex gap-2 text-sm pb-2 font-normal"><FaLocationDot />6387 Camp Bovie BIva. Sto E Fort Worth, Tx 76116</a></li>
                            <li><a href="tel:+1%20682-224-0804" className="flex gap-2 text-sm pb-2 font-normal"><FaPhone />+1 682-224-0804</a></li>

                        </ul>

                        <h2 className='my-6 text-sm font-semibold uppercase dark:text-white'>BUSINESS HOUR</h2>

                        <ul className="text-gray-500 dark:text-white font-medium">

                            <li><a className="flex gap-2 text-sm pb-2 font-normal">Monday - Saturday (10:00AM - 07:00PM)</a></li>
                            <li><a className="flex gap-2 text-sm pb-2 font-normal">Sunday (11:00AM - 06:00PM)</a></li>

                        </ul>
                    </div>

                </div>

            </div>

            <div className="copywrite p-5 text-sm text-center bg-primary-dark c-secondary" >
                Copyright © 2024, Stylish Eyebrow Threading Salon. Designed by <a target="_blank" href="https://subarnabhandari.com/">Subarna.</a>
            </div>

        </div>

    )
}

export default footer