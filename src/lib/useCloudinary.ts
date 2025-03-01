import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const useCloudinary = (imageUrl: string) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
  });

  const image = cld.image(imageUrl);
  image.resize(fill().width(250).height(250));

  return { image };
};

export default useCloudinary;
