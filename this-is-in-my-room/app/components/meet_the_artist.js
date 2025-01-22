"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";

const media = [
    { type: "Video", src: "/videos/italien.mp4", prompt: "Himmelblauer Fluss in der Toskana", date: "August 2021" },
    { type: "image", src: "/generatedImg.png", prompt: "kein Video in Frankreich :(", date: "September 2024" },
    { type: "video", src: "/videos/spanien.mp4", prompt: "Sonnenaufgang am Mittelmeer", date: "Oktober 2023" },
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

const Meet_the_artist = () => {

    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, media.length, page);


    const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false, title: "" });

    const paginate = (newDirection) => setPage([page + newDirection, newDirection]);

    const handleMouseEnter = (event, title) => {
        setCursor({ x: event.clientX, y: event.clientY, visible: true, title });
    };

    const handleMouseMove = (event) => {
        setCursor((prev) => ({ ...prev, x: event.clientX, y: event.clientY }));
    };

    const handleMouseLeave = () => {
        setCursor((prev) => ({ ...prev, visible: false, title: "" }));
    };

    return (
        <div
            className="w-full h-full pt-[20vh] bg-cover bg-center"
            style={{ backgroundImage: "url(/white-paper-texture.jpg)" }}
        >
            {/* Custom Cursor */}
            <div
                className={`fixed pointer-events-none transition-opacity duration-200 ${cursor.visible ? "opacity-100" : "opacity-0"
                    }`}
                style={{
                    left: cursor.x,
                    top: cursor.y,
                    transform: "translate(10px, -100%)",
                    zIndex: 100,
                }}
            >
                <div className="text-sm text-white">{cursor.title}</div>
            </div>
            <div className="pl-[16.6666vh] w-[5/6] flex justify-left flex-row relative">
                <div>
                    <h1 className="text-5xl text-[#9a9d9a]">DAS</h1>
                    <h1 className="text-5xl pl-[14.5vh]">VIDEO</h1>
                </div>
                <div className="w-[15vh] px-[15vh] pt-[4vh]">
                    <hr className="border-t-4 border-gray-500 w-[25vh] mx-0" />
                </div>
                <div className="pl-[30vh] pt-[2vh]">
                    <p className="text-1xl" style={{ fontFamily: "madera_reg" }}>
                        "Um Ferienmomente <br />
                        einzufangen, nutze ich <br />
                        die Kamera als kreatives{" "} <br />
                        Werkzeug und spiele mit Licht."
                    </p>
                </div>
            </div>
            <div className="w-5/6 flex justify-left py-[5vh] pl-[41.66666vh]">
                <div className="relative flex items-center">
                    <div className="relative flex items-end">
                        <p style={{ fontFamily: "madera_reg" }}>Spanien</p>
                        <hr className="border-t-2 pb-[1.5vh] border-gray-500 w-[5vh] mx-[2vh]" />
                    </div>
                    <div className="relative flex items-end">
                        <p style={{ fontFamily: "madera_reg" }}>Italein</p>
                        <hr className="border-t-2 pb-[1.5vh] border-gray-500 w-[5vh] mx-[2vh]" />
                    </div>
                    <div className="relative flex items-end">
                        <p style={{ fontFamily: "madera_reg" }}>Frankreich</p>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="pl-[16.66666vh] w-[5/6] flex justify-left flex-row relative">
                <div>
                    {/* Next-Button */}
                    <div>
                        <button onClick={() => paginate(1)}>
                            <Image src="/arrowbtn.svg" alt="next" width={110} height={110} />
                        </button>
                    </div>
                    {/* Previous-Button */}
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
                    {/* Circles */}
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

                {/* Image Section */}
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
                            <div
                                onMouseEnter={(e) => handleMouseEnter(e, media[imageIndex].prompt)}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                {media[imageIndex].type === "image" ? (
                                    <Image
                                        src={media[imageIndex].src}
                                        alt="artist"
                                        width={900}
                                        height={500}
                                    />
                                ) : (
                                    <video
                                        src={media[imageIndex].src}
                                        width={900}
                                        height={500}
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                    />
                                )}
                            </div>
                            <motion.div></motion.div>
                            <div className="flex justify-left z-1000 flex-row relative py-[1vh]">
                                <p>{media[imageIndex].prompt}</p>
                                <p className="pl-[50vh]">{media[imageIndex].date}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div className="py-[11vh] relative flex items-center justify-center w-5/6 mx-auto">
                <span className="h-1 w-1 rounded-full bg-gray-500" />
                <hr className="border-t border-gray-500 flex-grow mx-0" />
                <span className="h-1 w-1 rounded-full bg-gray-500" />
            </div>
        </div>
    );
};

export default Meet_the_artist;
