import { ReactNode } from "react";
import * as S from "./styles";
import { FlexContainerStyledProps } from "../FlexContainer/styled";

type CardProps = {
  children: ReactNode;
} & FlexContainerStyledProps;

export default function Card({ children, ...props }: CardProps) {
  return <S.CardContainer {...props}>{children}</S.CardContainer>;
}
