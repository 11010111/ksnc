import { ContainerType } from "../Container/ContainerType"
import { ContainerAlignment } from "../Container/ContainerAlignment";
import Wrapper from "../Wrapper/Wrapper"
import Container from "../Container/Container"

type TextProps = {
  headline: string;
  bodytext?: string;
}

type Props = {
  id?: string;
  textData: TextProps;
  background?: string;
  color?: string;
  alignment?: ContainerAlignment;
  className?: string;
  container: ContainerType;
}

const Text = ({ id, background, color, textData, alignment, className, container }: Props) => {
  const { headline, bodytext } = textData

  return (
    <>
      <Wrapper id={id} background={background} color={color}>
        <Container container={container} alignment={alignment}>
          <div className={className}>
            <h2>{headline}</h2>
            {bodytext && (
              <p>{bodytext}</p>
            )}
          </div>
        </Container>
      </Wrapper>
    </>
  )
}

export default Text
