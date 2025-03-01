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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-32">
          {photos.map((artwork) => (
            <ArtCard art={artwork} key={artwork.description} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtPage;
