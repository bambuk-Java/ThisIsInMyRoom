import React from 'react'

const we_know_what_you_think = () => {
  return (
    <div className=' w-full h-full pt-[10vh] pb-[30vh] bg-cover bg-center' style={{ backgroundImage: 'url(/background-smooth-texture.jpg)'}}>
        <div className='relative'>
            <div className=' relative flex flex-row'>
            {/** line*/}
            <div className="w-[15vh] px-[15vh] pt-[6vh]">
                <hr className="border-t-4 border-gray-500 w-[25vh] mx-0" />
            </div>
            {/** Title */}
            <div className='pl-[15vh]'>
                <h1 className='text-7xl'>WE KNOW</h1>
                <h1 className='text-7xl text-[#9a9d9a]'>WHAT YOU THINK</h1>
            </div>
            </div>
            {/** Questions */}
            <div>
                <div className='pt-[10vh] pb-[5vh]'>
                    <div className='relative flex flex-row'>
                        <h2 className='text-7xl pl-[20vh] pr-[16vh]'>+</h2>
                        <h2 className='text-4xl'>What is AI (Artificial intelligence)?</h2>
                    </div>
                    <p className='pl-[44vh]'>The theory and development of computer systems able to perform task that <br />
                     normally require human intelligence, such as visual perception.
                    </p>
                </div>
                <div className='pt-[10vh] pb-[5vh]'>
                    <div className='relative flex flex-row'>
                        <h2 className='text-7xl pl-[20vh] pr-[16vh]'>+</h2>
                        <h2 className='text-4xl'>How can AI draw something?</h2>
                    </div>
                    <p className='pl-[44vh]'>to create AI-generated art, artists use AI as a creative tool and work with <br />
                     algorithms to set up specific rules through which machines analyze.
                    </p>
                </div>
                <div className='pt-[10vh] pb-[5vh]'>
                    <div className='relative flex flex-row'>
                        <h2 className='text-7xl pl-[20vh] pr-[16vh]'>+</h2>
                        <h2 className='text-4xl'>Can AI replace human artists?</h2>
                    </div>
                    <p className='pl-[44vh]'>AI art can never replace human artists as they will always be required to choose <br />
                     the subject and its surroundings for producing the desired results.
                    </p>
                </div>
            </div>
        </div>
    </div>
)
}

export default we_know_what_you_think