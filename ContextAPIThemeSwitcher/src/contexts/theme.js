import { createContext, useContext } from "react";

// Step1: create ThemeContext with default values
export const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

// Step2: set context provider
export const ThemeProvider = ThemeContext.Provider;

// Step3: set useContext with ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};
