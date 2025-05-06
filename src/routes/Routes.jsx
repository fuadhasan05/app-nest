import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      }
    ],
  },
  {
    path: "/blogs",
    element: <h2>Blogs</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
