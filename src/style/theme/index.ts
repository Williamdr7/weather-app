import { IThemeOption } from "@/contexts/AppSettingsContext";
import { ITheme } from "../types/theme";
import { DarkColors, LightColors } from "./_colors";
import { Spacing } from "./_spacing";
import Typography from "./_typography";

export const getTheme: (theme: IThemeOption) => ITheme = (
  theme: IThemeOption
) => {
  const themeProps = {
    colors: theme === "dark" ? DarkColors : LightColors,
    spacing: Spacing,
    typography: Typography,
  };

  return themeProps;
};
