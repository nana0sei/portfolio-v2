import { Link } from "react-router-dom";
import art from "../assets/art.png";
import dev from "../assets/dev.png";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-1 text-center">
        {/* title */}
        <div className="text-4xl font-bold">
          hi, my name is <span className="italic text-yellow-400">nana.</span>{" "}
          i'm a <span className="italic text-blue-400">software engineer</span>{" "}
          and a <span className="italic text-blue-400">digital artist.</span>
        </div>

        {/* subtitle */}
        <p>
          click on any of the categories below to check out my work in each
          field!
        </p>

        {/* links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-32">
          {links.map((link) => (
            <Link to={link.href} key={link.href}>
              <img
                src={link.icon}
                alt="link icon"
                className="w-[600px] hover:scale-90 transition-transform"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;

const links = [
  { href: "/dev", icon: dev },
  { href: "/art", icon: art },
];
