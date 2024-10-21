import React from 'react'
import Image from 'next/image'
const Make_your_own_art = () => {
  return (
    <div className=' w-full h-full pt-[10vh] pb-[30vh] bg-cover bg-center' style={{ backgroundImage: 'url(/white-paper-texture.jpg)'}}>
      <div className='relative flex items-center justify-center'>
        {/** flowers */}
        <div className='absolute pl-[90vh] pt-[105vh]'>
          <Image
            src="/bouquet.png"
            alt="bouqet"
            width={500}
            height={490}
          />
          <p className='pt-[2vh]'>A new AI system that can create realistic Images and <br />
            art from a description in natural language and <br />
            change it.</p>
        </div>
        <div className='w-5/6 flex justify-left flex-row relative'>
          {/** title*/}
          <div className=""> 
            <h1 className='text-7xl text-[#9a9d9a]'>MAKE YOUR </h1> <br/>
            <h1 className='text-7xl' >OWN ART</h1>
          </div>
          {/** line*/}
          <div className="w-[15vh] px-[15vh] pt-[4vh]">
            <hr className="border-t-4 border-gray-500 w-[15vh] mx-0" />
          </div>
          {/** Triangles */}
          <div className='pt-[4vh] flex pl-[32vh] flex-row'>
            <div className='pr-[1vh]'>
            <Image
              src="/triangle.svg"
              alt="triangle"
              width={50}
              height={50}
            />
            </div>
            <div>
            <Image
              src="/triangle.svg"
              alt="triangle"
              width={50}
              height={50}
            />
            </div>
          </div>
        </div>
      </div>
      {/** text */}
      <div className='relative flex items-center justify-center'>
        <div className='w-5/6 s justify-left '>
          <div className='pt-[10vh] pb-[7vh]'>
            <p>
              To create AI generated art, artists use Ai as <br />
              a creative tool and work with algorithms.<br />
              Make your incredible own art so easy. Just in <br />
              3 easy steps.
            </p>
          </div>
            <div>
              <div className='flex flex-row py-[1vh]'>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <h3 className=''>DESCRIBE YOUR ART</h3>
              </div>
              <div className='flex flex-row py-[1vh]'>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <h3 className=''>ADD SAMPLE IMAGE</h3>
              </div>
              <div className='flex flex-row py-[1vh]'>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <h3 className=''>ADD MORE DETAILS</h3>
              </div>
            <div className='flex flex-row py-[1vh]'>
              <Image
                src="/logo.svg"
                alt="logo"
                width={50}
                height={50}
              />
              <h3 className=''>SAFE & SHARE WORK</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Make_your_own_art