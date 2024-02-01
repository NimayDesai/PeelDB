import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: {
        100: "#E5FCF1",
        200: "#27EF96",
        300: "#10DE82",
        400: "#0EBE6F",
        500: "#0CA25F",
        600: "#0A864F",
        700: "#086F42",
        800: "#075C37",
        900: "#064C2E",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
