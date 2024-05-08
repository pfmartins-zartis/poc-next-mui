import { styled } from "@/client/theme/styled";
import { ITheme } from "@/client/theme/theme.types";
import { SerializedStyles } from "@emotion/react";
import { Paper, TypographyProps, css } from "@mui/material";
import { get, isEmpty, isNumber } from "lodash";
import { ContentWrapperProps } from "./ContentWrapper.types";

const getDefaultColor = (bgColor: TypographyProps["color"], theme: ITheme) =>
  !isEmpty(bgColor) && typeof bgColor === "string"
    ? bgColor
    : theme.palette.common.white;

const getBgColor = (bgColor: TypographyProps["color"], theme: ITheme) =>
  get(theme, `palette.${bgColor}`, getDefaultColor(bgColor, theme));

const gradiendMixin = ({
  theme,
  gradientIndex,
  bgVariant,
  bgColor,
}: ContentWrapperProps & { theme: ITheme }): SerializedStyles =>
  bgVariant === "gradient" && isNumber(gradientIndex)
    ? css`
        background: linear-gradient(
          ${theme.palette.gradients[gradientIndex].angle}deg,
          ${theme.palette.gradients[gradientIndex].colorStart},
          ${theme.palette.gradients[gradientIndex].colorEnd}
        );
        color: ${theme.palette.gradients[gradientIndex].contrastText};
      `
    : css`
        background: ${getBgColor(bgColor, theme)};
        color: ${theme.palette.getContrastText(getBgColor(bgColor, theme))};
      `;

export const ContentWrapperStyled = styled(Paper)<ContentWrapperProps>`
  ${gradiendMixin}
  padding: ${({ theme }) => theme.spacing(2)};
  height: 100%;
`;
