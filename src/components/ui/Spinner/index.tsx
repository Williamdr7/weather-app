import React from "react";
import * as S from "./styled";

export const Spinner: React.FC<S.SpinnerStyledType> = ({
  size,
  borderSize,
  zIndex,
}) => {
  return (
    <S.Spinner size={size} borderSize={borderSize} zIndex={zIndex}>
      <div />
      <div />
      <div />
      <div />
    </S.Spinner>
  );
};

Spinner.defaultProps = {
  size: "50px",
  borderSize: "4px",
  zIndex: 2,
};

export default Spinner;
