import { useEffect, useState } from "react";
import apiService from "../utils/apiService";

type Props = {
  id: string;
  alt: string;
  width?: number;
  height?: number;
}

type ListProps = {
  imageList: Props[];
}

const useImagePreloader = ({ imageList }: ListProps) => {
  const [isLoaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    const loadImage = (img: Props) => {
      return new Promise((resolve, reject) => {
        const imgSize = img.width && img.height ? `/${img.width}/${img.height}` : ''
        const imgSrc = apiService().getAssetsById({ id: img.id }).href
        const image = new Image()
        image.src = imgSrc + imgSize
        image.alt = img.alt

        image.onload = () => {
          resolve(img.id)
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
        console.error('Failed to load asset', err)
      })
  })

  return { isLoaded }
}

export default useImagePreloader
