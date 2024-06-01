import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (

    <div className="container text-center m-auto p-20 flex justify-center flex-col columns-md w-1/2 ">


    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <Image className="h-auto max-w-full rounded-lg" src="/1.jpg" width={400} height={100} alt='' />
      <Image className="h-auto max-w-full rounded-lg" src="/2.jpg" width={400} height={100} alt='' />
      <Image className="h-auto max-w-full rounded-lg" src="/3.jpg" width={400} height={100} alt='' />
      {/* <Image className="h-auto max-w-full rounded-lg" src="/5.jpg" width={400} height={100} alt='' /> */}
      <Image className="h-auto max-w-full rounded-lg" src="/6.jpg" width={400} height={100} alt='' />
      <Image className="h-auto max-w-full rounded-lg" src="/7.jpg" width={400} height={100} alt='' />
      <Image className="h-auto max-w-full rounded-lg" src="/8.jpg" width={400} height={100} alt='' />
      <Image className="h-auto max-w-full rounded-lg" src="/9.jpg" width={400} height={100} alt='' />
      <Image className="h-auto max-w-full rounded-lg" src="/10.jpg" width={400} height={100} alt='' />
      {/* <Image className="h-auto max-w-full rounded-lg" src="/11.jpg" width={400} height={100} alt='' /> */}
      <Image className="h-auto max-w-full rounded-lg" src="/12.jpg" width={400} height={100} alt='' />
      <Image className="h-auto max-w-full rounded-lg" src="/13.jpg" width={400} height={100} alt='' />
      <Image className="h-auto max-w-full rounded-lg" src="/14.jpg" width={400} height={100} alt='' />
      <Image className="h-auto max-w-full rounded-lg" src="/15.jpg" width={400} height={100} alt='' />
      <Image className="h-auto max-w-full rounded-lg" src="/16.jpg" width={400} height={100} alt='' />
      <Image className="h-auto max-w-full rounded-lg" src="/17.jpg" width={400} height={100} alt='' />
      <Image className="h-auto max-w-full rounded-lg" src="/4.jpg" width={400} height={100} alt='' />



    </div>


  </div>
  )
}

export default Gallery