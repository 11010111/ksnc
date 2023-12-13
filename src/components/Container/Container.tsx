import { ReactNode } from "react"
import { ContainerType } from "./ContainerType"
import { ContainerAlignment } from "./ContainerAlignment"

type Props = {
  id?: string;
  children: ReactNode | ReactNode[];
  container?: ContainerType;
  className?: string | null;
  alignment?: ContainerAlignment;
}

const Container = ({ id, children, container, className, alignment }: Props) => {
  const classList = [
    container,
    className ?? `container-py${alignment ? ' ' + alignment : ''}`
  ]

  return (
    <>
      <div id={id} className={classList.filter((c) => c !== undefined).join(' ')}>
        {children}
      </div>
    </>
  )
}

export default Container
