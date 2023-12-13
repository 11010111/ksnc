import { NavLink } from "react-router-dom"
import "./Navigation.scss"

const Navigation = () => {
  return (
    <>
      <header className="navigation">
        <nav>
          <div className="logo">
            <NavLink to="/">Home</NavLink>
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
