import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Blogs, Projects, BlogDetails } from "./pages/index";
import { store } from "./rtk/app/store";
import { Provider } from 'react-redux'
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter basename="/portfolio/">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs/blog/:blogId" element={<BlogDetails />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
