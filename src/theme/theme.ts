export const theme = {
  palette: {
    common: {
      black: '#2b2b2b',
      white: '#ffffff',
      lightGrey: '#D8D8D8',
      grey: '5c5c5c',
      darkGrey: '#bebebe',
      light: 'rgb(92 92 92 / 50%)',
    },
  },
  fontFamily: {
    main: 'Roboto, sans-serif',
    secondary: 'Raleway , sans-serif',
  },
};
const fontSizeBase = 16;
export const fontSize = (sizeInPx: number) => `${sizeInPx / fontSizeBase}rem`;
