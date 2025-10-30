import React from 'react'
import ConcentricCircle from './ConcentricCircle'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='h-screen w-screen'>
      <div className='flex flex-col h-full justify-center items-center text-[#FFFFFF] gap-5'>

        <h1 className='text-7xl font-semibold font-poppins text-center'>Smarter Solution <br></br> Powered by AI</h1>
        <p className='text-lg font-poppins text-[#9D9D9D] text-center'>Streamline operations, reduce costs, and scale effortlessly with <br></br> our AI-driven tools.</p>
       <Button variant='default' className='text-lg h-16 w-56 font-medium font-poppins py-5 px-7 rounded-full bg-gradient-to-r from-[#6E00CF] to-[#32005F] hover:from-[#5C00B0] hover:to-[#28004F]'>Start A Project <ArrowRight size={40}/></Button>
      </div>


        {/* <ConcentricCircle/> */}
        
    </div>
  )
}

export default Hero