import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../pages/Home/Home/Home";
import Covarage from "../pages/Covarage/Covarage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoutes from "./PrivateRoutes";
import SendParcel from "../pages/sendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    hydrateFallbackElement: (
      <span className="loading loading-spinner loading-xl"></span>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: "/rider",
        element: (
          <PrivateRoutes>
            <Rider />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoutes>
            <SendParcel />
          </PrivateRoutes>
        ),
      },
      {
        path: "/coverage",
        element: <Covarage />,
        loader: () => fetch("/service-centers.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
