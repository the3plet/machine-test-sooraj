'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

type Props = {}

const logos = [
  { id: 1, src: '/logos/marquee-logo1.png', name: 'Logoipsum' },
  { id: 2, src: '/logos/marquee-logo2.png', name: 'Logoipsum' },
  { id: 3, src: '/logos/marquee-logo3.png', name: 'Logoipsum' },
]

const LogoScroll = (props: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  useGSAP(() => {
    if (!scrollRef.current) return

    const scrollContainer = scrollRef.current
    const scrollContent = scrollContainer.querySelector('.scroll-content')
    
    if (!scrollContent) return

    // Calculate the width of one set of logos
    const scrollWidth = scrollContent.scrollWidth / 2

    // Create infinite scroll animation
    animationRef.current = gsap.to(scrollContent, {
      x: -scrollWidth,
      duration: 20,
      ease: 'none',
      repeat: -1,
    })
  }, [])

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause()
    }
  }

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.resume()
    }
  }

  return (
    <section className='py-4 sm:py-5 md:py-6 bg-[#1A1A1A] overflow-hidden'>
      <div 
        ref={scrollRef}
        className='relative overflow-hidden'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='scroll-content flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos,...logos,...logos,...logos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className='flex items-center gap-3 flex-shrink-0'
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={80}
                height={80}
                className='object-contain w-20 h-8 sm:w-24 sm:h-9 md:w-28 md:h-10 lg:w-30 lg:h-10'
              />
              {/* <span className='text-white text-sm font-medium font-poppins whitespace-nowrap'>
                {logo.name}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoScroll