import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter(
  [
    {
      path:"/",
      Component: HomeLayout
    },
    {
      path:"/apps",
      element: <h2>Apps</h2>
    },
    {
      path:"/blogs",
      element: <h2>Blogs</h2>
    },
    {
      path:"/*",
      element: <h2>Error 404</h2>
    }
  ]
)


export default router;
