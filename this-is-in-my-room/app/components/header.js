"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll } from "framer-motion";
import logo from '/public/logo.svg';

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const { scrollYProgress } = useScroll();



    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const height = scrollY > 20 ? 90 : 120;
    const overlayOpacity = scrollY > 20 ? 1 : 0;

    return (
        <motion.div
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 31,
                height: height,
                transition: 'height 0.5s ease-in-out',
            }}
        >
            <motion.div
                style={{
                    height: 4,
                    backgroundColor: '#ff6347',
                    transformOrigin: 'left',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 31,
                    scaleX: scrollYProgress
                }}
                className="progress-bar"
            />
            <div
                style={{
                    backgroundImage: 'url(/white-wall-background.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                }}
            />
            <motion.div
                animate={{ opacity: overlayOpacity }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    backgroundImage: 'none',
                    backgroundColor: 'rgba(100, 0, 0, 0)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                }}
            />
            <div className="w-screen flex justify-between items-center pt-[4vh]">
                <div className="flex items-center pl-[25vh]">
                    <p className="pr-6 text-xs">GALLERIE</p>
                    <p className="text-xs">VIDEO</p>
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="flex items-center pr-[25vh]">
                    <p className="pr-6 text-xs">GERÄTE</p>
                    <p className="text-xs">FAQ</p>
                </div>
            </div>
            <div className="relative flex items-center justify-center w-5/6 mx-auto">
                <span className="h-1 w-1 rounded-full bg-gray-500" />
                <hr className="border-t border-gray-500 flex-grow mx-0" />
                <span className="h-1 w-1 rounded-full bg-gray-500" />
            </div>
        </motion.div>
    );
};

export default Header;
