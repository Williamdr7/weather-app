import styled, { css } from "styled-components";
import { ReactNode } from "react";
import { SpacingStyledProps } from "../Spacing/styled";
import Spacing from "../Spacing";

export type DirectionType = "row" | "row-reverse" | "column" | "column-reverse";
export type JustifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type WrapType = "nowrap" | "wrap" | "wrap-reverse";
export type AlignItemsType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";
export type AlignContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch";

interface IResponsiveTypes<T> {
  xxs?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
}

export type ResponsiveTypes = {
  responsive?: IResponsiveTypes<FlexContainerStyledProps>;
};

export type FlexContainerStyledProps = {
  zIndex?: number;
  gap?: string;
  direction?: DirectionType;
  justifyContent?: JustifyContentType;
  alignItems?: AlignItemsType;
  alignContent?: AlignContentType;
  wrap?: WrapType;
  children?: ReactNode;
  onClick?: (e) => void;
} & SpacingStyledProps &
  ResponsiveTypes;

export const FlexContainer = styled(Spacing)<FlexContainerStyledProps>`
  display: flex;
  min-width: 0;

  ${({
    theme,
    responsive,
    gap,
    direction,
    wrap,
    alignItems,
    justifyContent,
    alignContent,
  }) =>
    responsive?.xxl &&
    css`
      @media only screen and (max-width: ${theme.screenSize.xxl}) {
        ${`gap: ${responsive.xxl?.gap || gap}`};
        ${`flex-direction: ${responsive.xxl?.direction || direction}`};
        ${`flex-wrap: ${responsive.xxl?.wrap || wrap}`};
        ${`align-items: ${responsive.xxl?.alignItems || alignItems}`};
        ${`justify-content: ${
          responsive.xxl?.justifyContent || justifyContent
        }`};
        ${`align-content: ${responsive.xxl?.alignContent || alignContent}`};
      }
    `}

  ${({
    theme,
    responsive,
    gap,
    direction,
    wrap,
    alignItems,
    justifyContent,
    alignContent,
  }) =>
    responsive?.xl &&
    css`
      @media only screen and (max-width: ${theme.screenSize.xl}) {
        ${`gap: ${responsive.xl?.gap || gap}`};
        ${`flex-direction: ${responsive.xl?.direction || direction}`};
        ${`flex-wrap: ${responsive.xl?.wrap || wrap}`};
        ${`align-items: ${responsive.xl?.alignItems || alignItems}`};
        ${`justify-content: ${
          responsive.xl?.justifyContent || justifyContent
        }`};
        ${`align-content: ${responsive.xl?.alignContent || alignContent}`};
      }
    `}

  ${({
    theme,
    responsive,
    gap,
    direction,
    wrap,
    alignItems,
    justifyContent,
    alignContent,
  }) =>
    responsive?.lg &&
    css`
      @media only screen and (max-width: ${theme.screenSize.lg}) {
        ${`gap: ${responsive.lg?.gap || gap}`};
        ${`flex-direction: ${responsive.lg?.direction || direction}`};
        ${`flex-wrap: ${responsive.lg?.wrap || wrap}`};
        ${`align-items: ${responsive.lg?.alignItems || alignItems}`};
        ${`justify-content: ${
          responsive.lg?.justifyContent || justifyContent
        }`};
        ${`align-content: ${responsive.lg?.alignContent || alignContent}`};
      }
    `}

  ${({
    theme,
    responsive,
    gap,
    direction,
    wrap,
    alignItems,
    justifyContent,
    alignContent,
  }) =>
    responsive?.md &&
    css`
      @media only screen and (max-width: ${theme.screenSize.md}) {
        ${`gap: ${responsive.md?.gap || gap}`};
        ${`flex-direction: ${responsive.md?.direction || direction}`};
        ${`flex-wrap: ${responsive.md?.wrap || wrap}`};
        ${`align-items: ${responsive.md?.alignItems || alignItems}`};
        ${`justify-content: ${
          responsive.md?.justifyContent || justifyContent
        }`};
        ${`align-content: ${responsive.md?.alignContent || alignContent}`};
      }
    `}

  ${({
    theme,
    responsive,
    gap,
    direction,
    wrap,
    alignItems,
    justifyContent,
    alignContent,
  }) =>
    responsive?.sm &&
    css`
      @media only screen and (max-width: ${theme.screenSize.sm}) {
        ${`gap: ${responsive.sm?.gap || gap}`};
        ${`flex-direction: ${responsive.sm?.direction || direction}`};
        ${`flex-wrap: ${responsive.sm?.wrap || wrap}`};
        ${`align-items: ${responsive.sm?.alignItems || alignItems}`};
        ${`justify-content: ${
          responsive.sm?.justifyContent || justifyContent
        }`};
        ${`align-content: ${responsive.sm?.alignContent || alignContent}`};
      }
    `}

  ${({
    theme,
    responsive,
    gap,
    direction,
    wrap,
    alignItems,
    justifyContent,
    alignContent,
  }) =>
    responsive?.xs &&
    css`
      @media only screen and (max-width: ${theme.screenSize.xs}) {
        ${`gap: ${responsive.xs?.gap || gap}`};
        ${`flex-direction: ${responsive.xs?.direction || direction}`};
        ${`flex-wrap: ${responsive.xs?.wrap || wrap}`};
        ${`align-items: ${responsive.xs?.alignItems || alignItems}`};
        ${`justify-content: ${
          responsive.xs?.justifyContent || justifyContent
        }`};
        ${`align-content: ${responsive.xs?.alignContent || alignContent}`};
      }
    `}

  ${({
    theme,
    responsive,
    gap,
    direction,
    wrap,
    alignItems,
    justifyContent,
    alignContent,
  }) =>
    responsive?.xxs &&
    css`
      @media only screen and (max-width: ${theme.screenSize.xxs}) {
        ${`gap: ${responsive.xxs?.gap || gap}`};
        ${`flex-direction: ${responsive.xxs?.direction || direction}`};
        ${`flex-wrap: ${responsive.xxs?.wrap || wrap}`};
        ${`align-items: ${responsive.xxs?.alignItems || alignItems}`};
        ${`justify-content: ${
          responsive.xxs?.justifyContent || justifyContent
        }`};
        ${`align-content: ${responsive.xxs?.alignContent || alignContent}`};
      }
    `}

  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ direction }) => direction && `flex-direction: ${direction}`};
  ${({ wrap }) => wrap && `flex-wrap: ${wrap}`};
  ${({ zIndex }) => zIndex && `z-index: ${zIndex}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`;
