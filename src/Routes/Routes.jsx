import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Analytics } from "../Pages/Analytics";
import { links } from "../constants/Links";
import { Profile } from "../Pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, path: links.analytics, element: <Analytics /> },
      {
        path: links.profile,
        element: <Profile />,
      },
      {
        path: links.dashboard,
        element: <div className=" text-3xl">Dashboard</div>,
      },
      {
        path: links.connect,
        element: <div className=" text-3xl">Connect</div>,
      },
      {
        path: links.dealroom,
        element: <div className=" text-3xl">Dealroom</div>,
      },
    ],
  },
]);
