"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";

const images = [
    { src: "/generatedImg.png", prompt: "Prompt to generate this Image", date: "November 2024" },
    { src: "/generatedImg.png", prompt: "Another generated Image", date: "October 2024" },
    { src: "/generatedImg.png", prompt: "Third Image Prompt", date: "September 2024" },
];

const variants = {
    enter: (direction) => ({
        zIndex: 0,
        x: direction > 0 ? 1000 : -1000, // Startpunkt außerhalb des sichtbaren Bereichs
        opacity: 0, // Unsichtbar am Start
    }),
    center: {
        zIndex: 1,
        x: 0, // Im Zentrum
        opacity: 1, // Voll sichtbar
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000, // Verlassen des sichtbaren Bereichs
        opacity: 0, // Unsichtbar
    }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const Meet_the_artist = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => setPage([page + newDirection, newDirection]);

    return (
        <div className="w-full h-full pt-[20vh] bg-cover bg-center" style={{ backgroundImage: 'url(/white-paper-texture.jpg)' }}>
            <div className="pl-[16.6666vh] w-[5/6] flex justify-left flex-row relative">
                <div>
                    <h1 className="text-7xl text-[#9a9d9a]">MEET THE</h1>
                    <h1 className="text-7xl pl-[25vh]">ARTIST</h1>
                </div>
                <div className="w-[15vh] px-[15vh] pt-[4vh]">
                    <hr className="border-t-4 border-gray-500 w-[25vh] mx-0" />
                </div>
                <div className="pl-[30vh] pt-[2vh]">
                    <p className="text-2xl" style={{ fontFamily: 'madera_reg' }}>
                        To create AI-generated <br /> art,
                        artists use AI as a <br /> creative
                        tool and work <br /> with algorithms.
                    </p>
                </div>
            </div>
            <div className="w-5/6 flex justify-left py-[5vh] pl-[41.66666vh]">
                <div className="relative flex items-center">
                    <div className="relative flex items-end">
                        <p style={{ fontFamily: 'madera_reg' }}>Color AI</p>
                        <hr className="border-t-2 pb-[1.5vh] border-gray-500 w-[5vh] mx-[2vh]" />
                    </div>
                    <div className="relative flex items-end">
                        <p style={{ fontFamily: 'madera_reg' }}>Shape AI</p>
                        <hr className="border-t-2 pb-[1.5vh] border-gray-500 w-[5vh] mx-[2vh]" />
                    </div>
                    <div className="relative flex items-end">
                        <p style={{ fontFamily: 'madera_reg' }}>Details AI</p>
                        <hr className="border-t-2 pb-[1.5vh] border-gray-500 w-[5vh] mx-[2vh]" />
                    </div>
                    <div className="relative flex items-end">
                        <p style={{ fontFamily: 'madera_reg' }}>AI Number 7</p>
                    </div>
                </div>
            </div>

            {/** Gallery */}
            <div className="pl-[16.66666vh] w-[5/6] flex justify-left flex-row relative">
                <div>
                    {/** Next-Button */}
                    <div>
                        <button onClick={() => paginate(1)}>
                            <Image src="/arrowbtn.svg" alt="next" width={110} height={110} />
                        </button>
                    </div>
                    {/** Previous-Button */}
                    <div className="pt-[5vh]">
                        <button onClick={() => paginate(-1)}>
                            <Image
                                src="/arrowbtn.svg"
                                alt="previous"
                                width={110}
                                height={110}
                                className="transform rotate-180"
                            />
                        </button>
                    </div>
                    {/** Circles */}
                    <div className="pt-[38vh]">
                        <div className="py-[1vh]">
                            <Image
                                src="/halfCircle.svg"
                                alt="circle"
                                width={80}
                                height={80}
                                className="transform rotate-180"
                            />
                        </div>
                        <div>
                            <Image
                                src="/halfCircle.svg"
                                alt="circle"
                                width={80}
                                height={80}
                                className="transform rotate-180"
                            />
                        </div>
                    </div>
                </div>

                {/** Image Section */}
                <div className="relative w-[1000px] pl-[2vh] h-[600px] overflow-hidden">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.5 },
                            }}
                            className="absolute pl-[8vh]"
                        >
                            <Image
                                src={images[imageIndex].src}
                                alt="artist"
                                width={900}
                                height={500}
                            />
                            <div className="flex justify-left flex-row relative py-[1vh]">
                                <p>{images[imageIndex].prompt}</p>
                                <p className="pl-[50vh]">{images[imageIndex].date}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div className="py-[10vh] relative flex items-center justify-center w-5/6 mx-auto">
                <span className="h-1 w-1 rounded-full bg-gray-500" />
                <hr className="border-t border-gray-500 flex-grow mx-0" />
                <span className="h-1 w-1 rounded-full bg-gray-500" />
            </div>
        </div>
    );
};

export default Meet_the_artist;
