import MainLayout from "@layouts/MainLayout/MainLayout";
import { About, Blogs, Home, Projects, Error } from "@pages/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "blogs", element: <Blogs /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
