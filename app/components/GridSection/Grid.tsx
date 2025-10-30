'use client'
import React from 'react'
import Image from 'next/image'

type Props = {}

const gridItems = [
  { id: 1, name: 'LOGOIPSUM1', logo: '/logos/logo2.svg', span: 'col-span-2 row-span-2' },
  { id: 2, name: 'LOGOIPSUM2', logo: '/logos/logo3.svg', span: 'col-span-4 row-span-1' },
  { id: 3, name: 'LOGOIPSUM3', logo: '/logos/logo1.svg', span: 'col-span-2 row-span-2' },
  { id: 4, name: 'LOGOIPSUM4', logo: '/logos/logo5.svg', span: 'col-span-3 row-span-2' },
  { id: 5, name: 'LOGOIPSUM5', logo: '/logos/logo4.svg', span: 'col-span-1 row-span-2' },
]

const Grid = (props: Props) => {
  return (
    <section className='px-6 sm:px-12 md:px-24 lg:px-40 xl:px-60 py-12 md:py-16 lg:py-20'>
      <div className='grid grid-rows-1 md:grid-rows-2 gap-4 h-auto md:h-[600px]'>
        {/* Top Row - 2 items */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4'>
          {/* Item 1 - Left */}
          <div className='col-span-1 sm:col-span-1 md:col-span-2 bg-[#0E0E0E] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:bg-[#232323] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer min-h-[180px]'>
            <div className='flex items-center justify-center flex-1 transition-transform duration-300 group-hover:scale-110'>
              <Image
                src={gridItems[0].logo}
                alt={gridItems[0].name}
                width={120}
                height={120}
                className='object-contain filter brightness-0 invert max-h-[80px] sm:max-h-[100px] md:max-h-[120px]'
              />
            </div>
            <p className='text-[#9D9D9D] text-xs font-medium font-poppins transition-all duration-300 group-hover:text-[#FFFFFF] group-hover:-translate-y-1 tracking-wider'>
              {gridItems[0].name}
            </p>
          </div>

          {/* Item 2 - Right */}
          <div className='col-span-1 sm:col-span-1 md:col-span-3 bg-[#0E0E0E] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:bg-[#232323] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer min-h-[180px]'>
            <div className='flex items-center justify-center flex-1 transition-transform duration-300 group-hover:scale-110'>
              <Image
                src={gridItems[1].logo}
                alt={gridItems[1].name}
                width={200}
                height={200}
                className='object-contain filter brightness-0 invert max-h-[100px] sm:max-h-[120px] md:max-h-[150px]'
              />
            </div>
            <p className='text-[#9D9D9D] text-xs font-medium font-poppins transition-all duration-300 group-hover:text-[#FFFFFF] group-hover:-translate-y-1 tracking-wider'>
              {gridItems[1].name}
            </p>
          </div>
        </div>

        {/* Bottom Row - 3 items nested grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4'>
          {/* Item 3 - Left */}
          <div className='col-span-1 sm:col-span-1 md:col-span-2 bg-[#0E0E0E] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:bg-[#232323] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer min-h-[180px]'>
            <div className='flex items-center justify-center flex-1 transition-transform duration-300 group-hover:scale-110'>
              <Image
                src={gridItems[2].logo}
                alt={gridItems[2].name}
                width={120}
                height={120}
                className='object-contain filter brightness-0 invert max-h-[80px] sm:max-h-[100px] md:max-h-[120px]'
              />
            </div>
            <p className='text-[#9D9D9D] text-xs font-medium font-poppins transition-all duration-300 group-hover:text-[#FFFFFF] group-hover:-translate-y-1 tracking-wider'>
              {gridItems[2].name}
            </p>
          </div>

          {/* Item 4 - Middle */}
          <div className='col-span-1 sm:col-span-1 md:col-span-3 bg-[#0E0E0E] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:bg-[#232323] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer min-h-[180px]'>
            <div className='flex items-center justify-center flex-1 transition-transform duration-300 group-hover:scale-110'>
              <Image
                src={gridItems[3].logo}
                alt={gridItems[3].name}
                width={180}
                height={180}
                className='object-contain filter brightness-0 invert max-h-[90px] sm:max-h-[110px] md:max-h-[120px]'
              />
            </div>
            <p className='text-[#9D9D9D] text-xs font-medium font-poppins transition-all duration-300 group-hover:text-[#FFFFFF] group-hover:-translate-y-1 tracking-wider'>
              {gridItems[3].name}
            </p>
          </div>

          {/* Item 5 - Right (Circular) */}
          <div className='col-span-1 sm:col-span-2 md:col-span-1 bg-[#0E0E0E] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:bg-[#232323] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer min-h-[180px]'>
            <div className='flex items-center justify-center flex-1 transition-transform duration-300 group-hover:scale-110'>
              <Image
                src={gridItems[4].logo}
                alt={gridItems[4].name}
                width={100}
                height={100}
                className='object-contain filter brightness-0 invert max-h-[70px] sm:max-h-[85px] md:max-h-[100px]'
              />
            </div>
            <p className='text-[#9D9D9D] text-xs font-medium font-poppins transition-all duration-300 group-hover:text-[#FFFFFF] group-hover:-translate-y-1 tracking-wider'>
              {gridItems[4].name}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grid