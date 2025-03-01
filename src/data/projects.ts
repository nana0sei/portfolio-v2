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
    name: "vidly",
    description: "rest api and tests for an imaginary movie rental service.",
    image: "",
    link: "",
    git: "https://github.com/nana0sei/vidly",
    tools: "node.js, express, mongodb, jest",
  },
];

export default projects;
