import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const cld = new Cloudinary({
  cloud: {
    cloudName,
  },
});

const useCloudinary = (imageUrl: string) => {
  const image = cld.image(imageUrl);
  image.resize(fill());

  return { image };
};

export default useCloudinary;

const getImageList = async () => {
  const url = `https://res.cloudinary.com/${cloudName}/image/list/tie.json`;
  const { data } = await axios.get(url);
  return data;
};

export const useImages = () =>
  useQuery({
    queryKey: ["images"],
    queryFn: () => getImageList(),
  });
