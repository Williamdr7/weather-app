import { AppSettingsContext } from "@/contexts/AppSettingsContext";
import { getTheme } from "@/style/theme";
import { ReactNode, useContext } from "react";
import { ThemeProvider } from "styled-components";

type AppThemeProps = {
  children: ReactNode;
};

export default function AppTheme({ children }: AppThemeProps) {
  const { theme } = useContext(AppSettingsContext);
  return <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>;
}
