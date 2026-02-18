// utils/fluid.ts

/**
 * Returns a CSS clamp() string using the CSS Locks technique.
 * Linearly interpolates between minSize at 320px and maxSize at 1440px.
 *
 * @example fluid(12, 20) → "clamp(12px, 0.7143vw + 9.7143px, 20px)"
 */
export const fluid = (minSize: number, maxSize: number): string => {
  const minVW = 320;
  const maxVW = 1024;
  const slope = (maxSize - minSize) / (maxVW - minVW);
  const intercept = minSize - slope * minVW;
  return `clamp(${minSize}px, ${parseFloat((slope * 100).toFixed(4))}vw + ${parseFloat(intercept.toFixed(4))}px, ${maxSize}px)`;
};

/**
 * Returns a clamped pixel value using the same CSS Locks interpolation as fluid(),
 * evaluated against the current viewport width. For use in JS/GSAP transforms.
 *
 * @example fluidPx(12, 20) → 16 (at 672px viewport)
 */
export const fluidPx = (minSize: number, maxSize: number): number => {
  const minVW = 320;
  const maxVW = 1024;
  const vw = window.innerWidth;
  const slope = (maxSize - minSize) / (maxVW - minVW);
  const intercept = minSize - slope * minVW;
  const value = slope * vw + intercept;
  return Math.min(Math.max(value, minSize), maxSize);
};
