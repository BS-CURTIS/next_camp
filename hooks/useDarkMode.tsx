import { useEffect, useState } from "react";
import { lightTheme, darkTheme, Theme } from "../component/styles/theme";

export const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const setMode = (mode: Theme) => {
    mode === lightTheme
      ? window.localStorage.setItem("theme", "light")
      : window.localStorage.setItem("theme", "dark");
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
  };

  const inputValue = "1";

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme !== null) {
      if (localTheme === "dark") {
        setTheme(darkTheme);
      } else {
        setTheme(lightTheme);
      }
    }
  }, []);

  return { theme, toggleTheme, inputValue };
};
