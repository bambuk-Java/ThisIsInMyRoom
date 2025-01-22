"use client";

import React from 'react';
import AppleWatchDock from './appleWatch/page';
const Section2 = () => {

    return (
        <div className="pt-[10vh] bg-cover bg-center" style={{ backgroundImage: 'url(/background-smooth-texture.jpg)' }}>
            <div className="relative w-full h-[60vh] flex justify-center items-center">
                <div className="w-[178vh] max-h-full flex justify-center items-center">
                    <AppleWatchDock
                        layout="intrinsic"
                        width={200}
                        height={200}
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className='pt-[20vh] pl-[17.66666vh]'>
                <div className="w-[15vh]">
                    <hr className="border-t-2 border-gray-500 flex-grow mx-0" />
                </div>
                <div className="flex space-x-6">
                    <div>
                        <h4 className='text-2xl pt-6'> Gallerie</h4>
                    </div>
                    <div>
                        <p style={{ fontFamily: 'madera_bold' }} className='text-2xl pl-[50vh]'>
                            Ein Moment, um innezuhalten,<br />
                            die Welt mit neuen Augen zu sehen. <br />
                            jeder Tag ein Abenteuer, jeder Ort <br />
                            eine Geschichte. Mit jedem Schritt <br />
                            Erinnerungen schaffen, die für immer bleiben.
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
                        <h1 className='text-8xl flex flex-row'>120</h1>
                        <p>BILDER</p>
                    </div>
                    <div>
                        <h1 className='text-8xl'>6+</h1>
                        <p>STANDORTE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;
