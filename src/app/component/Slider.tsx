import React from 'react'

const Slider = () => {
    return (
        <div className='slider m-auto w-full flex justify-center '>

            <div className="overlay align-middle m-auto w-full flex justify-center items-center ">

                <div className="container inline-block text-center items-center align-middle">

                    <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-5xl dark:text-white">Stylish Eyebrow Threading Salon</h1>
                    <p className="mb-6 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300">One place for all your beauty needs.</p>
                    <a href="/about" className=" btn border-btn mt-10">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default Slider