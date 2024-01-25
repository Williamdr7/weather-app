import { ITypography } from "./typography";
import { IColor } from "./color";
import { ISpacing } from "./spacing";
import "styled-components";

export interface ITheme {
  colors: IColor;
  spacing: ISpacing;
  typography: ITypography;
}
