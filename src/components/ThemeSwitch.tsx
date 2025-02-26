import { useEffect, useState } from "react";

const ThemeSwitch = () => {
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
        className="toggle bg-blue-300"
        checked={theme === "light"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </>
  );
};

export default ThemeSwitch;
