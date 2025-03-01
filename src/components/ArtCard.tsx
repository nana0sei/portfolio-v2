import { Artwork } from "../entities/Artwork";

interface Props {
  art: Artwork;
}
const ArtCard = ({ art }: Props) => {
  return (
    <div>
      <img src={art.image} alt={art.description} className="rounded-lg" />
    </div>
  );
};

export default ArtCard;
