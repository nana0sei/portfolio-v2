import portfolio from "../assets/portfolio.png";
import fhq from "../assets/fhq.png";

import { Project } from "../entities/Project";

const projects: Project[] = [
  {
    name: "faith hq",
    description:
      "a comprehensive church management solution built for modern religious institutions. designed to simplify administration and enhance community connection, faith hq empowers churches to operate efficiently, grow sustainably, and deepen their impact.",
    image: fhq,
    link: "https://www.logicielghana.com/platorms/platforms/fathhq",
    git: "",
    tools: ["nextjs", "tailwind"],
  },
  {
    name: "portfolio",
    description: "here.",
    image: portfolio,
    link: "https://www.nanaosei.xyz",
    git: "",
    tools: ["react", "typescript", "tailwind"],
  },

  {
    name: "vidly",
    description: "rest api and tests for a fictional movie rental service.",
    image: "",
    link: "",
    git: "https://github.com/nana0sei/vidly",
    tools: ["node.js", "express", "mongodb", "jest"],
  },
];

export default projects;
