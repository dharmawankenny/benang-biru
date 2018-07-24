const theme = {
  breakpoint: {
    smallMobile: '20rem',
    mobile: '48rem',
    tablet: '64rem',
    smallDesktop: '80rem',
  },

  font: {
    headingOne: 'Cocogoose',
    headingTwo: 'Keep Calm',
    body: 'Rubik',
  },

  color: {
    white: '#FFFFFF',
    light: '#FEFEFE',
    whiteRGBA: a => `rgba(255, 255, 255, ${a})`,
    ivory: '#EEEEEE',
    pegasus: '#CCCCCC',
    gray: '#B1B7BE',
    black: '#3A3A3A',
    dark: '#555555',
    blue: '#00A8DA',
    blueDark: '#135DA1',
    green: '#9BE15D',
    red: '#F15A2C',
  },

  shadow: {
    lite: '0 0.25rem 0.25rem rgba(58, 58, 58, 0.15)',
    regular: '0 0.5rem 1rem rgba(58, 58, 58, 0.15)',
  },

  sizing: {
    containerMaxWidth: '80rem',
    radius: {
      small: '0.25rem',
      regular: '0.5rem',
      card: '0.75rem',
    },
  },

  zindex: {
    modal: '1000',
    overhead: '100',
  },
};

export const media = breakpoint => `@media screen and (max-width: ${theme.breakpoint[breakpoint]})`;

export default theme;
