import { IconStyled } from "./Icon.styles";
import { IconProps } from "./Icon.type";

export const Icon = ({
  color,
  filled,
  grade,
  opticalSize,
  weight,
  children,
  className,
  ...props
}: IconProps) => (
  <IconStyled
    className={`material-symbols-outlined ${className}`}
    color={color}
    filled={filled}
    grade={grade}
    opticalSize={opticalSize}
    weight={weight}
    {...props}
  >
    {children}
  </IconStyled>
);
