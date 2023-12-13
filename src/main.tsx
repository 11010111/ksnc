import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App.tsx"
import Portfolio from "./pages/Portfolio/Portfolio.tsx"
import About from "./pages/About/About.tsx"
import Home from "./pages/Home/Home.tsx"

const routes = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> }
    ]
  },
  { path: '*', element: <> 404 | Error</> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
