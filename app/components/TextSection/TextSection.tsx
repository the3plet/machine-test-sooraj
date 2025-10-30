'use client'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

type Props = {}



const TextSection = (props: Props) => {
    const textRef = useRef<HTMLParagraphElement>(null)
    
    useGSAP(()=>{
        if (!textRef.current) return
        
        // Split text into words
        const text = textRef.current.innerText
        const words = text.split(' ')
        
        // Clear the original text and create spans for each word
        textRef.current.innerHTML = ''
        words.forEach((word, index) => {
          const span = document.createElement('span')
          span.innerHTML = word + (index < words.length - 1 ? '&nbsp;' : '')
          span.style.display = 'inline-block'
          span.style.opacity = '0'
          span.style.color = '#6B7280' // gray-500 color for untyped words
          textRef.current?.appendChild(span)
        })
        
        // Animate each word with stagger
        gsap.fromTo(
          textRef.current.children,
          {
            opacity: 0,
            x: -20,
            color: '#6B7280'
          },
          {
            opacity: 1,
            x: 0,
            color: '#FFFFFF',
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play reverse play reverse',
              markers: false
            }
          }
        )
    }, [])
    
  return (
    <div className='px-6 sm:px-12 md:px-24 lg:px-40 xl:px-60 pt-28'>
        <p 
          ref={textRef}
          className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-[3rem] font-poppins font-medium text-[#FFFFFF] text-left'
        >
          We build cutting-edge AI solutions that help businesses automate processes, gain insights, and deliver smarter experiences. Whether you're looking to streamline operations, personalize customer journeys, or leverage predictive analytics, our AI-powered tools are designed to drive growth and innovation.
        </p>
    </div>
  )
}

export default TextSection