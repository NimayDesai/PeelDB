import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
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
