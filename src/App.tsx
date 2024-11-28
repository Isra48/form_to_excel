import { BrowserRouter, Route, useRoutes } from "react-router-dom"
import Home from "./Pages/Home"
import Tnks_page from "./Pages/Tnks_page"

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/',element: <Home/> },
    {path: '/gracias',element: <Tnks_page/> },
  ])
 return routes
}


const App = () => {
  return (

    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
   
  )
}


export default App
