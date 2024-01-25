import React from "react";
import * as S from "./styled";

export const Spacing: React.FC<S.SpacingStyledProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <S.Spacing {...props} className={className}>
      {children}
    </S.Spacing>
  );
};

Spacing.defaultProps = {};

export default Spacing;
