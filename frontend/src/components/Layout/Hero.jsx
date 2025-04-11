import React from 'react'
import { Link } from "react-router-dom"
import heroImg from "../../assets/Hero_SDSJ.png"

const Hero = () => {
  return (
    <section className='relative'>
      <div>
      <img src={heroImg} alt="SDSJ" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' />
      </div>
        
    </section>
  )
}

export default Hero