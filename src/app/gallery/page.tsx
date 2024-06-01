import Image from 'next/image'
import React from 'react'
import Gallery from '../component/Gallery'

function page() {
  return (
    <main className="gallery bg-white">

      <div className="titlebar p-20 text-4xl font-bold text-center bg-secondary c-primary">
        <h4>Gallery</h4>
      </div>

      <Gallery />
    </main>
  )
}

export default page