import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className="about p-10">
      <div className="container text-center m-auto p-20 flex justify-center flex-col columns-md">

        <Image  className="center text-center m-auto mb-10" src="/sethreadingsalon3.svg" width={300} height={100} alt='' />
        <p>Stylish Eyebrow Threading salon. We would like to thank you for taking the time to explore our website. Stylish Eyebrow Threading salon is one place for all your beauty needs. We hope your stay with us is an experience in learning more about us. We offer an array of services including facials, threading, waxing, eyelash extension, henna service, etc. Also, we are happy to share special beauty tips with our customers to make sure they know how to maintain the work we do for them.</p>
      </div>
    </div>
  )
}

export default page