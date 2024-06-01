import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa6";
function page() {
  return (
    <main className='bg-white'>

      <div className='titlebar p-20 text-4xl font-bold text-center bg-secondary c-primary'>
        <h4>Contact</h4>
      </div>

      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-10'>

        <div className='col-6 max-w-xl p-5'>

          <h2 className="text-2xl font-bold text-gray-900">We'd love to hear from you!</h2>
          <p className="mt-1 text-sm text-gray-600">Whether you have questions, need to book an appointment, or want to provide feedback, our team at Stylish Eyebrow Threading Salon is here to assist you. Reach out to us via phone, email, or by visiting our salon. Your perfect brows are just a message away!</p>

          <div className="contact-details grid gap-5 mt-10">

            <div className='contact-box'>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase">Address</h2>
              <a href="https://maps.app.goo.gl/YRrCcYzKVKXrpCQ3A" target='bank' className="flex gap-2 text-gray-600"><FaLocationDot />3311 North Main Street Fort Worth, Texas</a>

            </div>
            <div className='contact-box'>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase">Phone</h2>
              <a href="tel:+1%20817-625-0808" className="flex gap-2 text-gray-600"><FaPhone />+1 817-550-6988</a>
            </div>
            <div className='contact-box'>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase">Email</h2>
              <a href="mailto:stylisheyebrowthreadingsalon@gmail.com" className="flex gap-2 text-gray-600"><MdOutlineAlternateEmail />stylisheyebrowthreadingsalon@gmail.com</a>
            </div>
            <div className='contact-box'>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase">Working Hours</h2>
              <a href="tel:+1%20817-625-0808" className="flex gap-2 text-gray-600"><FaRegCalendar />Monday - Wednesday (10:00AM - 06:00PM) Thursday- Friday - Saturday (10:00AM - 07:00PM) Sunday - Closed</a>
            </div>

          </div>


        </div>

        <div className='max-w-screen m-auto bg-slate-50  p-10'>
          <form>
            <div className="m-auto  w-80  grid gap-5">

              <div className="col-span-full">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Your Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>

            </div>




            <div className="flex pt-5 items-center justify-start gap-x-6">
              <a type="submit" className="rounded-md btn primary-btn text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</a>
            </div>

          </form>
        </div>

      </div>



    </main>
  )
}

export default page