import { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
import logoB from "../assets/logoB.png";
import logoW from "../assets/logoW.png";

const Navbar = () => {
  const localTheme = localStorage.getItem("portfolio-theme") || "light";
  const [theme, setTheme] = useState(localTheme);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex justify-between items-center sticky top-0 p-3 mb-5 bg-base-100">
      <Link to="/">
        <img
          src={theme === "light" ? logoB : logoW}
          alt="nana icon"
          width="48px"
        />
      </Link>
      {/* theme switch */}
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
      </div>{" "}
    </div>
  );
};

export default Navbar;
