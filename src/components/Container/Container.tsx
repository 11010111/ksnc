import { ReactNode } from "react"
import { ContainerType } from "./ContainerType"

type Props = {
  id?: string;
  children: ReactNode | ReactNode[];
  container?: ContainerType;
  className?: string | null
}

const Container = ({ id, children, container, className }: Props) => {
  const classList = [
    container,
    className ?? "container-py"
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
