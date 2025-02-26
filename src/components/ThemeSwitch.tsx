import { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const localTheme = localStorage.getItem("portfolio-theme") || "light";
  const [theme, setTheme] = useState(localTheme);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="flex items-center gap-1">
        <input
          type="checkbox"
          className="toggle toggle-info"
          checked={theme === "light"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        {theme === "light" ? (
          <BsSun size="20px" />
        ) : (
          <BsFillMoonFill size="15px" />
        )}
      </div>
    </>
  );
};

export default ThemeSwitch;
