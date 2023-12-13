import useImagePreloader from "../../hooks/useImagePreloader"

type Props = {
  imgId: string;
  alt: string;
  size?: string;
}

const Image = ({ imgId, alt, size }: Props) => {
  const { isLoaded } = useImagePreloader({ imageList: [{ imgId, size, alt }] })

  return (
    <>
      {isLoaded && (
        <img
          src={`${import.meta.env.VITE_API_ASSETS_URL}/${imgId}${size ? '?key=' + size : ''}`}
          alt={alt}
          width={640}
          height={380}
        />
      )}
    </>
  )
}

export default Image
