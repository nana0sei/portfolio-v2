import ArtCard from "../components/ArtCard";
import photos from "../data/photos";
import art from "../assets/arttitle.png";

const ArtPage = () => {
  return (
    <>
      <div className="h-screen space-y-2">
        <div className="flex justify-center">
          <img src={art} width="350px" />
        </div>

        {/* content */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-2 pb-32">
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
