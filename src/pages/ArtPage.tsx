import { lazy, Suspense } from "react";
import photos from "../data/photos";
const ArtCard = lazy(() => import("../components/ArtCard"));
import Masonry from "react-masonry-css";

const ArtPage = () => {
  return (
    <>
      <div className="h-screen space-y-2">
        {/* <div className="flex justify-center">
          <img src={art} className="w-[150px] md:w-[350px]" alt="my art" />
        </div> */}

        {/* content */}
        {/* <div className="columns-3 gap-2 pb-32">
          {photos.map((artwork, index) => (
            <div key={index} className="mb-2 break-inside-avoid rounded-lg ">
              <Suspense fallback={<div className="skeleton h-72 w-full" />}>
                <ArtCard art={artwork} key={artwork.description} />
              </Suspense>
            </div>
          ))}
        </div> */}

        <Masonry
          breakpointCols={3}
          className="flex gap-2 pb-32"
          columnClassName="space-y-2"
        >
          {photos.map((artwork, index) => (
            <div key={index} className="rounded-lg">
              <Suspense fallback={<div className="skeleton h-72 w-full" />}>
                <ArtCard art={artwork} key={artwork.description} />
              </Suspense>
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default ArtPage;
