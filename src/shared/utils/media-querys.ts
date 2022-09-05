export enum MediaQuerys {
  wideDesktop = 1920,
  desktop = 1280,
  smallDesktop = 1024,
  largeTablet = 768,
  largeHandset = 480,
  mediumHandset = 360,
  smallHandset = 320,
}

export const getMediaQuery = (key: MediaQuerys) => {
  return `@media (min-width: ${key}px)`;
};
