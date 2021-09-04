export const breakPoints = {
  portrait: 768,
  landscape: 1024,
};

export const mediaQueries = {
  portrait: `@media (min-width: ${breakPoints.portrait}px)`,
  landscape: `@media (min-width: ${breakPoints.landscape}px)`,
  desktopDevice: '@media only screen and (hover: hover) and (pointer: fine)',
};
