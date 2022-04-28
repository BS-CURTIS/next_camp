import React, { useContext, useState } from "react";
import { ThemeContext } from "../../pages/_app";
import { ModeBox } from "../styles/styled";
import { lightTheme } from "../styles/theme";

const DarkModeToggle = () => {
  const { theme, toggleTheme, inputValue } = useContext(ThemeContext);

  return (
    <ModeBox theme={theme} onChange={toggleTheme}>
      <input type="checkbox" id="checkbox" value={inputValue || ""} />
      <label htmlFor="checkbox">
        <span></span>
      </label>
    </ModeBox>
  );
};

export default DarkModeToggle;
