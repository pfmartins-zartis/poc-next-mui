import { TypographyProps } from "@mui/material";
import { IconProps as MuiIconProps } from "@mui/material/Icon";
import { Overwrite } from "@mui/types";

interface BaseIconProps {
  filled?: boolean;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  grade?: -25 | 0 | 200;
  opticalSize?: 20 | 24 | 40 | 48;
  color?: TypographyProps["color"];
  children?: string;
}
export type IconProps = Overwrite<MuiIconProps, BaseIconProps>;
