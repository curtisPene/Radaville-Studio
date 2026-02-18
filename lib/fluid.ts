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
