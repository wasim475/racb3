import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import CreateArticle from "../pages/Home/CreateArticle";
import axios from "axios";
import SingleArticle from "../pages/SingleArticle/SingleArticle";
import Dashboard from "../pages/DashBoard/Dashboard";
import Protected from "./Protected";
import Announcement from "../pages/DashBoard/dashboardPage/Announcement";
import ControlArticle from "../pages/utility/ControlArticle";
import ErrorPage from "../pages/utility/ErrorPage";
import MyNote from "../pages/userInterFace/pages/myNotes/MyNote";
import UserRouter from "./UserRouter";
import WriteNote from "../pages/userInterFace/pages/myNotes/WriteNotes";
import AllNotes from "../pages/userInterFace/pages/AllNotes/AllNotes";
import FAQ from "../pages/userInterFace/pages/FAQ/FAQ";
import SingleNote from "../pages/userInterFace/pages/AllNotes/SingleNote";
import UserImage from '../pages/userInterFace/pages/userImage/UserImage';
import ProfilePage from '../pages/userInterFace/pages/myProfile/MyProfile';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "/notes",
        element: <AllNotes />,
      },
      {
        path: "/my-notes",
        element: (
          <UserRouter>
            <MyNote />
          </UserRouter>
        ),
      },
      {
        path: "/write-note",
        element: (
          <UserRouter>
            {" "}
            <WriteNote />{" "}
          </UserRouter>
        ),
      },
      {
        path: "/write-note/:id",
        element: (
          <UserRouter>
            {" "}
            <WriteNote />{" "}
          </UserRouter>
        ),
      },
      {
        path: "/get-image-url",
        element: <UserImage />,
      },
      {
        path: "/profile",
        element: <UserRouter><ProfilePage /></UserRouter>,
      },
      {
        path: "/profile/:id",
        element: <ProfilePage />,
         loader: async ({ params }) => {
          const res = await axios.get(
            `https://racb3-server.vercel.app/api/v1/auth/users/${params.id}`
          );
          return res.data;
        },
      },
      {
        path: "/faq",
        element: <FAQ />,
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
      {
        path: "/notes/:id",
        element: <SingleNote />,
        loader: async ({ params }) => {
          const res = await axios.get(
            `https://racb3-server.vercel.app/api/v1/note/notes/${params.id}`
          );
          return res.data;
        },
      },
    ],
  },
]);

export default router;
