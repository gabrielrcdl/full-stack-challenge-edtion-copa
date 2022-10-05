import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import {Home} from './home'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    }
  ])


export const Router = () =>  (
    <RouterProvider router={router} />
)