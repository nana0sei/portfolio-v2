import { Carousel } from "react-responsive-carousel";
import art from "../assets/arttitle.png";
import dev from "../assets/devtitle.png";
import DevCard from "../components/DevCard";
import projects from "../data/projects";
import photos from "../data/photos";
import { Suspense } from "react";
import ArtCard from "../components/ArtCard";

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
        <div className="space-y-2">
          <img src={dev} className="w-[150px] md:w-[350px]" />

          <Carousel
            autoPlay
            swipeable
            emulateTouch
            infiniteLoop
            showStatus={false}
            showIndicators={false}
          >
            {projects.map((project) => (
              <DevCard project={project} key={project.name} />
            ))}
          </Carousel>
        </div>

        <div className="space-y-2">
          <img src={art} className="w-[150px] md:w-[350px]" />

          <Carousel
            autoPlay
            swipeable
            emulateTouch
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            centerMode
            centerSlidePercentage={80}
          >
            {photos.slice(0, 5).map((artwork, index) => (
              <div key={index} className="rounded-lg">
                <Suspense fallback={<div className="skeleton h-72 w-full" />}>
                  <ArtCard art={artwork} key={artwork.description} />
                </Suspense>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default HomePage;
