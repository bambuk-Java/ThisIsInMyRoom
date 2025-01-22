import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="pt-[10vh] pb-[5vh] cursor-none">
            <div
                className="relative flex flex-row items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Animiertes Plus/Minus */}
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-7xl pl-[20vh] pr-[16vh]"
                >
                    +
                </motion.div>
                <h2 className="text-4xl">{question}</h2>
            </div>

            {/* Akkordeon-Inhalt */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
                style={{ overflow: "hidden" }}
                transition={{ duration: 0.5 }}
            >
                <p className="pl-[44vh] pt-[2vh]">{answer}</p>
            </motion.div>
        </div>
    );
};

export default AccordionItem;
