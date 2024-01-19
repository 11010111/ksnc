import { NavLink } from "react-router-dom"
import "./Navigation.scss"
import Image from "../Image/Image"

const Navigation = () => {
  return (
    <>
      <header className="navigation">
        <nav>
          <div className="logo">
            <NavLink to="/">
              <Image id="112" alt="Logo" width={40} height={40} />
            </NavLink>
          </div>

          <div className="link-wrapper">
            <ul>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navigation
