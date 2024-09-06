import React from 'react'
import Header from "./header";
import Image from 'next/image';
import gemini from '/public/gemini.svg';
import arrow from '/public/arrow.svg';
import Section2 from './section2';
const Hero = () => {
  return (
    <div style={{ 
        backgroundImage: 'url(/background-smooth-texture.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
      }}>
    <Header />
        <div className=" pl-[16.666vh] pt-[9vh]">
            <div className='items-center flex'>
                <h1 className='text-8xl'>ARE AI</h1>
                <p className='px-[5vh]'>What it will mean to be moved <br /> by an AI's mindless creativity.</p>
                <button className="bg-[#2f2f30] text-white px-20 p-5 rounded-full">
                    <p>FIND OUT</p>
                </button>
            </div>
            <h1 className='text-8xl text-[#a2a5a2]'>ART PROGRAMS</h1>
            <div className='flex items-end'>
              <div style={{ width: '6rem', height: '6rem', position: 'relative' }}>
                <Image
                  src={gemini}
                  alt="Gemini"
                  layout="fill" 
                  objectFit="contain"
                  className="pr-5"
                />
              </div>  
              <h1 className='text-8xl'>RIPPING</h1>
              <div className='px-[15vh] flex items-end' style={{  height: '6rem', position: 'relative', zIndex: 0 }}>
                  <Image
                      src={arrow}
                      alt="arrow"
                      layout="fill"
                      className="z-30"
                      style={{ position: 'absolute' }}
                  />
                  <div 
                      className="bg-[#969a97] w-[5rem]  h-[5rem] z-20 rounded-full pl-[10vh]" 
                      style={{ position: 'absolute', top: '50%', left: '80%', transform: 'translate(-50%, -50%)' }} 
                  />
              </div>

              <h1 className='text-8xl pl-[10vh]'>OFF</h1>
            </div>
            <h1 className='text-8xl'>HUMAN ARTISTS?</h1>
        </div>
        <div className='py-[10vh] ' >
        <div className="relative flex items-center justify-center w-5/6 mx-auto ">
            <span className="h-1 w-1 rounded-full bg-gray-500"/>
            <hr className="border-t border-gray-500 flex-grow mx-0"/>
            <span className="h-1 w-1 rounded-full bg-gray-500"/>
        </div>
        <div className='relative flex items-center justify-center w-5/6 mx-auto '>
          <p className='px-10'>fdsf</p>
          <p  className='px-10'>fdsf</p>
          <p  className='px-10'>fdsf</p>
        </div>
        <div className="relative flex items-center justify-center w-5/6 mx-auto ">
            <span className="h-1 w-1 rounded-full bg-gray-500"/>
            <hr className="border-t border-gray-500 flex-grow mx-0"/>
            <span className="h-1 w-1 rounded-full bg-gray-500"/>
        </div>
        </div>
      <Section2 />
    </div>
    
  )
}

export default Hero