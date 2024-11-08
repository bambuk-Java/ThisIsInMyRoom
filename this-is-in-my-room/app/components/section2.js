"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import image from '/public/forest.jpg';

const Section2 = () => {

    return (
        <div className="pt-[10vh] bg-cover bg-center" style={{ backgroundImage: 'url(/background-smooth-texture.jpg)' }}>
            <div className="relative w-full h-[60vh] flex justify-center items-center">
                <div className="w-[178vh] max-h-full flex justify-center items-center">
                    <Image 
                        src={image}
                        alt="beautiful forest"
                        layout="intrinsic"
                        width={3999} 
                        height={1755} 
                        objectFit="contain"
                    />  
                </div>
            </div> 
            <div className='pt-[20vh] pl-[17.66666vh]'>
                <div className="w-[15vh]">
                    <hr className="border-t-2 border-gray-500 flex-grow mx-0"/>
                </div>
                <div className="flex space-x-6"> 
                    <div>
                        <h4 className='text-2xl pt-6'> AI Number 7</h4>
                        <p style={{fontFamily: 'madera_bold'}} className='text-[#656564]'>Artwork 230 </p>
                    </div>
                    <div>
                        <p style={{fontFamily: 'madera_bold'}} className='text-2xl pl-[50vh]'>
                            To create AI-generated art, artists use AI as a <br/> creative 
                            tool and work with algorithms to set <br /> up specific rules 
                            through which machines <br /> analyze thousands.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-around py-[20vh]">
                    <div className="flex flex-col ">
                        <div className="w-10 h-10 border-t-4 border-r-4 rounded border-gray-500 transform rotate-[135deg]"></div>
                        <div className="w-10 h-10 border-t-4 border-r-4 rounded border-gray-500 transform rotate-[135deg]"></div>
                        <div className="w-10 h-10 border-t-4 border-r-4 rounded border-gray-500 transform rotate-[135deg]"></div>
                    </div>
                    <div>
                        <h1 className='text-8xl flex flex-row'>120K</h1>
                        <p>ART COLLECTIONS</p>
                    </div>
                    <div>
                        <h1 className='text-8xl'>140+</h1>
                        <p>AI PROGRAMMS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;
