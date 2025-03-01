import { Artwork } from "../entities/Artwork";

interface Props {
  art: Artwork;
}
const ArtCard = ({ art }: Props) => {
  return (
    <div>
      <img
        src={art.image}
        alt={art.description}
        className="rounded-lg dark:bg-white"
      />
    </div>
  );
};

export default ArtCard;
