'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Make_your_own_art = () => {
  const images = [
    { src: "/kameras/D200_1.png", prompt: "NIKON D200" },
    { src: "/kameras/pana_5.png", prompt: "PANASONIC D SNAP" },
    { src: "/kameras/oppo_4.png", prompt: "OPPO RENO 5G 10X" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className='w-full h-full pt-[10vh] pb-[30vh] bg-cover bg-center cursor-none' style={{ backgroundImage: 'url(/white-paper-texture.jpg)' }}>
      <div className='relative flex items-center justify-center'>
        {/** Images */}
        <div className='absolute pl-[90vh] pt-[105vh]'>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
              animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
              exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].prompt}
                width={500}
                height={490}
              />
            </motion.div>
          </AnimatePresence>
          <p className='pt-[2vh]'>
            {images[activeIndex].prompt}
          </p>
        </div>
        <div className='w-5/6 flex justify-left flex-row relative'>
          {/** title*/}
          <div className="">
            <h1 className='text-7xl text-[#9a9d9a]'>MEINE </h1> <br />
            <h1 className='text-7xl' >GERÄTE</h1>
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
      {/** text & buttons */}
      <div className='relative flex items-center justify-center'>
        <div className='w-5/6 justify-left '>
          {/** text */}
          <div className='pt-[10vh] pb-[7vh]'>
            <p>
              "Meine Werkzeuge sind erweiterungen <br />
              meiner Selbst.<br />
              Ich bin eins mit der Kamera, <br />
              die Kamera ist eins mit mir."
            </p>
          </div>
          {/** buttons */}
          <div>
            {images.map((image, index) => (
              <div key={index} className='flex flex-row py-[1vh]'>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <button
                  className={`cursor-pointer text-[5vh] font-benzin ${activeIndex === index ? 'font-bold' : ''}`}
                  onClick={() => handleButtonClick(index)}
                >
                  {image.prompt}
                </button >
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Make_your_own_art;
