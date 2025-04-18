import art from "../assets/arttitle.png";
import ArtCard from "../components/ArtCard";
import photos from "../data/photos";

const ArtPage = () => {
  return (
    <>
      <div className="h-screen space-y-2">
        <div className="flex justify-center">
          <img src={art} className="w-[150px] md:w-[350px]" />
        </div>

        {/* content */}
        <div className="columns-2 lg:columns-3 gap-2 pb-32">
          {photos.map((artwork, index) => (
            <div key={index} className="mb-2 break-inside-avoid rounded-lg ">
              <ArtCard art={artwork} key={artwork.description} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtPage;
