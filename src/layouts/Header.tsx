import { Logo } from '@/assets/navbar';
import { experienceArr, navArr } from '@/utils/navbar';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className='relative '>
      <section className='w-full h-20 flex items-center justify-between px-20 shadow-md bg-white z-50'>
        <img src={Logo.src} className='w-16 h-16' alt="Logo" />

        <div className='flex gap-6 items-center'>
          {navArr.map((item) => (
            <div className='relative group' key={item.id}>
              <Link href={item.url} className='uppercase text-sm font-semibold hover:underline'>
                {item.title}
              </Link>

              {/* Submenu */}
              {item.submenu && (
                <div className='absolute left-0 top-full mt-2 w-56 bg-gray-800 shadow-md  opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50'>
                  {item.submenu.map((sub, index) => (
                    <Link
                      key={index}
                      href={`${item.url}${sub.path}`}
                      className='block px-4 py-4 text-sm text-white  hover:text-green-500'
                    >
                      {sub.name}<hr className='w-full text-gray-950'/>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='w-44 h-16 pt-2 bg-green-600 text-center  hover:bg-green-800 rounded'>
          {
            experienceArr.map((item:any) => (
              <div key={item.id.toString()} className='flex items-center justify-center gap-2'>
              <p className='text-white w-40'>{item.title}</p>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
}
