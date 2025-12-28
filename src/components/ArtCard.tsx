import { Artwork } from "../entities/Artwork";
import { AdvancedImage } from "@cloudinary/react";
import useCloudinary from "../hooks/useCloudinary";

interface Props {
  art: Artwork;
}
const ArtCard = ({ art }: Props) => {
  const { image } = useCloudinary(art.url);
  return (
    <>
      <div
        className="bg-white hover:scale-95 transition-transform overflow-clip cursor-pointer"
        onClick={() => {
          //@ts-expect-error: issue with daisy ui. works anyway
          document.getElementById(`modal-${art.url}`)!.showModal();
        }}
      >
        <AdvancedImage cldImg={image} />
      </div>{" "}
      {/* dialog */}
      <dialog id={`modal-${art.url}`} className="modal">
        <div className="modal-box space-y-1 p-2 bg-white dark:text-black">
          <AdvancedImage cldImg={image} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ArtCard;
