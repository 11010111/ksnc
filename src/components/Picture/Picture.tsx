import Image from "../Image/Image";

type Props = {
  imgId: string;
  alt: string;
  size?: string;
}

const Picture = ({ imgId, alt, size }: Props) => {
  const apiUrl = import.meta.env.VITE_API_ASSETS_URL

  return (
    <>
      <picture>
        <source media="(min-width: 1536px)" srcSet={`${apiUrl}/${imgId}?key=full`} />
        <source media="(min-width: 1280px)" srcSet={`${apiUrl}/${imgId}?key=xxl`} />
        <source media="(min-width: 1024px)" srcSet={`${apiUrl}/${imgId}?key=xl`} />
        <source media="(min-width: 768px)" srcSet={`${apiUrl}/${imgId}?key=lg`} />
        <source media="(min-width: 640px)" srcSet={`${apiUrl}/${imgId}?key=md`} />
        <source srcSet={`${apiUrl}/${imgId}?key=sm`} />
        
        <Image imgId={imgId} alt={alt} size={size} />
      </picture>
    </>
  )
}

export default Picture
