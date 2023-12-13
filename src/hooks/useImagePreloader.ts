import { useEffect, useState } from "react";
import apiService from "../utils/apiService";

type Props = {
  id: string;
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
        image.src = apiService().getAssetsById({ id: img.id, size: img.size }).href
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
