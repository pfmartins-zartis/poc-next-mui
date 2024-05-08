import { Color, Palette, PaletteColor, Theme } from "@mui/material";
import { Overwrite } from "@mui/types";

export interface PrimaryPaletteColor
  extends Omit<Color, "A100" | "A200" | "A400" | "A700">,
    PaletteColor {} //Mui

export interface IGradient {
  colorStart: string;
  colorEnd: string;
  angle: number;
  contrastText: string;
}

export type GradientVariants = 0 | 1 | 2;

export interface PaletteOverride {
  primary: PrimaryPaletteColor;
  grey: Omit<Color, "A100" | "A200" | "A400" | "A700">;
  gradients: IGradient[];
}

export type IPalette = Overwrite<Palette, PaletteOverride>;

export interface OverridesThemePalette {
  palette: IPalette;
}

export type ITheme = Overwrite<Theme, OverridesThemePalette>;
