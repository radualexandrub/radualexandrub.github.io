import React, { useState } from "react";

export default function DarkModeToggle() {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", "light");
      setChecked(false);
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", "dark");
      setChecked(true);
      theme = darkTheme;
    }
  };

  return (
    <div className="theme-switch-wrapper nav-item">
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          checked={checked}
          id="checkbox"
          onChange={(e) => switchTheme(e)}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
}
