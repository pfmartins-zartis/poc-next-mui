import { ContentWrapperStyled } from "./ContentWrapper.styles";
import { ContentWrapperProps } from "./ContentWrapper.types";

export const ContentWrapper = ({
  bgColor,
  bgVariant,
  gradientIndex,
  children,
  ...paperProps
}: ContentWrapperProps) => (
  <ContentWrapperStyled
    bgColor={bgColor}
    bgVariant={bgVariant}
    gradientIndex={gradientIndex}
    {...paperProps}
  >
    {children}
  </ContentWrapperStyled>
);
