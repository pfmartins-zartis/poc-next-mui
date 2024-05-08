import { IPalette, ITheme } from "@/client/theme/theme.types";
import { createTheme } from "@mui/material";

const paletteOverride: Pick<
  IPalette,
  "primary" | "secondary" | "common" | "grey" | "gradients"
> = {
  primary: {
    dark: "#4499b2",
    main: "#4ac500",
    light: "#edf0f0",
    contrastText: "#fff",
    "50": "#edf0f0",
    "100": "#a7d5d5",
    "200": "#89c2b0",
    "300": "#70c95a",
    "400": "#7cd26c",
    "500": "#4ac500",
    "600": "#00c527",
    "700": "#28b96c",
    "800": "#44b295",
    "900": "#4499b2",
  },
  secondary: {
    dark: "#031e25",
    main: "#003b4a",
    light: "#08536cff",
    contrastText: "#edf0f0",
  },
  gradients: [
    {
      colorStart: "#354750",
      colorEnd: "#475f6c",
      angle: 270,
      contrastText: "#fefeff",
    },
    {
      colorStart: "#415863",
      colorEnd: "#53707f",
      angle: 270,
      contrastText: "#fefeff",
    },
    {
      colorStart: "#4d6977",
      colorEnd: "#5f8193",
      angle: 270,
      contrastText: "#fefeff",
    },
  ],
  common: {
    white: "#FFF",
    black: "#1a2024",
  },
  grey: {
    "50": "#fefeff",
    "100": "#fafbfc",
    "200": "#dedfe0",
    "300": "#bfc1c2",
    "400": "#aaaaaa",
    "500": "#737373",
    "600": "#5c5c5c",
    "700": "#40454a",
    "800": "#3a3b3b",
    "900": "#252525",
  },
};

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: paletteOverride?.secondary?.dark,
      },
    },
  },
  palette: paletteOverride,
  typography: {
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
    caption: {
      fontSize: 10,
    },
    subtitle1: {
      fontSize: 21,
    },
    subtitle2: {
      fontSize: 18,
    },
    button: {
      fontSize: 14,
    },
    overline: {
      fontSize: 14,
    },
    h6: {
      fontSize: 13,
    },
    h5: {
      fontSize: 15,
    },
    h4: {
      fontSize: 18,
    },
    h3: {
      fontSize: 21,
    },
    h2: {
      fontSize: 24,
    },
    h1: {
      fontSize: 28,
    },
  },
}) as unknown as ITheme;
