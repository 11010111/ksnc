import { ReactNode } from "react"

type Props = {
  id?: string;
  className?: string;
  children: ReactNode | ReactNode[];
  color?: string;
  background?: string;
}

const Wrapper = ({ children, background, color, id, className }: Props) => {
  return (
    <>
      <div
        id={id}
        className={className}
        style={{ color: color, background: background }}
      >
        {children}
      </div>
    </>
  )
}

export default Wrapper
