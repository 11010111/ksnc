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
          <Picture id="563c2a3a-a948-49a8-9ce1-2d9fd065c607" alt="Image 1" size="sm" />
        </Container>
      </Wrapper>

      <Gallery
        id="c05"
        headline={data.textData.headline}
        imageList={[
          { id: '584c2932-6581-4c78-bbf9-566746959fbe', alt: 'Gallery 01', size: 'sm' },
          { id: '563c2a3a-a948-49a8-9ce1-2d9fd065c607', alt: 'Gallery 02', size: 'sm' },
          { id: 'bed6ebf1-787f-496d-a7c8-5f6542c30a42', alt: 'Gallery 03', size: 'sm' },
          { id: 'bce6e10c-cd46-462a-a7f8-5037e8d6cc6d', alt: 'Gallery 04', size: 'sm' }
        ]}
        container={ContainerType.CONTAINER}
      />
    </>
  )
}

export default Home
