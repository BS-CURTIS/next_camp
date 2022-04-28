import React, { createContext } from "react";
import { darkTheme, lightTheme, Theme } from "../component/styles/theme";
import type { AppProps } from "next/app";
import Layout from "../component/layout/layout";
import GlobalStyle from "../component/styles/global";
import { useDarkMode } from "../hooks/useDarkMode";

interface ContextProps {
  theme: Theme;
  toggleTheme: () => void;
  inputValue?: string | null;
}

export const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,
  toggleTheme: () => {
    return null;
  },
  inputValue: "theme",
});
function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme, inputValue } = useDarkMode();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, inputValue }}>
      <GlobalStyle theme={theme === lightTheme ? lightTheme : darkTheme} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default MyApp;
