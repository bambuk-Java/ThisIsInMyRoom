import React from 'react'
import Image from 'next/image';
import logo from '/public/logo.svg'; 

const Header = () => {
  return (
    <div>
        <div className="w-screen flex justify-between items-center pt-[4vh]">
            <div className='flex items-center pl-[25vh]'>
                <p className='pr-6 text-xs'>GENERATE</p>
                <p className='text-xs'>GALLERY</p>
            </div>
            <div className='flex justify-center items-center'>
                <Image 
                    src={logo}
                    alt="Logo" 
                    width={50}
                    height={50}
                />
            </div>
            <div className='flex items-center pr-[25vh]'>
                <p className='pr-6 text-xs'>CONTACT</p>
                <p className='text-xs'>JOIN</p>
            </div>
        </div>
        <div className="relative flex items-center justify-center w-5/6 mx-auto">
            <span className="h-1 w-1 rounded-full bg-gray-500"/>
            <hr className="border-t border-gray-500 flex-grow mx-0"/>
            <span className="h-1 w-1 rounded-full bg-gray-500"/>
        </div>

    </div>
    
  )
}

export default Header