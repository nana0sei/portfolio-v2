import { Artwork } from "../entities/Artwork";
import { AdvancedImage } from "@cloudinary/react";
import useCloudinary from "../lib/useCloudinary";

interface Props {
  art: Artwork;
}
const ArtCard = ({ art }: Props) => {
  const { image } = useCloudinary(art.url);
  return (
    <>
      <div
        className="rounded-lg dark:bg-white hover:scale-95 transition-transform overflow-clip cursor-pointer"
        onClick={() => {
          //@ts-expect-error: issue with daisy ui. works anyway
          document.getElementById(`modal-${art.url}`)!.showModal();
        }}
      >
        <AdvancedImage cldImg={image} />
      </div>{" "}
      {/* dialog */}
      <dialog id={`modal-${art.url}`} className="modal">
        <div className="modal-box space-y-1 p-2 dark:bg-white dark:text-black">
          <AdvancedImage cldImg={image} />
          <p className="text-center italic">{art.description}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ArtCard;
