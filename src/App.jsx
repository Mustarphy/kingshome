import HomePage from "./routes/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import {Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from './routes/newPostPage/newPostPage';
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";
import AboutUs from "./routes/aboutUs/aboutUs";
import contactUs from './routes/contactUs.jsx/contactus';
import Chat from "./components/chat/Chat";
import Messages from "./routes/Messages/Message";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/about",
          element:<AboutUs/>
        },
        {
          path:"/contact",
          element:<contactUs/>
        },
        {
          path:"/list",
          element:<ListPage/>,
          loader: listPageLoader,
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          loader: singlePageLoader,
        },
        {
          path:"/messages/:id",
          element:<Chat/>,
        },
        {
          path:"/messages/:id",
          element:<Messages/>,
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>,
          loader: profilePageLoader
        }, 
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        }, 
        {
          path:"/add",
          element:<NewPostPage/>
        }, 
      ],
    },
  ]);

  return <RouterProvider router={router}/>;
}

export default App;
