import { useEffect, useState } from "react";

const ColorModeSwitch = () => {
  const localTheme = localStorage.getItem("portfolio-theme") || "light";
  const [theme, setTheme] = useState(localTheme);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <input
        type="checkbox"
        className="toggle"
        checked={theme === "light"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </>
  );
};

export default ColorModeSwitch;
