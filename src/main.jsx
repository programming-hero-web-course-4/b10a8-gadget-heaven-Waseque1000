import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLaoyout/MainLayout.jsx";
import Home from "./Components/Home/Home/Home.jsx";
import Details from "./Components/Details/Details.jsx";
import Statistic from "./Components/Statistic/Statistic.jsx";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard.jsx";
import Blog from "./Components/Blog/Blog.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home></Home>,
      },
      {
        path: `details/:id`,
        loader: () => fetch("/data.json"),
        element: <Details></Details>,
      },
      {
        path: "/statistic",
        loader: () => fetch("/data.json"),
        element: <Statistic />,
      },
      {
        path: "/dashboard",
        loader: () => fetch("/data.json"),
        element: <Dashboard />,
      },
      {
        path: "/blog",
        loader: () => fetch("/blog.json"),

        element: <Blog></Blog>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
