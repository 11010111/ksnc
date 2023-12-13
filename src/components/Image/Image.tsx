import useImagePreloader from "../../hooks/useImagePreloader";
import apiService from "../../utils/apiService";

type Props = {
  id: string;
  alt: string;
  size?: string;
}

const Image = ({ id, alt, size }: Props) => {
  const { isLoaded } = useImagePreloader({ imageList: [{ id, size, alt }] });
  const assetURL = apiService().getAssetsById({ id, size})

  return (
    <>
      {isLoaded && (
        <img
          src={assetURL.href}
          alt={alt}
          width={640}
          height={380}
        />
      )}
    </>
  )
}

export default Image
