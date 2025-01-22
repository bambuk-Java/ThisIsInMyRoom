'use client'
import React from "react";
import AccordionItem from "./accordionItem";

const WeKnowWhatYouThink = () => {
    const data = [
        {
            question: "Kann ich deine Telefonnummer haben?",
            answer:
                "Nein leider Nicht.",
        },
        {
            question: "Wie kann ich so gute Fotos machen?",
            answer:
                "Es ist ein einmaliges Talent, jemand wie du kann das niemals erreichen.",
        },
        {
            question: "Kannst du Fotos für mich machen?",
            answer:
                "Nein, ich bin ein Künstler und kein Fotograf.",
        },
    ];

    return (
        <div
            className="w-full h-full pt-[10vh] pb-[30vh] bg-cover bg-center cursor-none"
            style={{ backgroundImage: "url(/background-smooth-texture.jpg)" }}
        >
            <div className="relative">
                {/* Title Section */}
                <div className="relative flex flex-row">
                    <div className="w-[15vh] px-[15vh] pt-[6vh]">
                        <hr className="border-t-4 border-gray-500 w-[25vh] mx-0" />
                    </div>
                    <div className="pl-[15vh]">
                        <h1 className="text-7xl">ICH WEISS</h1>
                        <h1 className="text-7xl text-[#9a9d9a]">WAS DU DENKST</h1>
                    </div>
                </div>

                {/* Accordion Section */}
                <div>
                    {data.map((item, index) => (
                        <button>
                            <AccordionItem
                                className='curso-none'
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeKnowWhatYouThink;
