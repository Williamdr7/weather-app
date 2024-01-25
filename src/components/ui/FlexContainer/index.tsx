import React from "react";
import * as S from "./styled";

export const FlexContainer: React.FC<S.FlexContainerStyledProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <S.FlexContainer className={className} {...props}>
      {children}
    </S.FlexContainer>
  );
};

FlexContainer.defaultProps = {
  direction: "row",
  wrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "stretch",
};

export default FlexContainer;
