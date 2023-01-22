import Link from 'next/link'
import Image from 'next/image'
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import {HiOutlineShoppingBag} from "react-icons/hi"
import React from 'react'
import {FiSettings} from "react-icons/fi"

const Sidebar = ({children}) => {
  return (
      <div className='flex'>
<div className='fixed w-20 h-screen p-4 bg-[#1E2022] border-r-[1px] flex flex-col justify-between'>

              <div className='flex flex-col items-center'>
                  <Link href={'/'}>
                      <div className='bg-[#C9D6DE] text-[#1E2022] p-3 rounded-lg inline-block font-bold'>
                          <RxSketchLogo size={20} />
                      </div>
                  </Link>
                  <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                  <Link href={'/'}>
                      <div className='bg-gray-100  hover:bg-gray-300 p-3 rounded-lg cursor-pointer my-4 inline-block font-bold'>
                          <RxDashboard size={20} />
                      </div>
                  </Link>

                  <Link href={'/Customers'}>
                      <div className='bg-gray-100  hover:bg-gray-300 p-3 rounded-lg cursor-pointer my-4 inline-block font-bold'>
                          <RxPerson size={20} />
                      </div>
                  </Link>

                  <Link href={'/OrdersPage'}>
                      <div className='bg-gray-100  hover:bg-gray-300 p-3 rounded-lg cursor-pointer my-4 inline-block font-bold'>
                          <HiOutlineShoppingBag size={20} />
                      </div>
                  </Link>

                  <Link href={'/'}>
                      <div className='bg-gray-100  hover:bg-gray-300 p-3 rounded-lg cursor-pointer my-4 inline-block font-bold'>
                          <FiSettings size={20} />
                      </div>
                  </Link>
              </div>
              <div></div>
          </div>
          
      
          <main className='ml-20 w-full'>{ children }</main>
      </div>
  )
}

export default Sidebar