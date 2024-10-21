import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    
    <div className=' w-full h-full pt-[10vh] pb-[30vh] bg-cover bg-center' style={{ backgroundColor: 'black'}}>
        <div className=' flex items-center justify-center'>
            {/**title */}
            <div className='relative flex flex-row'>
                <Image
                    src="/logo-white.svg"
                    alt="logo"
                    width={150}
                    height={150}
                />
                <div >
                    <h1 className='text-white text-7xl'>CREATE & SHARE</h1>
                    <h1 className='text-white text-7xl'>YOUR WORK NOW</h1>
                </div>
            </div>
            {/** Line */}
        </div>
        <div className=" py-[10vh] relative flex items-center justify-center w-5/6 mx-auto ">
            <span className="h-1 w-1 rounded-full bg-white"/>
            <hr className="border-t border-white flex-grow mx-0"/>
            <span className="h-1 w-1 rounded-full bg-white"/>
        </div>
    </div>
  )
}

export default Footer