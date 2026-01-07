import { Link } from "react-router-dom";
import art from "../assets/art.png";
import dev from "../assets/dev.png";

const HomePage = () => {
  return (
    <>
      <div className="space-y-3 pb-32">
        <div className="flex flex-col justify-center items-center space-y-1 text-center">
          {/* title */}
          <div className="text-xl md:text-4xl font-bold">
            hi, my name is <span className="italic text-yellow-400">nana.</span>{" "}
            i'm a{" "}
            <span className="italic text-blue-400">software engineer</span> and
            a <span className="italic text-blue-400">digital artist.</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {links.map((link) => (
            <div className="flex justify-center" key={link.href}>
              <Link to={link.href}>
                <img
                  src={link.icon}
                  alt="link icon"
                  className="w-[250px] md:w-[600px] hover:scale-90 transition-transform"
                />
              </Link>
            </div>
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
