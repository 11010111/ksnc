import useImagePreloader from "../../hooks/useImagePreloader";
import apiService from "../../utils/apiService";

type Props = {
  id: string;
  alt: string;
  width?: number;
  height?: number;
}

const Image = ({ id, alt, width, height }: Props) => {
  const { isLoaded } = useImagePreloader({ imageList: [{ id, alt, width, height }] });
  const assetURL = apiService().getAssetsById({ id })

  if (width && height) {
    return (
      <>
        {isLoaded && (
          <img
            src={assetURL.href + `/${width}/${height}`}
            alt={alt}
            width={width}
            height={height}
          />
        )}
      </>
    )
  }

  return (
    <>
      {isLoaded && (
        <img
          src={assetURL.href + `/${640}/${360}`}
          alt={alt}
          width={640}
          height={380}
        />
      )}
    </>
  )
}

export default Image
