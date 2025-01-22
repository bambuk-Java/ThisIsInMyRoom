"use client";

import * as React from "react";
import "../../globals.css";
import { motion, useMotionValue } from "framer-motion";
import { Item } from "./items";
import { device } from "./settings";

const grid = Array.from({ length: 7 }, () =>
  Array.from({ length: 9 }, (_, i) => i)
);

export default function AppleWatchDock() {
  const x = useMotionValue(-225);
  const y = useMotionValue(-225);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className="device bg-black bg-opacity-5"
      style={{
        ...device,
        overflow: "hidden",
        borderRadius: 50,
        position: "relative",
        contain: "content",
      }}
    >
      {selectedImage ? (
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
          }}
        >
          <div
            style={{
              flex: "1",
              backgroundImage: "url('/white-paper-texture.jpg')",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Platzhaltertext</h1>
            <p>
              Hier könnte eine Beschreibung des Bildes oder andere relevante
              Informationen stehen. Klicken Sie auf das Bild, um es zu schließen.
            </p>
            <button
              onClick={closeImage}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              x
            </button>
          </div>
          {/* Rechter Bereich: Bildanzeige */}
          <div
            style={{
              flex: "2",
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={closeImage}
          >
            <img
              src={selectedImage}
              alt="Fullscreen"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      ) : (
        <motion.div
          drag
          dragConstraints={{ left: -50, right: 0, top: -200, bottom: 0 }}
          style={{
            width: 700,
            height: 10,
            x,
            y,
            background: "transparent",
          }}
        >{grid.map((rows, rowIndex) =>
          rows.map((colIndex) => (
            <Item
              key={`row-${rowIndex}-col-${colIndex}`}
              id={`row-${rowIndex}-col-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              planeX={x}
              planeY={y}
              onImageClick={handleImageClick}
            />
          ))
        )}

        </motion.div>
      )}
    </div>
  );
}