import portfolio from "../assets/portfolio.png";
import spotify from "../assets/spotify.png";
import { Project } from "../entities/Project";

const projects: Project[] = [
  {
    name: "portfolio",
    description:
      "here. the image in the middle shows the songs i've been listening to",
    image: portfolio,
    link: "https://nana-osei.vercel.app/",
    git: "https://github.com/nana0sei/portfolio-v2",
    tools: "react, typescript, tailwind",
  },

  {
    name: "vidly",
    description: "rest api and tests for a movie rental service.",
    image: "",
    link: "",
    git: "https://github.com/nana0sei/vidly",
    tools: "node.js, express, mongodb, jest",
  },

  {
    name: "spotify lite",
    description: "search, view new releases. will rebuild soon",
    image: spotify,
    link: "https://spotify-lite.vercel.app/",
    git: "https://github.com/nana0sei/spotify-lite",
    tools: "react, typescript, spotify api",
  },
];

export default projects;
