import { ContainerType } from "../Container/ContainerType"
import Wrapper from "../Wrapper/Wrapper"
import Container from "../Container/Container"
import Image from "../Image/Image"
import BackgroundPattern from "../BackgroundPattern/BackgroundPattern"
import "./Hero.scss"

type TextProps = {
  headline: string;
  bodytext?: string;
}

type ImageProps = {
  id: string;
  alt: string;
  size?: string;
}

type Props = {
  id?: string;
  textData: TextProps;
  imageData: ImageProps;
}

const Hero = ({ id, textData, imageData }: Props) => {
  const { headline, bodytext } = textData
  
  return (
    <>
      <Wrapper id={id} className="hero">
        <Container container={ContainerType.CONTAINER} className="container-py hero-wrapper">
          <div className="text">
            <h1>{headline}</h1>
            {bodytext && (
              <p>{bodytext}</p>
            )}
          </div>

          <div className="image">
            <Image id={imageData.id} alt={imageData.alt} size={imageData.size} />
          </div>
        </Container>

        <BackgroundPattern />
      </Wrapper>
    </>
  )
}

export default Hero
