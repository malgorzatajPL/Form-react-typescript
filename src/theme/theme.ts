export const theme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      main: '#14213D',
      red: '#c50000',
      secondary: '#FCA311',
      third: '#3c5895',
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
