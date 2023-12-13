import { ContainerAlignment } from "../Container/ContainerAlignment";
import { ContainerType } from "../Container/ContainerType";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import Picture from "../Picture/Picture";
import "./Gallery.scss";

type ImageProps = {
  id: string;
  alt: string;
  size?: string;
}

type Props = {
  id?: string;
  headline: string;
  imageList: Array<ImageProps>;
  background?: string;
  color?: string;
  container: ContainerType;
  alignment?: ContainerAlignment;
}

const Gallery = ({ id, headline, imageList, background, color, container, alignment }: Props) => {
  return (
    <>
      <Wrapper id={id} background={background} color={color} className="gallery">
        <Container container={container} alignment={alignment}>
          <div className="gallery-wrapper">
            {headline && (<h2 className="headline">{headline}</h2>)}

            <div className="gallery-image-wrapper">
              {imageList.map(image => {
                return (
                  <>
                    <Picture id={image.id} alt={image.alt} size={image.size} />
                  </>
                )
              })}
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  )
}

export default Gallery
