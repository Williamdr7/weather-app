import React, { ReactNode } from "react";
import * as S from "./styled";

export type TextProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
  children: ReactNode;
  fontSize?: string;
} & S.TextStyledProps;

const Text: React.FC<TextProps> = ({ color, children, title, ...props }) => {
  return (
    <S.Text {...props} color={color} title={title}>
      {children}
    </S.Text>
  );
};

Text.defaultProps = {
  as: "span",
  asBlock: false,
  variant: "bodyMedium",
  fontStyle: "normal",
};

export default Text;
