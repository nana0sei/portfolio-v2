import art from "../assets/arttitle.png";
import { lazy, Suspense } from "react";
const ArtCard = lazy(() => import("../components/ArtCard"));
import photos from "../data/photos";

const ArtPage = () => {
  return (
    <>
      <div className="h-screen space-y-2">
        <div className="flex justify-center">
          <img src={art} className="w-[150px] md:w-[350px]" alt="my art" />
        </div>

        {/* content */}
        <div className="columns-3 gap-2 pb-32">
          {photos.map((artwork, index) => (
            <div key={index} className="mb-2 break-inside-avoid rounded-lg ">
              <Suspense fallback={<div className="skeleton h-72 w-full" />}>
                <ArtCard art={artwork} key={artwork.description} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtPage;
