import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type IThemeOption = "dark" | "light";

interface AppSettingsContextType {
  theme: IThemeOption;
  setTheme: Dispatch<SetStateAction<IThemeOption>>;
}

interface AppSettingsContextProps {
  children: ReactNode;
}

export const AppSettingsContext = createContext({} as AppSettingsContextType);

export function AppSettingsContextProvider({
  children,
}: AppSettingsContextProps) {
  const [theme, setTheme] = useState<IThemeOption>("dark");

  return (
    <AppSettingsContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
}
