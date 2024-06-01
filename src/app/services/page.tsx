import Image from 'next/image'
import React from 'react'
import Servicelist from '../component/Servicelist'
function page() {
  return (
    <main className='services'>

      <div className="titlebar p-20 text-4xl font-bold text-center bg-secondary c-primary">
        <h4>Services</h4>
      </div>
      <Servicelist />

    </main>
  )
}

export default page