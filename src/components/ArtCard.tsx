import { Artwork } from "../entities/Artwork";
import { AdvancedImage } from "@cloudinary/react";
import useCloudinary from "../lib/useCloudinary";

interface Props {
  art: Artwork;
}
const ArtCard = ({ art }: Props) => {
  const { image } = useCloudinary(art.url);
  return (
    <div className="rounded-lg dark:bg-white">
      <AdvancedImage cldImg={image} />
    </div>
  );
};

export default ArtCard;
