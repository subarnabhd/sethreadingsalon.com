import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (



        <nav className="header sticky top-0 bg-primary bg-primary border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">

                
                    <Link href="/"><Image src="./sethreadingsalon.svg" width={200} height={100} alt='' /></Link>
   

                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link href="/" className="block px-5 py-3 text-sm rounded-full text-white uppercase">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block px-5 py-3 text-sm rounded-full text-white uppercase">About</Link>
                        </li>
                        <li>
                            <Link href="/services" className="block px-5 py-3 text-sm rounded-full text-white uppercase">Services</Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="block px-5 py-3 text-sm rounded-full text-white uppercase">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block px-5 py-3 text-sm rounded-full text-white uppercase">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>




    )
}

export default Navbar