import { Navigate } from "react-router-dom"
import Home from "../pages/Home";
import About from "../pages/About";
import Rank from "../pages/Rank";
import Recommend from "../pages/Recommend";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />,
    children: [
        {
            path: "/home",
            element: <Navigate to="/home/recommend" />
        },
        {
            path: "/home/recommend",
            element: <Recommend />
        },
        {
            path: "/home/rank",
            element: <Rank />
        },
    ]
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "*",
    element: <NotFound />
  }
]

export default routes;