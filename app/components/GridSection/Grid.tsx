'use client'
import React from 'react'
import Image from 'next/image'

type Props = {}

const gridItems = [
  { id: 1, name: 'LOGOIPSUM', logo: '/logos/logo2.svg' }, // Top left - stripes
  { id: 2, name: 'LOGOIPSUM', logo: '/logos/logo3.svg' }, // Top right - large
  { id: 3, name: 'LOGOIPSUM', logo: '/logos/logo1.svg' }, // Bottom left
  { id: 4, name: 'LOGOIPSUM', logo: '/logos/logo5.svg' }, // Bottom middle
  { id: 5, name: 'LOGOIPSUM', logo: '/logos/logo4.svg' }, // Bottom right - circular
]

const Grid = (props: Props) => {
  return (
    <section className='px-6 sm:px-12 md:px-24 lg:px-40 xl:px-60 py-12 md:py-16 lg:py-20'>
      {/* Mobile: Single column stack */}
      <div className='grid grid-cols-1 md:hidden gap-4'>
        {gridItems.map((item, index) => (
          <div key={item.id} className='bg-[#0E0E0E] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:bg-[#232323] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer min-h-[180px]'>
            <div className='flex items-center justify-center flex-1 transition-transform duration-300 group-hover:scale-110'>
              <Image
                src={item.logo}
                alt={item.name}
                width={120}
                height={120}
                className='object-contain filter brightness-0 invert max-h-[100px]'
              />
            </div>
            <p className='text-[#9D9D9D] text-xs font-medium font-poppins transition-all duration-300 group-hover:text-[#FFFFFF] group-hover:-translate-y-1 tracking-wider'>
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: 6 columns x 5 rows grid layout */}
      <div className='hidden md:grid md:grid-cols-6 md:grid-rows-5 gap-1 h-[600px]'>
        {/* Card 1 - Top Left (1 col, 4 rows) */}
        <div className='col-span-2 row-span-3 bg-[#0E0E0E] rounded-2xl p-6 flex flex-col items-center justify-center gap-5 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:bg-[#232323] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer'>
          <div className='flex items-center justify-center  transition-transform duration-300 group-hover:scale-110'>
            <Image
              src={gridItems[0].logo}
              alt={gridItems[0].name}
              width={120}
              height={100}
              className='object-contain filter brightness-0 invert max-h-[120px]'
            />
          </div>
          <p className='text-[#9D9D9D] text-xs font-medium font-poppins transition-all duration-300 group-hover:text-[#FFFFFF] group-hover:-translate-y-1 tracking-wider'>
            {gridItems[0].name}
          </p>
        </div>

        {/* Card 2 - Top Right (5 cols, 2 rows) */}
        <div className='col-span-4 row-span-2 bg-[#0E0E0E] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:bg-[#232323] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer'>
          <div className='flex items-center justify-center transition-transform duration-300 group-hover:scale-110'>
            <Image
              src={gridItems[1].logo}
              alt={gridItems[1].name}
              width={200}
              height={200}
              className='object-contain filter brightness-0 invert max-h-[120px]'
            />
          </div>
          <p className='text-[#9D9D9D] text-xs font-medium font-poppins transition-all duration-300 group-hover:text-[#FFFFFF] group-hover:-translate-y-1 tracking-wider'>
            {gridItems[1].name}
          </p>
        </div>

        {/* Card 4 - Middle Right (3 cols, 3 rows) */}
        <div className='col-span-2 row-span-3 bg-[#0E0E0E] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:bg-[#232323] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer'>
          <div className='flex items-center justify-center transition-transform duration-300 group-hover:scale-110'>
            <Image
              src={gridItems[3].logo}
              alt={gridItems[3].name}
              width={180}
              height={180}
              className='object-contain filter brightness-0 invert max-h-[120px]'
            />
          </div>
          <p className='text-[#9D9D9D] text-xs font-medium font-poppins transition-all duration-300 group-hover:text-[#FFFFFF] group-hover:-translate-y-1 tracking-wider'>
            {gridItems[3].name}
          </p>
        </div>

        {/* Card 5 - Bottom Right (2 cols, 3 rows) */}
        <div className='col-span-2 row-span-3 bg-[#0E0E0E] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:bg-[#232323] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer'>
          <div className='flex items-center justify-center transition-transform duration-300 group-hover:scale-110'>
            <Image
              src={gridItems[4].logo}
              alt={gridItems[4].name}
              width={100}
              height={100}
              className='object-contain  max-h-[100px]'
            />
          </div>
          <p className='text-[#9D9D9D] text-xs font-medium font-poppins transition-all duration-300 group-hover:text-[#FFFFFF] group-hover:-translate-y-1 tracking-wider'>
            {gridItems[4].name}
          </p>
        </div>

        {/* Card 3 - Bottom Left (1 col, 1 row) */}
        <div className='col-span-2 row-span-2 bg-[#0E0E0E] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:bg-[#232323] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer'>
          <div className='flex items-center justify-center flex-1 transition-transform duration-300 group-hover:scale-110'>
            <Image
              src={gridItems[2].logo}
              alt={gridItems[2].name}
              width={120}
              height={120}
              className='object-contain filter brightness-0 invert max-h-[80px]'
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Grid