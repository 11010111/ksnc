import { ContainerType } from "../Container/ContainerType"
import Wrapper from "../Wrapper/Wrapper"
import Container from "../Container/Container"

const Footer = () => {
  return (
    <>
      <footer>
        <Wrapper id="footer" background="#222" color="#dedede">
          <Container container={ContainerType.CONTAINER}>
            <p>Copyright @ 2023 by KSNC</p>
          </Container>
        </Wrapper>
      </footer>
    </>
  )
}

export default Footer
