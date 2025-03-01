import portfolio from "../assets/portfolio.png";
import spotify from "../assets/spotify.png";
import { Project } from "../entities/Project";

const projects: Project[] = [
  {
    name: "spotify lite",
    description: "search, browse featured playlists and play previews.",
    image: spotify,
    link: "https://spotify-lite.vercel.app/",
    git: "https://github.com/nana0sei/spotify-lite",
    tools: "react, typescript, spotify api, chakra ui",
  },

  {
    name: "portfolio",
    description: "the website you're currently on.",
    image: portfolio,
    link: "https://nana-osei.vercel.app/",
    git: "https://github.com/nana0sei/portfolio",
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
