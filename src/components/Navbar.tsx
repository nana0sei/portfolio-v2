import logoB from "../assets/logoB.png";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 p-3 mb-5 bg-base-100">
      <img src={logoB} alt="nana icon" className="w-12" />

      <ThemeSwitch />
    </div>
  );
};

export default Navbar;
