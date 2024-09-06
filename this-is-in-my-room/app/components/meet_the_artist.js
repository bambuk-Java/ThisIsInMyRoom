import React from 'react'
import Image from 'next/image'

const Meet_the_artist = () => {
  return (
    <div className=" w-full h-full pt-[20vh] bg-cover bg-center" style={{ backgroundImage: 'url(/white-paper-texture.jpg)' }}>
        <div className='pl-[16.6666vh] w-[5/6] flex justify-left flex-row relative'>
            <div>
                <h1 className='text-7xl text-[#9a9d9a]'>MEET THE</h1>
                <h1 className='text-7xl pl-[25vh]'>ARTIST</h1>
            </div>
            <div className="w-[15vh] px-[15vh] pt-[4vh]">
                <hr className="border-t-4 border-gray-500 w-[25vh] mx-0" />
            </div>
            <div className='pl-[30vh] pt-[2vh]'>
                <p className='text-2xl' style={{fontFamily: 'madera_reg'}}>
                    To create AI-generated <br /> art,
                    artists use AI as a <br /> creative
                    tool and work <br/> with algorithms.
                </p>
            </div>
        </div>
        <div className='w-5/6 flex justify-left py-[5vh] pl-[41.66666vh]'>
            <div className='relative flex items-center'>
                <div className='relative flex items-end '>
                    <p 
                        style={{fontFamily:'madera_reg'}}
                        className=''
                    >
                    Color AI</p>
                    <hr className='border-t-2 pb-[1.5vh] border-gray-500 w-[5vh] mx-[2vh]'/>
                </div>
                <div className='relative flex items-end '>
                    <p 
                        style={{fontFamily:'madera_reg'}}
                        className=''
                    >
                    Shape AI</p>
                    <hr className='border-t-2 pb-[1.5vh] border-gray-500 w-[5vh] mx-[2vh]'/>
                </div>
                <div className='relative flex items-end '>
                    <p 
                        style={{fontFamily:'madera_reg'}}
                        className=''
                    >
                    details AI</p>
                    <hr className='border-t-2 pb-[1.5vh] border-gray-500 w-[5vh] mx-[2vh]'/>
                </div>
                <div className='relative flex items-end '>
                    <p 
                        style={{fontFamily:'madera_reg'}}
                        className=''
                    >
                    AI Number 7</p>
                </div>
            </div>
        </div>
        <div className='pl-[16.66666vh] w-[5/6] flex justify-left flex-row relative'>
            <div>
                {/**next-button */}
                <div>
                    <button>
                        <Image
                            src='/arrowbtn.svg'
                            alt='artist'
                            width={110}
                            height={110}
                        />
                    </button>
                </div>
                {/**before-button */}
                <div className='pt-[5vh]'>
                    <button>
                        <Image
                            src='/arrowbtn.svg'
                            alt='artist'
                            width={110}
                            height={110}
                            className='transform rotate-180'
                        />
                    </button>
                </div>
                {/** circles*/}
                <div className='pt-[38vh]'>
                    <div className='py-[1vh]'>
                        <Image
                            src='/halfCircle.svg'
                            alt='circle'
                            width={80}
                            height={80}
                            className='transform rotate-180'
                        />
                    </div>
                    <div>
                        <Image
                            src='/halfCircle.svg'
                            alt='circle'
                            width={80}
                            height={80}
                            className='transform rotate-180'
                        />
                    </div>
                </div>
            </div>
            <div >
                <div className='px-[7vh]'>
                    <Image
                        src='/generatedImg.png'
                        alt='artist'
                        width={800}
                        height={700}
                    />
                    <div className='flex justify-left flex-row relative py-[1vh]'>
                        <p >"Prompt to generate this Image"</p>
                        <p className='pl-[50vh]'> month Year</p>
                    </div>
                </div>
            </div>

        </div>
            <div className=" py-[10vh] relative flex items-center justify-center w-5/6 mx-auto ">
                <span className="h-1 w-1 rounded-full bg-gray-500"/>
                <hr className="border-t border-gray-500 flex-grow mx-0"/>
                <span className="h-1 w-1 rounded-full bg-gray-500"/>
            </div>
    </div>
  )
}

export default Meet_the_artist