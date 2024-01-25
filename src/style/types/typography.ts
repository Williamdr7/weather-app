export type TFontSize =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall"
  | "bodyExtraSmall"
  | "bodyTiny"
  | "labelExtraLarge"
  | "labelLarge"
  | "labelMedium"
  | "labelSmall"
  | "labelExtraSmall"
  | "labelTiny";
export interface IFontSize {
  h1: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  h2: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  h3: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  h4: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  h5: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  h6: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  bodyLarge: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  bodyMedium: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  bodySmall: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  bodyExtraSmall: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  bodyTiny: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  labelExtraLarge: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  labelLarge: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  labelMedium: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  labelSmall: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  labelExtraSmall: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
  labelTiny: {
    size: string;
    letterSpacing: string;
    lineHeight: string;
  };
}

export interface IFontWeight {
  [key: string]: string;
}

export type TFontWeight =
  | "black"
  | "extraBold"
  | "bold"
  | "semiBold"
  | "medium"
  | "regular"
  | "light"
  | "extraLight"
  | "thin";

export interface ITypography {
  fontFamily: string;
  weight: IFontWeight;
  size: {
    desktop: IFontSize;
    mobile: IFontSize;
  };
}
