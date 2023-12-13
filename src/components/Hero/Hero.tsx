import { ContainerType } from "../Container/ContainerType"
import Wrapper from "../Wrapper/Wrapper"
import Container from "../Container/Container"
import Image from "../Image/Image"
import BackgroundPattern from "../BackgroundPattern/BackgroundPattern"
import "./Hero.scss"
import { ReactNode } from "react"

type Props = {
  id?: string;
  children: ReactNode | ReactNode[];
  data: {
    imgId: string;
    alt: string;
    size?: string;
  }
}

const Hero = ({ id, children, data }: Props) => {
  return (
    <>
      <Wrapper id={id} className="hero">
        <Container container={ContainerType.CONTAINER} className="container-py hero-wrapper">
          <div className="text">
            {children}
          </div>

          <div className="image">
            <Image imgId={data.imgId} alt={data.alt} size={data.size} />
          </div>
        </Container>

        <BackgroundPattern />
      </Wrapper>
    </>
  )
}

export default Hero
