"use client";

import { useEffect, useRef } from "react";
import { transform } from "framer-motion";
import { device, icon } from "./settings";

export function useIconTransform({
  x,
  y,
  scale,
  planeX,
  planeY,
  xOffset,
  yOffset,
}) {
  const xScale = useRef(1);
  const yScale = useRef(1);

  useEffect(() => {
    // Transform x and scale based on planeX
    const handleXChange = (v) => {
      const screenOffset = v + xOffset + 20;

      xScale.current = mapScreenXToScale(screenOffset);
      const newScale = Math.min(xScale.current, yScale.current);

      scale.set(newScale);
      x.set(mapScreenToXOffset(screenOffset));
    };

    // Subscribe to changes in planeX
    const unsubscribeX = planeX.onChange(handleXChange);

    return () => unsubscribeX();
  }, [planeX, scale, x, xOffset]);

  useEffect(() => {
    // Transform y and scale based on planeY
    const handleYChange = (v) => {
      const screenOffset = v + yOffset + 20;

      yScale.current = mapScreenYToScale(screenOffset);
      const newScale = Math.min(xScale.current, yScale.current);

      scale.set(newScale);
      y.set(mapScreenToYOffset(screenOffset));
    };

    // Subscribe to changes in planeY
    const unsubscribeY = planeY.onChange(handleYChange);

    return () => unsubscribeY();
  }, [planeY, scale, y, yOffset]);
}

// Helper functions for transformations
const createScreenRange = (axis) => [
  -60,
  80,
  device[axis] - (icon.size + icon.margin) / 2 - 80,
  device[axis] - (icon.size + icon.margin) / 2 + 60,
];

const scaleRange = [0, 1, 1, 0];
const xRange = createScreenRange("width");
const yRange = createScreenRange("height");
const mapScreenToXOffset = transform(xRange, [50, 0, 0, -50]);
const mapScreenToYOffset = transform(yRange, [50, 0, 0, -50]);
const mapScreenXToScale = transform(xRange, scaleRange);
const mapScreenYToScale = transform(yRange, scaleRange);
