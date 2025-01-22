import React from 'react';
import Image from 'next/image';
import gemini from '/public/gemini.svg';
import arrowarrow from '/public/arrowarrow.svg';
import circle from '/public/circle.svg';
import Section2 from './section2';

const Hero = () => {
  return (
    <div
      className="w-screen min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: 'url(/background-smooth-texture.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Hauptinhalt */}
      <div className="pl-[16.666vh] pt-[2vh] flex-grow flex flex-col justify-center">
        <div className="items-center flex">
          <h1 className="text-8xl">BILDER</h1>
          <p className="px-[5vh]">
            Was es bedeutet, Erinnerungen <br /> mit der Kamera einzufangen.
          </p>
          <button className="bg-[#2f2f30] text-white px-20 p-5 rounded-full">
            <p>Reflexion</p>
          </button>
        </div>
        <h1 className="text-8xl text-[#a2a5a2]">ERLEBEN SIE</h1>
        <div className="flex items-end">
          <div style={{ width: '6rem', height: '6rem', position: 'relative' }}>
            <Image
              src={gemini}
              alt="Gemini"
              layout="fill"
              objectFit="contain"
              className="pr-5"
            />
          </div>
          <h1 className="text-8xl">LICHT</h1>
          <div
            className="px-[15vh] flex items-end relative"
            style={{ height: '6rem' }}
          >
            <Image
              src={circle}
              alt="arrow"
              layout="fill"
              className="z-30 absolute"
            />
            <Image
              src={arrowarrow}
              alt="arrow"
              layout="fill"
              className="z-30 absolute"
            />
            <div
              className="bg-[#969a97] w-[5rem] h-[5rem] z-20 rounded-full"
              style={{
                position: 'absolute',
                top: '50%',
                left: '80%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
          <h1 className="text-8xl pl-[10vh]">UND</h1>
        </div>
        <h1 className="text-8xl">LANDSCHAFTEN</h1>
      </div>

      {/* Unterer Inhalt */}
      <div className="py-[10vh]">
        <div className="relative flex items-center justify-center w-5/6 mx-auto">
          <span className="h-1 w-1 rounded-full bg-gray-500" />
          <hr className="border-t border-gray-500 flex-grow mx-0" />
          <span className="h-1 w-1 rounded-full bg-gray-500" />
        </div>
        <div className="relative flex items-center justify-center w-5/6 mx-auto">
          <p className="px-10">BERG</p>
          <p className="px-10">MEER</p>
          <p className="px-10">STADT</p>
        </div>
        <div className="relative flex items-center justify-center w-5/6 mx-auto">
          <span className="h-1 w-1 rounded-full bg-gray-500" />
          <hr className="border-t border-gray-500 flex-grow mx-0" />
          <span className="h-1 w-1 rounded-full bg-gray-500" />
        </div>
      </div>

      <Section2 />
    </div>
  );
};

export default Hero;
