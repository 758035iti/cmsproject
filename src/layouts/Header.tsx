import { Logo } from '@/assets/navbar'
import { navArr } from '@/utils/navbar'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='relative '>
      <section className='w-full h-20 flex items-center justify-between px-10 shadow-black shadow-md'>
        <img src={Logo.src} className=' w-16 h-16'/>
        <div className=''>
          {
            navArr.map((item) => (
              <div className='inline-block mx-2' key={item.id}>
                <Link href={'/'} className='uppercase text-sm font-semibold hover:underline '>{item.title}</Link>
              </div>
            ))
          }
        </div>
        <button className=' w-32 text-center h-10 bg-green-700 text-white hover:bg-green-800'>Get a Quote?</button>
      </section>
    </div>
  )
}
