import { TSpacing } from "@/style/types/spacing";
import { ReactNode } from "react";
import styled from "styled-components";

export type SpacingStyledProps = {
  paddingXY?: number;

  children?: ReactNode;

  paddingX?: number;

  paddingY?: number;

  paddingTop?: number;

  paddingBottom?: number;

  paddingLeft?: number;

  paddingRight?: number;

  marginXY?: number;

  marginX?: number;

  marginY?: number;

  marginTop?: number;

  marginBottom?: number;

  marginLeft?: number;

  marginRight?: number;

  pXY?: TSpacing;

  pX?: TSpacing;

  pY?: TSpacing;

  pTop?: TSpacing;

  pBottom?: TSpacing;

  pLeft?: TSpacing;

  pRight?: TSpacing;

  mXY?: TSpacing;

  mX?: TSpacing;

  mY?: TSpacing;

  mTop?: TSpacing;

  mBottom?: TSpacing;

  mLeft?: TSpacing;

  mRight?: TSpacing;

  height?: string;

  width?: string;

  className?: string;
};

export const Spacing = styled.div<SpacingStyledProps>`
  clear: both;

  ${({ paddingXY, pXY, theme }) =>
    (paddingXY || pXY) &&
    `padding: ${
      typeof paddingXY === "number" ? `${paddingXY}px` : theme.spacing[pXY!]
    }`};

  ${({ paddingX, pX, theme }) =>
    (paddingX || pX) &&
    `padding-right: ${
      typeof paddingX === "number" ? `${paddingX}px` : theme.spacing[pX!]
    };
    padding-left: ${
      typeof paddingX === "number" ? `${paddingX}px` : theme.spacing[pX!]
    }`};

  ${({ paddingY, pY, theme }) =>
    (paddingY || pY) &&
    `padding-top: ${
      typeof paddingY === "number" ? `${paddingY}px` : theme.spacing[pY!]
    };
    padding-bottom: ${
      typeof paddingY === "number" ? `${paddingY}px` : theme.spacing[pY!]
    }`};

  ${({ paddingRight, pRight, theme }) =>
    (paddingRight || pRight) &&
    `padding-right: ${
      typeof paddingRight === "number"
        ? `${paddingRight}px`
        : theme.spacing[pRight!]
    }`};

  ${({ paddingLeft, pLeft, theme }) =>
    (paddingLeft || pLeft) &&
    `padding-left: ${
      typeof paddingLeft === "number"
        ? `${paddingLeft}px`
        : theme.spacing[pLeft!]
    }`};

  ${({ paddingTop, pTop, theme }) =>
    (paddingTop || pTop) &&
    `padding-top: ${
      typeof paddingTop === "number" ? `${paddingTop}px` : theme.spacing[pTop!]
    }`};

  ${({ paddingBottom, pBottom, theme }) =>
    (paddingBottom || pBottom) &&
    `padding-bottom: ${
      typeof paddingBottom === "number"
        ? `${pBottom}px`
        : theme.spacing[pBottom!]
    }`};

  ${({ marginXY, mXY, theme }) =>
    (marginXY || mXY) &&
    `margin: ${
      typeof marginXY === "number" ? `${marginXY}px` : theme.spacing[mXY!]
    }`};

  ${({ marginX, mX, theme }) =>
    (marginX || mX) &&
    `margin-right: ${
      typeof marginX === "number" ? `${marginX}px` : theme.spacing[mX!]
    };
    margin-left: ${
      typeof marginX === "number" ? `${marginX}px` : theme.spacing[mX!]
    }`};

  ${({ marginY, mY, theme }) =>
    (marginY || mY) &&
    `margin-top: ${
      typeof marginY === "number" ? `${marginY}px` : theme.spacing[mY!]
    };
    margin-bottom: ${
      typeof marginY === "number" ? `${marginY}px` : theme.spacing[mY!]
    }`};

  ${({ marginRight, mRight, theme }) =>
    (marginRight || mRight) &&
    `margin-right: ${
      typeof marginRight === "number"
        ? `${marginRight}px`
        : theme.spacing[mRight!]
    }`};

  ${({ marginLeft, mLeft, theme }) =>
    (marginLeft || mLeft) &&
    `margin-left: ${
      typeof marginLeft === "number" ? `${marginLeft}px` : theme.spacing[mLeft!]
    }`};

  ${({ marginTop, mTop, theme }) =>
    (marginTop || mTop) &&
    `margin-top: ${
      typeof marginTop === "number" ? `${marginTop}px` : theme.spacing[mTop!]
    }`};

  ${({ marginBottom, mBottom, theme }) =>
    (marginBottom || mBottom) &&
    `margin-bottom: ${
      typeof marginBottom === "number"
        ? `${marginBottom}px`
        : theme.spacing[mBottom!]
    }`};

  ${({ height }) => height && `height: ${height}`};
  ${({ width }) => width && `width: ${width}`};
`;
