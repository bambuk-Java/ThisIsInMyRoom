import React from 'react'


const Meet_the_artist = () => {
  return (
    <div className=" w-full h-[100vh] pt-[20vh] bg-cover bg-center" style={{ backgroundImage: 'url(/white-paper-texture.jpg)' }}>
    <div className='pl-[16.6666vh] w-[5/6] flex justify-left flex-row relative'>
        <div>
            <h1 className='text-7xl text-[#9a9d9a]'>MEET THE</h1>
            <h1 className='text-7xl pl-[25vh]'>ARTIST</h1>
        </div>
        <div className="w-[15vh] px-[15vh] pt-[4vh]">
            <hr className="border-t-4  border-gray-500 w-[25vh] mx-0" />
        </div>
        <div className='pl-[30vh] pt-[2vh]'>
            <p className='text-2xl' style={{fontFamily: 'madera_reg'}}>
                To create AI-generated <br /> art,
                artists use AI as a <br /> creative
                tool and work <br/> with algorithms.
            </p>
        </div>
    </div>
    <div className='w-5/6 flex justify-left pl-[31.66666vh]'>
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

    </div>
  )
}

export default Meet_the_artist