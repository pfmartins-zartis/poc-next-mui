import { shouldNotForwardProps } from "@/client/theme/helpers/shouldNotForwarProps/shouldNotForwarProps";
import { styled } from "@/client/theme/styled";
import { ITheme } from "@/client/theme/theme.types";
import MuiIcon from "@mui/material/Icon";
import { get, isEmpty } from "lodash";
import { FC } from "react";
import { IconProps } from "./Icon.type";

const getColor = ({ theme, color }: IconProps & { theme: ITheme }): string => {
  if (isEmpty(color)) return theme.palette.text.primary;
  const mainColor = get(theme, `palette.${color}.main`, "");
  if (!isEmpty(mainColor)) return mainColor;
  const completeColor = get(theme, `palette.${color}`, "");
  if (!isEmpty(completeColor)) return completeColor;
  return color as string;
};

export const IconStyled = styled(MuiIcon, {
  shouldForwardProp: shouldNotForwardProps([
    "filled",
    "weight",
    "grade",
    "opticalSize",
    "color",
  ]),
})<IconProps>`
  &.material-symbols-outlined {
    text-transform: lowercase;
    color: ${getColor};
    font-variation-settings:
      "FILL" ${({ filled }) => (filled ? 1 : 0) ?? 0},
      "wght" ${({ weight }) => weight ?? 400},
      "GRAD" ${({ grade }) => grade ?? 200},
      "opsz" ${({ opticalSize }) => opticalSize ?? 20};
  }
` as FC<IconProps>;
