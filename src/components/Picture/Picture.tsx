import apiService from "../../utils/apiService";
import Image from "../Image/Image";

type Props = {
  id: string;
  alt: string;
  props?: object;
}

const Picture = ({ id, alt, props }: Props) => {
  const assetUrlFull = apiService().getAssetsById({ id: id })
  const assetUrlXxl = apiService().getAssetsById({ id: id })
  const assetUrlXl = apiService().getAssetsById({ id: id })
  const assetUrlLg = apiService().getAssetsById({ id: id })
  const assetUrlMd = apiService().getAssetsById({ id: id })
  const assetUrlSm = apiService().getAssetsById({ id: id })

  return (
    <>
      <picture {...props}>
        <source media="(min-width: 1536px)" srcSet={assetUrlFull.href + '/1920/1080.jpg'} />
        <source media="(min-width: 1280px)" srcSet={assetUrlXxl.href + '/1536/864.jpg'} />
        <source media="(min-width: 1024px)" srcSet={assetUrlXl.href + '/1280/720.jpg'} />
        <source media="(min-width: 768px)" srcSet={assetUrlLg.href + '/1024/576.jpg'} />
        <source media="(min-width: 640px)" srcSet={assetUrlMd.href + '/768/432.jpg'} />
        <source srcSet={assetUrlSm.href + '/640/360.jpg'} />
        
        <Image id={id} alt={alt} width={640} height={360} />
      </picture>
    </>
  )
}

export default Picture
