import React from 'react'
import Header from "./header";

const Hero = () => {
  return (
    <div style={{ 
        backgroundImage: 'url(/background-smooth-texture.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        height: '100vh',
        backgroundRepeat: 'no-repeat' 
      }}>
    <Header />
        <div className=" pl-[16.666vh] pt-[9vh]">
            <div className='items-center flex'>
                <h1 className='text-7xl'>ARE AI</h1>
                <p className='px-[5vh]'>What it will mean to be moved <br /> by an AI's mindless creativity.</p>
                <button className="bg-[#2f2f30] text-white px-20 p-5 rounded-full">
                    <p>FIND OUT</p>
                </button>
            </div>
            <h1 className='text-7xl'>ART PROGRAMS</h1>
            <h1 className='text-7xl'>RIPPING OFF HUMAN ARTISTS?</h1>
        </div>
    </div>
    
  )
}

export default Hero