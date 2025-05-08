import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import AppDetails from "../pages/AppDetails";
import PrivateRoute from "../provider/PrivateRoute";
import MyProfile from "../pages/MyProfile";
import Blogs from "../pages/Blogs";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../pages/Loading";

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
      },
    ],
  },
  {
    path: "/app-details/:id",
    element: (
      <PrivateRoute>
        <AppDetails></AppDetails>,
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loading />,
    loader: () => fetch("/app_data.json"),
  },
  {
    path: "/auth/profile",
    element: (
      <PrivateRoute>
        <MyProfile></MyProfile>
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loading />,
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>,
    hydrateFallbackElement: <Loading />,
    loader: () => fetch("../blogs.json"),
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
