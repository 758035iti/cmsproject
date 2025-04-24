import React from 'react'
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";

export default function SubHeader() {
  return (
    <div>
      <section className='bg-gray-800 w-full h-12 flex items-center justify-between px-32'>
        <div className='flex items-center text-white gap-8'>
            <div className='flex items-center text-white gap-3'>
                <FiPhone className='text-green-500'/>
                <p className='text-sm'>Call : +91 7848923525</p>
            </div>
            <div className='flex items-center text-white gap-3'>
                <FiMail className='text-green-500'/>
                <p className='text-sm'>Email : itishrees977@gmail.com</p>
            </div>
        </div>
        <div className='flex items-center text-white gap-3'>
            <FaFacebookF className='text-white text-md mx-2'/>
            <FaTwitter className='text-white text-md mx-2'/>
            <FaLinkedinIn className='text-white text-md mx-2'/>
            <FaInstagram className='text-white text-md mx-2'/>
            <FaPinterestP className='text-white text-md mx-2'/>
        </div>
      </section>
      <div className='bg-green-600 w-full h-1 '>

      </div>
    </div>
  )
}
