import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import './scss/globals.scss'

const App = () => {
  return (
    <>
      <Navigation />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App
