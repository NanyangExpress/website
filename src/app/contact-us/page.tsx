'use client'

import { useState } from "react";
import Image from 'next/image';

export default function ContactUs() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" })

  const sendEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
    
      event.preventDefault()
      fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
      }).then((result) => {
        if (result.status === 200) {
          alert("Successfully Send")
        }
      })
    
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData(values => ({ ...values, [name]: value }))
  }

  return (
    <>
        <style jsx global>{`
                    body {
                        background-color: black; /* Set the background color of the body to black */
                    }
                `}</style>
        <div className="pt-5 px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          <div className="mb-5 lg:mr-7 lg:ml-20"> {/* Adjust margin here */}
            <Image
              src='/contact-us-image.png'
              width={1141}
              height={796}
              className="block w-full lg:w-auto"
              alt="Contact Us Image"
          />
        </div>
        <div className="mx-auto">
          <p className="text-3xl lg:text-6xl font-bold text-center lg:text-left mb-4 mt-20" style={{ color: '#ffffff' }}>Get In Touch</p>
          <div className="text-md text-slate-500 text-center lg:text-lg lg:text-left mb-8 text-white">
            <p>Have an enquiry or some feedback for us?</p>
            <p>Fill up the form below to contact us</p>
          </div>
          <form className="w-full mx-auto lg:mx-0">
            <div className="flex flex-col">
              <div className="mb-6 md:flex">
                <div className="w-full md:w-1/2 md:pr-3 mb-6 md:mb-0">
                  <label className="block text-sm font-medium text-white">First Name</label>
                  <input
                    className="w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white mt-1"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 md:pl-3">
                  <label className="block text-sm font-medium text-white">Last Name</label>
                  <input
                    className="w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white mt-1"
                    id="grid-last-name"
                    type="text"
                    placeholder="Smith"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-white">Email Address</label>
                <input
                  className="w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white mt-1"
                  id="grid-email-address"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-white">Message</label>
                <textarea
                  className="w-full h-40 bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white mt-1"
                  id="grid-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="lg:text-left text-center">
                <button style={{ backgroundColor: '#b67D43' }} className="w-full rounded-lg px-8 py-3" onClick={sendEmail}>
                  <span className="font-bold text-black">Enquire Now!</span>
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}
