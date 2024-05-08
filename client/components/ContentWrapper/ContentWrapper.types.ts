import { PaperProps, TypographyProps } from "@mui/material";

export interface ContentWrapperProps extends PaperProps {
  gradientIndex?: 0 | 1 | 2;
  bgVariant: "solid" | "gradient";
  bgColor?: TypographyProps["color"];
}
