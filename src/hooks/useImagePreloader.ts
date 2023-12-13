import { useEffect, useState } from "react";

type Props = {
  imgId: string;
  alt: string;
  size?: string;
}

type ListProps = {
  imageList: Props[];
}

const useImagePreloader = ({ imageList }: ListProps) => {
  const [isLoaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    const loadImage = (img: Props) => {
      return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = `${import.meta.env.VITE_API_ASSETS_URL}/${img.imgId}${img.size ? '?key=' + img.size : '?key=sm'}`
        image.alt = img.alt

        image.onload = () => {
          resolve(img.imgId)
        }

        image.onerror = (err) => {
          reject(err)
        }
      })
    }

    Promise.all(imageList.map(img => loadImage(img)))
      .then(() => {
        setLoaded(true)
      })
      .catch(err => {
        console.warn(err)
      })
  })

  return { isLoaded }
}

export default useImagePreloader
