import { token } from "../tokens";
import { IFontSize, IFontWeight } from "../types/typography";

const FontFamily = '"Inter", sans-serif';

const FontWeight: IFontWeight = {
  black: token.fontBlack,
  extraBold: token.fontExtraBold,
  bold: token.fontBold,
  semiBold: token.fontSemibold,
  medium: token.fontMedium,
  regular: token.fontRegular,
  light: token.fontLight,
  extraLight: token.fontExtraLight,
  thin: token.fontThin,
};

const DesktopSize: IFontSize = {
  h1: {
    size: token.heading1,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading1,
  },
  h2: {
    size: token.heading2,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading2,
  },
  h3: {
    size: token.heading3,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading3,
  },
  h4: {
    size: token.heading4,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading4,
  },
  h5: {
    size: token.heading5,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading5,
  },
  h6: {
    size: token.heading6,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading6,
  },
  bodyLarge: {
    size: token.lineHeightParagraphLarge,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading1,
  },
  bodyMedium: {
    size: token.paragraphMedium,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightParagraphMedium,
  },
  bodySmall: {
    size: token.paragraphSmall,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightParagraphSmall,
  },
  bodyExtraSmall: {
    size: token.paragraphExtraSmall,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightParagraphExtraSmall,
  },
  bodyTiny: {
    size: token.paragraphTiny,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightParagraphTiny,
  },
  labelExtraLarge: {
    size: token.labelExtraLarge,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightLabelExtraLarge,
  },
  labelLarge: {
    size: token.labelLarge,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightLabelLarge,
  },
  labelMedium: {
    size: token.labelMedium,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightLabelMedium,
  },
  labelSmall: {
    size: token.labelSmall,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightLabelSmall,
  },
  labelExtraSmall: {
    size: token.labelExtraSmall,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightLabelExtraSmall,
  },
  labelTiny: {
    size: token.labelTiny,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightLabelTiny,
  },
};

const MobileSize: IFontSize = {
  h1: {
    size: token.heading1Mobile,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading1Mobile,
  },
  h2: {
    size: token.heading2Mobile,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading2Mobile,
  },
  h3: {
    size: token.heading3Mobile,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading3Mobile,
  },
  h4: {
    size: token.heading4Mobile,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading4Mobile,
  },
  h5: {
    size: token.heading5Mobile,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading5Mobile,
  },
  h6: {
    size: token.heading6Mobile,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightHeading6Mobile,
  },
  bodyLarge: {
    size: token.paragraphLarge,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightParagraphLarge,
  },
  bodyMedium: {
    size: token.paragraphMedium,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightParagraphMedium,
  },
  bodySmall: {
    size: token.paragraphSmall,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightParagraphSmall,
  },
  bodyExtraSmall: {
    size: token.paragraphExtraSmall,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightParagraphExtraSmall,
  },
  bodyTiny: {
    size: token.paragraphTiny,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightParagraphTiny,
  },
  labelExtraLarge: {
    size: token.labelExtraLarge,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightLabelExtraLarge,
  },
  labelLarge: {
    size: token.labelLarge,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightLabelLarge,
  },
  labelMedium: {
    size: token.labelMedium,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightLabelMedium,
  },
  labelSmall: {
    size: token.labelSmall,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightLabelSmall,
  },
  labelExtraSmall: {
    size: token.labelExtraSmall,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightLabelExtraSmall,
  },
  labelTiny: {
    size: token.labelTiny,
    letterSpacing: "-0.025em",
    lineHeight: token.lineHeightLabelTiny,
  },
};

export default {
  fontFamily: FontFamily,
  weight: FontWeight,
  size: {
    desktop: DesktopSize,
    mobile: MobileSize,
  },
};
