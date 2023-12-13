import apiService from "../../utils/apiService";
import Image from "../Image/Image";

type Props = {
  id: string;
  alt: string;
  size?: string;
}

const Picture = ({ id, alt, size }: Props) => {
  const assetUrlFull = apiService().getAssetsById({ id: id, size: 'full' })
  const assetUrlXxl = apiService().getAssetsById({ id: id, size: 'xxl' })
  const assetUrlXl = apiService().getAssetsById({ id: id, size: 'xl' })
  const assetUrlLg = apiService().getAssetsById({ id: id, size: 'lg' })
  const assetUrlMd = apiService().getAssetsById({ id: id, size: 'md' })
  const assetUrlSm = apiService().getAssetsById({ id: id, size: 'sm' })

  return (
    <>
      <picture>
        <source media="(min-width: 1536px)" srcSet={assetUrlFull.href} />
        <source media="(min-width: 1280px)" srcSet={assetUrlXxl.href} />
        <source media="(min-width: 1024px)" srcSet={assetUrlXl.href} />
        <source media="(min-width: 768px)" srcSet={assetUrlLg.href} />
        <source media="(min-width: 640px)" srcSet={assetUrlMd.href} />
        <source srcSet={assetUrlSm.href} />
        
        <Image id={id} alt={alt} size={size} />
      </picture>
    </>
  )
}

export default Picture
