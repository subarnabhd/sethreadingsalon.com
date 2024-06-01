import Image from 'next/image'
import React from 'react'

const Service = () => {
  return (
   
    <div className="services-box container p-10 flex gap-10  max-w-screen-xl ">

      <div className=" service-info rounded-2xl text-center m-auto p-10 flex justify-center flex-col border-2 border-slate-100 bg-white">
        <Image className="center text-center m-auto rounded-2xl" src="/1.jpg" width={225} height={100} alt='' />
        <h3 className='font-semibold text-2xl text-gray-800 my-5'>Facial</h3>
        <p className='text-gray-500'>Process of hair removal from the root by using covering of a sticky substance, Unlike old waxing, heated wax is spread easily over the skin.</p>
        <a href="/services/#facial" className='text-gray-800 text-sm mt-4'>View More</a>

      </div>

      <div className=" service-info rounded-2xl text-center m-auto p-10 flex justify-center flex-col border-2 border-slate-100 bg-white">
        <Image className="center text-center m-auto rounded-2xl" src="/3.jpg" width={225} height={100} alt='' />
        <h3 className='font-semibold text-2xl text-gray-800 my-5'>Threading</h3>
        <p className='text-gray-500'>For the sophisticate and the novice alike. This precise method removes hair in a line formation, or even a single hair, to achieve an exact brow.</p>
        <a href="/services/#threading" className='text-gray-800 text-sm mt-4'>View More</a>
      </div>

      <div className=" service-info rounded-2xl text-center m-auto p-10 flex justify-center flex-col border-2 border-slate-100 bg-white">
        <Image className="center text-center m-auto rounded-2xl" src="/2.jpg" width={225} height={100} alt='' />
        <h3 className='font-semibold text-2xl text-gray-800 my-5'>Waxing</h3>
        <p className='text-gray-500'>Process of hair removal from the root by using covering of a sticky substance, Unlike old waxing, heated wax is spread easily over the skin.</p>
        <a href="/services/#waxing" className='text-gray-800 text-sm mt-4'>View More</a>

      </div>

    </div>
  )
}

export default Service