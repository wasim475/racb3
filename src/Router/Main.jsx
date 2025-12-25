import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import CreateArticle from "../pages/Home/CreateArticle";
import axios from "axios";
import SingleArticle from "../pages/SingleArticle/SingleArticle";
import Dashboard from "../pages/DashBoard/Dashboard";
import Protected from "./Protected";
import Announcement from "../pages/DashBoard/dashboardPage/Announcement";
import ControlArticle from '../pages/utility/ControlArticle';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Something went wrong!</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
        children: [
          {
            path: "/dashboard/accouncement",
            element: <Announcement />,
          },
          {
            path: "/dashboard/write-article",
            element: <CreateArticle />,
          },
          {
            path: "/dashboard/write-article/:id",
            element: <CreateArticle />,
          },
          {
            path: "/dashboard/control-articles",
            element: <ControlArticle />,
          },
        ],
      },

      {
        path: "/article/:id",
        element: <SingleArticle />,
        loader: async ({ params }) => {
          const res = await axios.get(
            `https://racb3-server.vercel.app/api/v1/articles/articles/${params.id}`
          );
          return res.data;
        },
      },
    ],
  },
]);

export default router;
