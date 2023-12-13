import { ContainerType } from "../../components/Container/ContainerType"
import Wrapper from "../../components/Wrapper/Wrapper"
import Container from "../../components/Container/Container"

const About = () => {
  return (
    <>
      <Wrapper>
        <Container container={ContainerType.CONTAINER}>
          <h1>About</h1>
        </Container>
      </Wrapper>
    </>
  )
}

export default About
