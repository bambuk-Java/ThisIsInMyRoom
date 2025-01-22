import * as React from "react";
import { motion, useMotionValue } from "framer-motion";
import { icon } from "./settings";
import { useIconTransform } from "./use-icon-transform.js";

const originalImages = [
    "DSC_0005-800x600.JPG",
    "DSC_0006-1024x768.JPG",
    "DSC_0007-800x600.JPG",
    "DSC_0010-800x600.JPG",
    "DSC_0033-800x600.JPG",
    "DSC_0043-800x600.JPG",
    "DSC_0044-800x600.JPG",
    "DSC_0045-800x600.JPG",
    "DSC_0055-800x600.JPG",
    "DSC_0066-800x600.JPG",
    "DSC_0068-800x600.JPG",
    "DSC_0080-800x600.JPG",
    "DSC_0086-800x600.JPG",
    "DSC_0087-800x600.JPG",
    "DSC_0091-800x600.JPG",
    "DSC_0092-800x600.JPG",
    "DSC_0093-800x600.JPG",
    "DSC_0094-800x600.JPG",
    "DSC_0095-800x600.JPG",
    "DSC_0096-800x600.JPG",
    "DSC_0097-800x600.JPG",
    "DSC_0098-800x600.JPG",
    "DSC_0100-800x600.JPG",
    "DSC_0105-800x600.JPG",
    "DSC_0106-800x600.JPG",
    "DSC_0107-800x600.JPG",
    "DSC_0112-800x600.JPG",
    "DSC_0123-800x600.JPG",
    "DSC_0126-800x600.JPG",
    "DSC_0127-800x600.JPG",
    "DSC_0139-800x600.JPG",
    "DSC_0140-800x600.JPG",
    "DSC_0141-800x600.JPG",
    "DSC_0148-800x600.JPG",
    "DSC_0154-800x600.JPG",
    "DSC_0155-800x600.JPG",
    "DSC_0157-800x600.JPG",
    "DSC_0164-800x600.JPG",
    "DSC_0165-800x600.JPG",
    "DSC_0166-800x600.JPG",
    "DSC_0167-800x600.JPG",
    "DSC_0170-800x600.JPG",
    "DSC_0171-800x600.JPG",
    "DSC_0172-800x600.JPG",
    "DSC_0183-800x600.JPG",
    "DSC_0184-800x600.JPG",
    "DSC_0185-800x600.JPG",
    "DSC_0186-800x600.JPG",
    "DSC_0187-800x600.JPG",
    "DSC_0188-800x600.JPG",
    "DSC_0189-800x600.JPG",
    "DSC_0273-800x600.JPG",
    "DSC_0301-800x600.JPG",
    "DSC_0311-800x600.JPG",
    "DSC_0318-800x600.JPG",
    "DSC_0323-800x600.JPG",
    "DSC_0365-800x600.JPG",
    "DSC_0462-800x600.JPG",
    "DSC_0468-800x600.JPG",
    "DSC_0469-800x600.JPG",
    "DSC_0484-800x600.JPG",
    "DSC_0485-800x600.JPG",
    "DSC_0486-800x600.JPG",
    "DSC_0501-800x600.JPG",
    "DSC_0506-800x600.JPG",
];

let availableImages = [...originalImages]; // Kopie der ursprünglichen Liste

export function Item({ id, row, col, planeX, planeY, onImageClick }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useMotionValue(1);
    const [isDragging, setIsDragging] = React.useState(false);

    const getNextImageOrColor = React.useCallback(() => {
        if (availableImages.length === 0) {
            availableImages = [...originalImages]; // Zurücksetzen, wenn leer
        }

        const randomIndex = Math.floor(Math.random() * availableImages.length);
        const selectedImage = availableImages.splice(randomIndex, 1)[0];

        return { type: "image", value: `./kleineLandschaften/${selectedImage}` };
    }, []);

    const randomStyle = React.useMemo(() => {
        return getNextImageOrColor();
    }, []);

    const xOffset =
        col * (icon.size + icon.margin) +
        (row % 2) * ((icon.size + icon.margin) / 2);
    const yOffset = row * icon.size;

    useIconTransform({ x, y, scale, planeX, planeY, xOffset, yOffset });

    const handlePointerDown = () => {
        setIsDragging(false);
    };

    const handlePointerMove = () => {
        setIsDragging(true);
    };

    const handlePointerUp = () => {
        if (!isDragging && randomStyle.type === "image") {
            onImageClick(randomStyle.value);
        }
    };

    return (
        <motion.div
            id={`item-${id}`}
            style={{
                position: "absolute",
                left: xOffset,
                top: yOffset,
                x,
                y,
                scale,
                width: icon.size,
                height: icon.size,
                borderRadius: "50%",
                contain: "strict",
                background:
                    randomStyle.type === "image"
                        ? `url(${randomStyle.value})`
                        : randomStyle.value,

                backgroundSize: randomStyle.type === "image" ? "cover" : undefined,
                backgroundPosition: randomStyle.type === "image" ? "center" : undefined,
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
        />
    );
}
