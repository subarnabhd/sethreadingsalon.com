import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (

        <div className="header">

            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">

                <Link href="/"><Image src="/sethreadingsalon.svg" width={250} height={100} alt='' /></Link>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        <li>
                            <Link href="/">Home</Link></li>
                        <li>
                            <Link href="/about">About</Link></li>
                        <li>
                            <Link href="/gallery">Gallery</Link></li>
                        <li>
                            <Link href="/services">Services</Link></li>
                        <li>
                            <Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Navbar