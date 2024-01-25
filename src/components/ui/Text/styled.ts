/* eslint-disable @typescript-eslint/no-explicit-any */
import { TColor } from "@/style/theme/_colors";
import { TFontSize, TFontWeight } from "@/style/types/typography";
import styled from "styled-components";

export type TextStyledProps = {
  variant?: TFontSize;
  fontStyle?: "normal" | "italic" | "oblique";
  fontFamily?: string;
  title?: string;
  weight: TFontWeight;
  color?: TColor;
  asBlock?: boolean;
  lineHeight?: number;
  ref?: any;
  fontSize?: string;
  textTransform?: "capitalize" | "lowercase" | "uppercase";
  whiteSpace?:
    | "inherit"
    | "initial"
    | "normal"
    | "nowrap"
    | "pre"
    | "pre-line"
    | "unset";
  textAlign?: "center" | "left" | "right" | "justify" | "initial" | "inherit";
  overflow?: "hidden" | "auto" | "initial";
  textDecoration?: "underline" | "overline" | "line-through";
  className?: string;
};

export const Text = styled.div<TextStyledProps>`
  ${({ color }) => color && `color: ${color}`};

  font-family: ${({ theme, fontFamily }) =>
    fontFamily ? fontFamily : theme.typography.fontFamily};

  font-size: ${({ theme, variant, fontSize }) =>
    fontSize ? fontSize : theme.typography.size.desktop[variant].size};

  font-weight: ${({ theme, weight }) => theme.typography.weight[weight]};

  text-transform: ${({ textTransform }) => textTransform || "normal"};

  letter-spacing: ${({ theme, variant }) =>
    theme.typography.size.desktop[variant].letterSpacing};

  line-height: ${({ theme, variant, lineHeight }) =>
    lineHeight
      ? `${lineHeight}px`
      : theme.typography.size.desktop[variant].lineHeight};

  white-space: ${({ whiteSpace }) => whiteSpace};

  overflow: ${({ overflow }) => overflow};

  text-overflow: ellipsis;

  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};

  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration};`};

  ${({ fontStyle }) => fontStyle && `font-style: ${fontStyle}`};

  ${({ asBlock }) => asBlock && `display: block; clear: both;`};
`;
