import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="flex flex-col items-center w-full p-2 sticky bottom-0  bg-base-100 z-10">
        <div className="divider">© {year} Nana Osei</div>
        <div className="flex items-center justify-center gap-2">
          {links.map((link) => (
            <Link to={link.href} target="_blank" key={link.href}>
              {link.icon}
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;

const links = [
  { href: "mailto:frimpongnanao@gmail.com", icon: <IoIosMail size="30px" /> },
  { href: "https://github.com/nana0sei/", icon: <AiFillGithub size="25px" /> },
  {
    href: "https://instagram.com/nana0sei/",
    icon: <FaInstagram size="25px" />,
  },
];
