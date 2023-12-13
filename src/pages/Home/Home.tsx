import { ContainerType } from "../../components/Container/ContainerType"
import { ContainerAlignment } from "../../components/Container/ContainerAlignment"
import Hero from "../../components/Hero/Hero"
import Text from "../../components/Text/Text"
import Wrapper from "../../components/Wrapper/Wrapper"
import Container from "../../components/Container/Container"
import Picture from "../../components/Picture/Picture"
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

      <Wrapper id="c05">
        <Container container={ContainerType.CONTAINER}>
          <Picture id="584c2932-6581-4c78-bbf9-566746959fbe" alt="Image 2" size="sm" />
        </Container>
      </Wrapper>
    </>
  )
}

export default Home
