import { ContainerType } from "../../components/Container/ContainerType"
import Hero from "../../components/Hero/Hero"
import Wrapper from "../../components/Wrapper/Wrapper"
import Container from "../../components/Container/Container"
import Picture from "../../components/Picture/Picture"

const Home = () => {
  return (
    <>
      <Hero data={{ imgId: 'bed6ebf1-787f-496d-a7c8-5f6542c30a42', alt: 'Hero Image', size: 'sm' }}>
        <h1>Lorem ipsum dolor sit</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vero, maxime praesentium ab sunt et est. Earum quam hic, laudantium quasi, veritatis sapiente aperiam dignissimos quia ipsam, magnam illum facilis!</p>
      </Hero>

      <Wrapper background="#f8f8f8">
        <Container container={ContainerType.CONTAINER} className="container-py container-center">
          <div className="w-800 text-center">
            <h2>Lorem ipsum dolor sit</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam accusamus dignissimos sed excepturi illum esse eveniet enim possimus repudiandae! Id fuga voluptatibus neque corrupti tempore dicta, nam ex maxime?</p>
          </div>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container container={ContainerType.CONTAINER}>
          <div className="w-800">
            <h3>Lorem ipsum dolor sit</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam accusamus dignissimos sed excepturi illum esse eveniet enim possimus repudiandae! Id fuga voluptatibus neque corrupti tempore dicta, nam ex maxime? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique facilis corporis mollitia ipsam ea. Repudiandae ea magnam molestias voluptatem repellendus placeat laborum ratione! Enim natus perspiciatis quia, at harum veritatis?</p>
          </div>
        </Container>
      </Wrapper>

      <Container container={ContainerType.CONTAINER} className="container-pb">
        <div className="image">
          <Picture imgId="563c2a3a-a948-49a8-9ce1-2d9fd065c607" alt="Image" />
        </div>
      </Container>
    </>
  )
}

export default Home
