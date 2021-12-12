import { createStitches } from '@stitches/react';

// default Theme
export const { theme, createTheme, getCssText } = createStitches({
  theme: {
    colors: {
      backgroundColor: '#FFFFFF',
      primary: '#25C39C',
      gray100: '#C4C4C4',
    },
  },
});

// dark Theme
export const darkTheme = createTheme({
  colors: {
    backgroundColor: '#000000',
    primary: '#25C39C',
    gray100: '#C4C4C4',
  },
});


/* exemple
  // default theme
  theme.colors.primary; // var(--colors-primary)
  theme.colors.primary.value; // black
  theme.colors.primary.token; // primary
  theme.colors.primary.scale; // colors
  theme.colors.primary.variable; // --colors-primary
  theme.colors.primary.computedValue; // var(--colors-primary)

  // dark theme
  dark.colors.primary; // var(--colors-primary)
  dark.colors.primary.value; // white
  dark.colors.primary.token; // primary
  dark.colors.primary.scale; // colors
  dark.colors.primary.variable; // --colors-primary
  dark.colors.primary.computedValue; // var(--colors-primary)

  const Button = styled('button', {
    borderRadius: '9999px',
    fontSize: '13px',
    border: '0',

    [`.${darkTheme} &`]: {
      backgroundColor: '$black',
    },
  });

  () => (
    <div className={myTheme}>
      <Button>Button</Button>
    </div>
  );
*/