import portfolio from "../assets/portfolio.png";
import fhq from "../assets/fhq.png";
import loangrid from "../assets/loangrid.png";
import lseza from "../assets/lseza.png";

import { Project } from "../entities/Project";

const projects: Project[] = [
  {
    name: "loangrid",
    description:
      "a powerful credit scoring engine designed for financial institutions, government programs, and development partners to assess creditworthiness of beneficiaries quickly and accurately. built for scalability and easy integration, the system enables responsible lending, minimizes risk, and promotes financial inclusion for underserved populations.",
    image: loangrid,
    link: "https://logicielghana.com/platorms/platforms/loangrid",
    git: "",
    tools: ["nextjs", "tailwind", "shadcn/ui"],
  },

  {
    name: "lseza license application portal",
    description:
      "a web app that allows users to apply for and manage special economic zone licenses in liberia.",
    image: lseza,
    link: "https://liberiaseza.gov.lr/",
    git: "",
    tools: ["nextjs", "tailwind", "hero ui"],
  },

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
