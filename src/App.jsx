import {
  Route,
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
