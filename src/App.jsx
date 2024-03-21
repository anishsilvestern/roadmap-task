import { RouterProvider, createBrowserRouter } from "react-router-dom"
import NavBar from "./Componets/NavBar"
import TrendingArticles from "./Componets/TrendingArticles"
import Fsd from "./Componets/Fsd"
import CyberSecurity from "./Componets/CyberSecurity"
import UiUx from "./Componets/UiUx"
import DataScience from "./Componets/DataScience"

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar />,
      children: [
        {
          path: '',
          element: <TrendingArticles />
        },
        {
          path: 'TrendingArticles',
          element: <TrendingArticles />
        },
        {
          path: 'fullstackdevelopment',
          element: <Fsd />
        },
        {
          path: "datascience",
          element: <DataScience />
        },
        {
          path: "cybersecurity",
          element: <CyberSecurity />
        },
        {
          path: "UI/UX",
          element: <UiUx /> 
        }
      ]
      
    }
  ])

  

const App = () => {
  return <RouterProvider router={router}/>
    

}

export default App