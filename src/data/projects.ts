import portfolio from "../assets/portfolio.png";
import { Project } from "../entities/Project";

const projects: Project[] = [
  {
    name: "portfolio",
    description:
      "here. the image in the middle shows the songs i've been listening to",
    image: portfolio,
    link: "https://nana-osei.vercel.app/",
    git: "https://github.com/nana0sei/portfolio-v2",
    tools: "react, typescript, tailwind, cloudinary",
  },

  {
    name: "vidly",
    description: "rest api and tests for an imaginary movie rental service.",
    image: "",
    link: "",
    git: "https://github.com/nana0sei/vidly",
    tools: "node.js, express, mongodb, jest",
  },
];

export default projects;
