import { ContainerType } from "../../components/Container/ContainerType"
import { ContainerAlignment } from "../../components/Container/ContainerAlignment"
import Hero from "../../components/Hero/Hero"
import Text from "../../components/Text/Text"
import Wrapper from "../../components/Wrapper/Wrapper"
import Container from "../../components/Container/Container"
import Picture from "../../components/Picture/Picture"
import Gallery from "../../components/Gallery/Gallery"
import data from "../../utils/data.json"

const Home = () => {
  return (
    <>
      <Hero id="c01" {...data} />

      <Text
        {...data}
        id="c02"
        className="w-600 text-center"
        container={ContainerType.CONTAINER}
        alignment={ContainerAlignment.CENTER}
        background="#f8f8f8"
      />

      <Text
        {...data}
        id="c03"
        className="w-800"
        container={ContainerType.CONTAINER}
      />

      <Wrapper id="c04" background="#f8f8f8">
        <Container container={ContainerType.CONTAINER}>
          <Picture id="112" alt="Image 1" props={{ className: 'img-full'}} />
        </Container>
      </Wrapper>

      <Gallery
        id="c05"
        headline={data.textData.headline}
        imageList={[
          { id: '112', alt: 'Gallery 01' },
          { id: '112', alt: 'Gallery 02' },
          { id: '112', alt: 'Gallery 03' },
          { id: '112', alt: 'Gallery 04' }
        ]}
        container={ContainerType.CONTAINER}
      />
    </>
  )
}

export default Home
