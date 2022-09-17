export const theme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      main: '#14213D',
      secondary: '#FCA311',
      light: '#C3C3C3',
    },
  },
  fontFamily: {
    main: 'Roboto, sans-serif',
    secondary: 'Raleway , sans-serif',
  },
};
const fontSizeBase = 16;
export const fontSize = (sizeInPx: number) => `${sizeInPx / fontSizeBase}rem`;
